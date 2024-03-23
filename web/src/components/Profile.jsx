import React from 'react';
import styled from 'styled-components';

const ProfileContainer = styled.div`
  background: #ffffff;
  border-radius: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  max-width: 350px; // Adjust width as needed
  font-family: 'Roboto', sans-serif;
  margin: auto;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 2rem;
`;

const Title = styled.h2`
  color: #ff4b5c; // Adjust the color to match the design
  font-size: 1.5rem;
  font-weight: bold;
  margin-right: 10px; // Add some space between the title and the description
`;

const Description = styled.p`
  color: #000;
  font-size: 1.1rem;
  font-weight: normal;
`;


const Info = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1rem;
  margin-bottom: 1rem;
  & > span {
    font-weight: bold;
  }
`;

const Tags = styled.div`
  color: #000000;
  font-size: 0.9rem;
  font-weight: bold;
  margin-bottom: 2rem;
  text-align: center;
`;

const ActionsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 1rem;
`;

const ActionButton = styled.button`
  background: transparent;
  border: 2px solid #ccc;
  border-radius: 20px;
  padding: 10px 20px;
  font-size: 0.9rem;
  color: #000;
  cursor: pointer;
  &:hover {
    background: #f0f0f0;
  }
`;

const Profile = () => {
  return (
    <ProfileContainer>
      <Header>
        <Title>박정민</Title>
        <Description>님이 12분 전에 우연을 울렸어요!</Description>
      </Header>
      <Info>
        <span>성별</span> 여성
        <span>연령</span> 23세
      </Info>
      <Tags>
        #맛집탐방 #음악
      </Tags>
      <Tags>
        #맛집탐방 #애니메이션 #음악
      </Tags>
      <ActionsContainer>
        <ActionButton>채팅하기</ActionButton>
        <ActionButton>닫기</ActionButton>
      </ActionsContainer>
    </ProfileContainer>
  );
};

export default Profile;
