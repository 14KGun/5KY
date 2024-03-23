import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 3px 6px #00000029;
  margin: 10px;
  font-family: 'Pretendard Variable', sans-serif;
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
`;

const MetCount = styled.div`
  font-size: 24px; /* 크기는 조절 가능 */
  color: #666;
  display: flex;
  align-items: center;
`;

const MailIcon = styled.span`
  font-size: 20px; /* 크기는 조절 가능 */
  margin-left: 5px;
`;

const HistoryCard = ({ id, nickname, metCount, isHeartFilled, onHeartClick }) => {
    return (
      <Card>
        <HeartIcon onClick={() => onHeartClick(id)}>
          {isHeartFilled ? '❤️' : '🤍'} {/* 부모로부터 받은 상태에 따라 하트 표시 */}
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
