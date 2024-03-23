import React, { useState } from "react";
import HistoryCard from "../components/HistoryCard";
import styled from "styled-components";

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
  background: #f7f7f7; /* 배경 색 */
  margin: 0 auto; /* 중앙 정렬 */
`;

const SectionTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start; /* Align text to the left */
  width: 100%; /* Fill the width */
  font-size: 24px;
  font-weight: 600;
  color: #333;
  margin: 20px 0;
`;


const History = () => {
  const [historyData, setHistoryData] = useState(initialHistoryData);

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

  const allCoincidences = historyData.filter((item) => !item.isHeartFilled);

  return (
    <Container>
      {bookmarks.map((data) => (
        <HistoryCard key={data.id} {...data} onHeartClick={toggleHeart} />
      ))}

      <SectionTitle>오늘의 우연</SectionTitle>
      {todaysCoincidences.map((data) => (
        <HistoryCard key={data.id} {...data} onHeartClick={toggleHeart} />
      ))}

      <SectionTitle>그 모든 우연</SectionTitle>
      {allCoincidences.map((data) => (
        <HistoryCard key={data.id} {...data} onHeartClick={toggleHeart} />
      ))}
    </Container>
  );
};

export default History;
