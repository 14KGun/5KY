import React, { useCallback, useEffect, useState } from "react";
import HistoryCard from "../components/HistoryCard";
import styled from "styled-components";
import About from "../components/About";
import { Box, Modal } from "@mui/material";
import PrimaryButton from "../components/PrimaryButton";
import useSWR from "swr";
import instance from "../utils/instance";
import { useCookies } from "react-cookie";

// 각 항목에 고유한 id 속성을 추가합니다.
const initialHistoryData = [
  {
    id: 1,
    nickname: "제이",
    metCount: 51,
    isHeartFilled: true,
    date: "2024-03-23",
  },
  {
    id: 2,
    nickname: "프로스트",
    metCount: 3,
    isHeartFilled: false,
    date: "2024-03-23",
  },
  {
    id: 3,
    nickname: "라이트",
    metCount: 1,
    isHeartFilled: false,
    date: "2024-03-22",
  },
  {
    id: 4,
    nickname: "얼그레이",
    metCount: 23,
    isHeartFilled: true,
    date: "2024-03-23",
  },
  {
    id: 5,
    nickname: "수니",
    metCount: 10,
    isHeartFilled: false,
    date: "2024-03-22",
  },
  {
    id: 6,
    nickname: "블루디",
    metCount: 7,
    isHeartFilled: true,
    date: "2024-03-22",
  },
];

const Container = styled.div`
  width: 100vw;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 15px; /* top and bottom padding 20px, left and right padding 15px */
  background: #ffffff; /* 배경 색 */
  margin: 0 auto; /* 중앙 정렬 */
  padding-bottom: 50px;
`;

const SectionTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start; /* Align text to the left */
  width: 100%; /* Fill the width */
  font-size: 24px;
  font-weight: 700;
  color: #333;
  margin: 20px 0 20px 25px;
`;

const History = () => {
  const [historyData, setHistoryData] = useState(initialHistoryData);
  const [openProfile, setOpenProfile] = useState(false);
  const [selectedNickname, setSelectedNickname] = useState("");
  const [selectedUser , setSelectedUser] = useState({});

  const [cookies] = useCookies(["userId"]);
  const id = cookies.userId;

  // useCallback(async () => {
  //   try {
  //     const { data } = await instance.post("/history/byMe", { id, password: pw });
  //     //console.log(data);
  //     setCookie('userId', data, { path: '/', maxAge: 30 * 24 * 60 * 60 });
  //     navigate("/");
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }, [id, pw]);
  const { data, error, isLoading } = useSWR(`/history/byMe?userId=${id}`);
  useEffect(() => {
    console.log(data? data[0].users:null);
    setHistoryData(data? data[0].users : []);
  }, [data]);
  //console.log("zzz", data);
  // 북마크된 항목만 필터링합니다.
  const bookmarks = historyData.filter((item) => item.isHeartFilled);
  const today = new Date().toISOString().split("T")[0];
  const todaysCoincidences = historyData.filter((item) => item.date === today);

  // toggleHeart 함수는 id를 받아 해당하는 항목의 isHeartFilled 상태를 토글합니다.
  const toggleHeart = (id) => {
    const updatedHistory = historyData.map((item) =>
      item.id === id ? { ...item, isHeartFilled: !item.isHeartFilled } : item
    );
    setHistoryData(updatedHistory);
  };

  const cardClick = (user) => {
    setOpenProfile(true);
    setSelectedUser(user);
  };

  const allCoincidences = historyData.filter((item) => !item.isHeartFilled);

  return (
    <>
      <Modal open={openProfile} onClose={() => setOpenProfile(false)}>
        <Box>
          <About setOpenProfile={setOpenProfile} user={selectedUser} />
        </Box>
      </Modal>
      <Container>
        {bookmarks.map((data) => (
          <HistoryCard
            key={data.id}
            id = {data.id}
            nickname={data.name}
            metCount={1}
            isHeartFilled={true}
            user={data}
            onHeartClick={toggleHeart}
            onCardClick={cardClick}
          />
        ))}

        <SectionTitle>오늘의 우연</SectionTitle>
        {todaysCoincidences.map((data) => {
          return (
          <HistoryCard
            key={data.id}
            {...data}
            onHeartClick={toggleHeart}
            onCardClick={cardClick}
          />
        )})}
        
        <SectionTitle>그 모든 우연</SectionTitle>
        {allCoincidences.map((data) => {
          console.log("??",data);
          return(
          <HistoryCard
            key={data.id}
            id={data.id}
            nickname={data.name}
            metCount={1}
            isHeartFilled={false}
            user = {data}
            onHeartClick={toggleHeart}
            onCardClick={cardClick}
          />
        )})}
      </Container>
    </>
  );
};

export default History;
