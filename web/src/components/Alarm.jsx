import React from 'react';
import styled from 'styled-components';

// Styled components
const AlarmContainer = styled.div`
  background: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  max-width: 300px; // Adjust width as needed
  font-family: 'Roboto', sans-serif; // Assuming you're using Roboto
`;

const Header = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
`;

const Highlight = styled.span`
  color: #ff4b5c; // Color only for the highlighted text
`;

const TimeStamp = styled.span`
  color: #000;
  font-size: 0.8rem;
  float: right;
`;

const Content = styled.div`
  margin-top: 0.5rem;
  color: #000;
  font-size: 0.9rem;
`;

const Tags = styled.div`
  color: #ff4b5c; // Pink color for the tags
  font-size: 0.9rem;
  font-weight: bold;
  margin: 0.5rem 0;
`;

const ActionsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
`;

const ActionButton = styled.button`
  background: transparent;
  border: 1px solid #ccc;
  border-radius: 20px;
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
  color: #000;
  cursor: pointer;
  &:hover {
    background: #f0f0f0;
  }
`;

// Alarm component
const Alarm = () => {
  return (
    <AlarmContainer>
      <Header>
        <Highlight>우연</Highlight>이 근처에 있어요! <TimeStamp>12분 전</TimeStamp>
      </Header>
      <Content>
        #음악 #맛집탐방
      </Content>
      <ActionsContainer>
        <ActionButton>자세히 보기</ActionButton>
        <ActionButton>닫기</ActionButton>
      </ActionsContainer>
    </AlarmContainer>
  );
};

export default Alarm;
