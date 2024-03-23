import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

// Styled components
const Container = styled.div`
  background: #f8f8f8;
  padding: 2rem;
  max-width: 600px;
  width: 100%;
  margin: auto;
  min-height: 100vh;  // Ensure it's at least the full height of the viewport
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;


const Greeting = styled.h1`
  color: #000000;
  font-size: 22px;
  margin-bottom: 20px;
  font-weight: medium;
`;

const Nickname = styled.span`
  font-weight: bold;
  font-size: 32px;
  color: #ff4b5c; /* Or any other color to emphasize */
`;
const SubText = styled.div`
  margin-bottom: 1rem;
  text-align: start;
  color: #000000;
`;

const ToggleContainer = styled.div`
  margin-bottom: 2rem;
`;

const ToggleLabel = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
`;

const ToggleInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
  &:checked + span {
    background-color: #ff4b5c;
  }
  &:checked + span:before {
    transform: translateX(26px);
  }
`;

const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: 0.4s;
  border-radius: 34px;

  &:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    transition: 0.4s;
    border-radius: 50%;
  }
`;
const Input = styled.input`
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const GenderButton = styled.button`
  background: ${(props) => (props.active ? "#ff4b5c" : "#e7e7e7")};
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 20px;
  margin: 0 5px;
  &:focus {
    outline: none;
  }
`;
const EmphasizedText = styled.span`
  color: #ff4b5c; /* Color for the emphasized text */
  font-weight: bold;
`;

const ConfirmButton = styled.button`
  width: 100%;
  background: #ff4b5c;
  color: white;
  border: none;
  padding: 15px 20px;
  border-radius: 20px;
  font-size: 1rem;
  margin-top: 2rem;
  &:focus {
    outline: none;
  }
`;

// Main component
const FindSetting = () => {
  const [gender, setGender] = useState("none"); // 'male', 'female', 'none'

  const handleGenderSelect = (selectedGender) => {
    setGender(selectedGender);
  };

  let navigate = useNavigate();

  const handleConfirm = () => {
    navigate("/"); // This will navigate to the root path '/'
  };
  const nickname = "닉네임";

  return (
    <Container>
      <Greeting>
        <Nickname>{nickname}</Nickname>님 안녕하세요!
      </Greeting>
      <SubText>
        당신이 원하는 만남을 알려주세요.
        <br />
        당신이 바라는 사람을 <EmphasizedText>우연</EmphasizedText>이
        발견해줄게요 :)
      </SubText>

      <ToggleContainer>
        <ToggleLabel>
          <ToggleInput type="checkbox" />
          <Slider />
        </ToggleLabel>
      </ToggleContainer>
      <Input type="number" placeholder="나이 입력" />

      {/* Gender selection */}
      <div>
        <GenderButton
          active={gender === "male"}
          onClick={() => handleGenderSelect("male")}
        >
          남성
        </GenderButton>
        <GenderButton
          active={gender === "female"}
          onClick={() => handleGenderSelect("female")}
        >
          여성
        </GenderButton>
        <GenderButton
          active={gender === "none"}
          onClick={() => handleGenderSelect("none")}
        >
          상관없음
        </GenderButton>
      </div>

      <ConfirmButton onClick={handleConfirm}>확인</ConfirmButton>
    </Container>
  );
};

export default FindSetting;
