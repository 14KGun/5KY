import styled from "styled-components";
import logo from "./../../assets/logo.svg";
// import Select from "react-select";
import { useNavigate } from "react-router-dom";
import { useCallback, useState } from "react";
import instance from "../../utils/instance";
import { Box, TextField, Typography } from "@mui/material";
import CustomButton from "../../components/PrimaryButton";

import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

// import Dropdown from "react-bootstrap/Dropdown";
// import DropdownButton from "react-bootstrap/DropdownButton";
// import DropDown from "./DropDown";

var genders = [
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
    box-shadow: 0px 0px 2px #f36427;
  }
`;

const SignupBtn = styled.div`
  width: 317px;
  height: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f36427;
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
  const navigate = useNavigate();
  const [id, setId] = useState();
  const [pw, setPw] = useState();
  const [pwCheck, setPwCheck] = useState();
  const [name, setName] = useState();
  const [age, setAge] = useState();
  const [gender, setGender] = useState();

  const handleChange = (event) => {
    setGender(event.target.value);
    console.log(gender);
  };

  const onClickSignUp = useCallback(() => {
    // 입력값 검증 로직 (예: 비밀번호 확인 일치 여부) 추가 가능
    if (pw !== pwCheck) {
      alert("비밀번호가 일치하지 않습니다.");
      return; // Stop the sign-up process
    }
    // Local Storage에 입력값 저장
    localStorage.setItem(
      "signupData",
      JSON.stringify({ id, password: pw, name, age, gender })
    );

    // /tagsetting 페이지로 이동
    navigate("/tagsetting");
  }, [id, pw, pwCheck, name, age, gender, navigate]);

  return (
    <Container>
      <Logo src={logo} />
      <InputContainer>
        <Label>이름</Label>
        <Input
          type="text"
          placeholder="이름을 입력해주세요"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></Input>
        <Label>연령</Label>
        <Input
          type="text"
          placeholder="연령을 입력해주세요"
          value={age}
          onChange={(e) => {
            const parsedAge = parseInt(e.target.value, 10);
            // 입력된 값이 숫자이면 상태 업데이트, 아니면 아무 동작도 하지 않음
            // 이는 유효하지 않은 입력을 무시하고, 사용자가 숫자만 입력하도록 유도합니다.
            // 또는 사용자가 입력 필드를 비웠을 때 'NaN' 대신에 빈 문자열이나 초기 상태를 설정할 수 있습니다.
            if (!isNaN(parsedAge)) {
              setAge(parsedAge);
            } else {
              // 예: setAge(''); 또는 초기 상태로 설정
            }
          }}
        ></Input>
        <Label>성별</Label>
        <FormControl sx={{ m: 1, width: 300, mt: 3 }}></FormControl>
        <Select
          sx={{
            width: "287px",
            height: "50px",
            backgroundColor: "#fafafa",
            borderRadius: "12px",
            padding: "0 15px",
            marginBottom: "24px",
            fontSize: "12px",
            "&:focus": {
              outline: "none",
              boxShadow: "0px 0px 2px #f36427",
            },
          }}
          value={gender}
          onChange={handleChange}
          displayEmpty
        >
          <MenuItem value={"male"}>남성</MenuItem>
          <MenuItem value={"female"}>여성</MenuItem>
          <MenuItem value={"밝히고 싶지 않음"}>밝히고 싶지 않음</MenuItem>
        </Select>
        <Label>아이디</Label>
        <Input
          type="text"
          placeholder="아이디를 입력해주세요"
          value={id}
          onChange={(e) => setId(e.target.value)}
        ></Input>
        <Label>비밀번호</Label>
        <Input
          type="password"
          placeholder="비밀번호를 입력해주세요"
          value={pw}
          onChange={(e) => setPw(e.target.value)}
        ></Input>
        <Label>비밀번호 확인</Label>
        <Input
          type="password"
          placeholder="비밀번호를 한번 더 입력해주세요"
          value={pwCheck}
          onChange={(e) => setPwCheck(e.target.value)}
        ></Input>
      </InputContainer>
      <SignupBtn onClick={onClickSignUp}>회원가입</SignupBtn>
    </Container>
  );
};

export default SignUp;
