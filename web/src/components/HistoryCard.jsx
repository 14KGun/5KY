import React from "react";
import styled from "styled-components";
import heart_on from "../assets/heart_on.png";
import heart_off from "../assets/heart_off.png";

const Card = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  align-items: first baseline;
  justify-content: space-between;
  padding: 10px 20px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 3px 6px #00000029;
  margin: 10px;
  font-family: "Pretendard Variable", sans-serif;
`;

const Img = styled.img`
  width: 20px;
  height: 20px;
`;

const HeartIcon = styled.div`
  font-size: 24px; /* 크기는 조절 가능 */
  cursor: pointer;
`;

const Nickname = styled.div`
  flex-grow: 1;
  margin-left: 10px; /* 하트 아이콘과의 간격 */
  font-size: 24px; /* 크기는 조절 가능 */
  color: #333;
  font-weight: 500;
`;

const MetCount = styled.div`
  font-size: 24px; /* 크기는 조절 가능 */
  color: #ff8e5e;
  display: flex;
  font-weight: 500;
  align-items: center;
`;

const MailIcon = styled.span`
  font-size: 20px; /* 크기는 조절 가능 */
  margin-left: 8px;
`;

const HistoryCard = ({
  id,
  nickname,
  metCount,
  isHeartFilled,
  user,
  onHeartClick,
  onCardClick,
}) => {
  return (
    // const image = () => { isHeartFilled ? {heart_on} : {heart_off}};
    <Card onClick={()=>onCardClick(user)}>
      <HeartIcon
        onClick={(event) => {
          event.stopPropagation(); // 이벤트 버블링 중단
          onHeartClick(id);
        }}
      >
        {isHeartFilled ? <Img src={heart_on} /> : <Img src={heart_off} />}
        {/* <Heart src={isHeartFilled ? { heart_on } : { heart_off }}></Heart> */}
        {/* <Heart src={heart_on}> </Heart> */}
        {/* {isHeartFilled ? "❤️" : "🤍"}{" "} */}
        {/* 부모로부터 받은 상태에 따라 하트 표시 */}
      </HeartIcon>
      <Nickname>{nickname}</Nickname>
      <MetCount>
        +{metCount}
        <MailIcon>📧</MailIcon>
      </MetCount>
    </Card>
  );
};

export default HistoryCard;
