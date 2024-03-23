import styled from "styled-components";
import back from "../../assets/back.svg";
import heart_on from "../../assets/heart_on.png";
import date from "../../assets/date.svg";
import { useNavigate, useLocation } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Header = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-items: flex-start;
  margin-top: 20px;
  font-size: 24px;
  font-weight: 600;
  /* justify-content:   */
`;
const Icon = styled.img`
  height: 25px;
  width: 25px;
  margin: 0px 10px;
  &:hover {
    cursor: pointer;
  }
`;

const Infos = styled.div`
  width: 100vw;
  margin-top: 10px;
  margin-left: 60px;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 14px;
`;

const Info = styled.div`
  color: #ec6940;
`;

const ChatContainer = styled.div`
  background-color: #eaeaea;
  border: 0px solid transparent;
  border-radius: 15px;
  margin-top: 15px;
  width: 404px;
  height: 650px;
`;

const Reply1 = styled.div`
  width: 157px;
  height: 42px;
  background-color: white;
  border: 0px solid none;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 15px;
`;

const Reply2 = styled.div`
  width: 140px;
  height: 42px;
  background-color: white;
  border: 0px solid none;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 15px;
`;
const Reply3 = styled.div`
  width: 100px;
  height: 42px;
  background-color: white;
  border: 0px solid none;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 15px;
`;

const Answer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const Answer1 = styled.div`
  width: 216px;
  height: 42px;
  background-color: #ff8e5e;
  color: white;
  border: 0px solid none;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 15px 15px;
`;

const Answer2 = styled.div`
  width: 72px;
  height: 42px;
  background-color: #ff8e5e;
  color: white;
  border: 0px solid none;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 15px 15px;
`;

const Answer3 = styled.div`
  width: 136px;
  height: 42px;
  background-color: #ff8e5e;
  color: white;
  border: 0px solid none;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 15px 15px;
`;

const Img = styled.img`
  margin-left: 5px;
`;

const Chat = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const {user} = location.state;
  console.log(user);

  return (
    <Container>
      <Header>
        <Icon
          src={back}
          onClick={() => {
            navigate("/");
          }}
        ></Icon>
        <Icon src={heart_on}></Icon>
        {user.name}
      </Header>
      <Infos>
        <Info> {user.tags.map((tag)=>{
          return (`#${tag} `)
        })}</Info>이(가) 공통 관심사인 상대입니다.
      </Infos>
      <ChatContainer>
        <Reply1>어제 점심 뭐 먹었어?</Reply1>
        <Reply2>맛있는 거 먹었어?</Reply2>
        <Answer>
          <Answer1>학교 옆에 있는 유명한 카레 집</Answer1>
          <Answer2>맛있던데</Answer2>
          <Answer3>다음에 같이 갈래?</Answer3>
        </Answer>
        <Reply3>헐 좋아!!!!</Reply3>
        <Img src={date} />
      </ChatContainer>
    </Container>
  );
};

export default Chat;
