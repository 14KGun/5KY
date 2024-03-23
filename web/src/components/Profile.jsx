import React from "react";
import styled from "styled-components";
import setting from "../assets/setting.svg";
import HistoryCard from "./HistoryCard";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Names = styled.div`
  display: flex;
  flex-direction: row;
  align-items: first baseline;
`;

const Setting = styled.div`
  width: 32px;
  height: 32px;
  background-image: url(${setting});
  maring &:hover {
    cursor: pointer;
  }
`;

const Name = styled.div`
  font-size: 40px;
  color: #f36427;
  font-weight: 800;
`;
const Headers = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

const Header = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-size: 24px;
  padding: 23px;
  box-sizing: border-box;
`;

const Info = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  font-size: 20px;
  font-weight: 500;
  padding-left: 23px;
  box-sizing: border-box;
`;

const Bold = styled.div`
  font-weight: 600;
  color: #f36427;
  margin-left: 5px;
`;

const TagContainers = styled.div`
  width: 344px;
  height: 199px;
  background-color: #f3f3f3;
  margin-top: 17px;
  border: 0px solid transparent;
  border-radius: 15px;
`;

const TagContainer = styled.div`
  margin: 17px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

`;

const Tags = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  flex-wrap: wrap;

`;

const Tag = styled.div`
  width: 72px;
  height: 32px;
  background-color: #ff8e5e;
  border: 0px solid transparent;
  border-radius: 17px;
  margin: 5px;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Profile = ({ name, tags }) => {
  return (
    <Container>
      <Headers>
        <Header>
          <Names>

            <Name>{name}</Name>님
          </Names>
          <Setting></Setting>
        </Header>

        <Info>
          오늘은 <Bold>2번의 우연</Bold>이 발생했습니다.
        </Info>
      </Headers>
      <TagContainers>
        <TagContainer>
          <Tags>
            {tags.map((tag, index) => (
              <Tag key={index}>#{tag}</Tag>
            ))}
          </Tags>
        </TagContainer>
      </TagContainers>
      <HistoryCard></HistoryCard>
    </Container>
  );
};

export default Profile;
