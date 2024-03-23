import styled from "styled-components";
import logo from "./../../assets/logo.svg";
import Select from "react-select";
// import Dropdown from "react-bootstrap/Dropdown";
// import DropdownButton from "react-bootstrap/DropdownButton";
// import DropDown from "./DropDown";

var gender = [
  { value: "male", label: "남성" },
  { value: "female", label: "여성" },
  { value: "unknown", label: "알리고 싶지 않음" },
];
const Container = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Logo = styled.img`
  margin: 50px 0;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  /* margin-bottom: 25px; */
`;

const Label = styled.div`
  font-size: 12px;
  margin-bottom: 8px;
  font-weight: 300;
`;

const Input = styled.input`
  background-color: #fafafa;
  height: 50px;
  width: 287px;
  border: 0px solid transparent;
  border-radius: 12px;
  padding: 0 15px;
  margin-bottom: 24px;
  font-size: 12px;
  &:focus {
    outline: none;
    box-shadow: 0px 0px 2px #ec407a;
  }
`;

const SignupBtn = styled.div`
  width: 317px;
  height: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #ec407a;
  color: white;
  font-size: 16px;
  font-weight: 700;
  margin: 15px 0px 50px 0px;
  border: 0px solid transparent;
  border-radius: 12px;
  &:hover {
    cursor: pointer;
  }
`;

const SignUp = () => {
  return (
    <Container>
      <Logo src={logo} />
      <InputContainer>
        <Label>이름</Label>
        <Input type="text" placeholder="이름을 입력해주세요"></Input>
        <Label>연령</Label>
        <Input type="text" placeholder="연령을 입력해주세요"></Input>
        <Label>성별</Label>
        <Select
          options={gender}
          placeholder="성별을 선택해주세요"
          id="gender"
        />

        <Label>아이디</Label>
        <Input type="text" placeholder="아이디를 입력해주세요"></Input>
        <Label>비밀번호</Label>
        <Input type="password" placeholder="비밀번호를 입력해주세요"></Input>
        <Label>비밀번호 확인</Label>
        <Input
          type="password"
          placeholder="비밀번호를 한번 더 입력해주세요"
        ></Input>
      </InputContainer>
      <SignupBtn>회원가입</SignupBtn>
    </Container>
  );
};

export default SignUp;
