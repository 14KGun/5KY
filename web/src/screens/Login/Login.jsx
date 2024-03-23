import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useCallback, useState } from "react";
import instance from "../../utils/instance";
import { useCookies } from 'react-cookie';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.div`
  font-size: 50px;
  font-weight: Bold;
  color: #f36427;
  margin-bottom: 71px;
`;

const IdContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 25px;
`;

const Label = styled.div`
  font-size: 14px;
  margin-bottom: 8px;
`;

const Input = styled.input`
  background-color: #fafafa;
  height: 50px;
  width: 287px;
  border: 0px solid transparent;
  border-radius: 12px;
  padding: 0 15px;
  &:focus {
    outline: none;
    box-shadow: 0px 0px 2px #f36427;
  }
`;

const LoginBtn = styled.div`
  width: 317px;
  height: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f36427;
  color: white;
  font-size: 16px;
  font-weight: 750;
  margin: 15px 0px;
  border: 0px solid transparent;
  border-radius: 12px;
`;

const ToSignUp = styled.div`
  width: 317px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  font-size: 14px;
`;

const Info = styled.div`
  font-weight: 100;
`;

const SignupBtn = styled.div`
  color: #f36427;
  font-weight: 700;
  margin-left: 5px;
  &:hover {
    cursor: pointer;
  }
`;

const Login = () => {
  const navigate = useNavigate();
  const [cookies, setCookie] = useCookies(["userId"]);
  const [id, setId] = useState();
  const [pw, setPw] = useState();

  const onClickLogin = useCallback(async () => {
    try {
      const { data } = await instance.post("/auth", { id, password: pw });
      //console.log(data);
      setCookie("userId", data, { path: "/", maxAge: 30 * 24 * 60 * 60 });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }, [id, pw]);

  const handleSignupClick = () => {
    navigate("/signup");
  };

  return (
    <Container>
      <Title>WOOYEON?</Title>
      <IdContainer>
        <Label>아이디</Label>
        <Input
          type="text"
          placeholder="아이디를 입력해주세요"
          value={id}
          onChange={(e) => setId(e.target.value)}
        ></Input>
      </IdContainer>
      <IdContainer>
        <Label>비밀번호</Label>
        <Input
          type="password"
          placeholder="비밀번호를 입력해주세요"
          value={pw}
          onChange={(e) => setPw(e.target.value)}
        ></Input>
      </IdContainer>
      <LoginBtn onClick={onClickLogin}>로그인</LoginBtn>
      <ToSignUp>
        <Info>아직 계정이 없으신가요?</Info>
        <SignupBtn onClick={handleSignupClick}>회원가입</SignupBtn>
      </ToSignUp>
    </Container>
  );
};

export default Login;
