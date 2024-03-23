import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import instance from "../utils/instance";

// Styled components
const Container = styled.div`
  background: #f8f8f8;
  padding: 2rem;
  max-width: 600px;
  width: 100%;
  margin: auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;
const Highlight = styled.span`
  color: #ff8e5e; // 여기에서 원하는 색깔로 설정하세요
  font-weight: bold;
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
  color: #f36427;
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
    background-color: #f36427;
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
  background: ${(props) => (props.active ? "#F36427" : "#e7e7e7")};
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 20px;
  margin: 0 5px;
  &:focus {
    outline: none;
  }
`;
const Title = styled.h2`
  font-size: 1.5em;
  margin-right: 10px;
  display: inline;
  color: #000000;
`;

const ConfirmButton = styled.button`
  width: 100%;
  background: #f36427;
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
  const [gender, setGender] = useState("none");
  const [genderFriend, setGenderFriend] = useState("none");
  const [toggle, setToggle] = useState(false); // New state for toggle
  const [toggleFriend, setToggleFriend] = useState(false); // New state for friend toggle
  const [minAge, setMinAge] = useState("");
  const [maxAge, setMaxAge] = useState("");
  const [minAgeFriend, setMinAgeFriend] = useState("");
  const [maxAgeFriend, setMaxAgeFriend] = useState("");
  const navigate = useNavigate();

  const handleGenderSelect = (selectedGender) => {
    setGender(selectedGender);
  };
  const handleGenderSelectFriend = (selectedGenderFriend) => {
    setGenderFriend(selectedGenderFriend);
  };

  const handleToggle = () => {
    setToggle(!toggle); // Update the toggle status
  };

  const handleToggleFriend = () => {
    setToggleFriend(!toggleFriend);
  };

  const registerUser = async (signupData) => {
    try {
      // instance를 사용하여 /user 엔드포인트에 POST 요청
      const response = await instance.post("/user", signupData);
      console.log("회원가입 성공:", response.data);
      // 회원가입 성공 후 처리, 예를 들어 로그인 페이지로 이동
      navigate("/login");
    } catch (error) {
      console.error("회원가입 실패:", error.response ? error.response.data : error);
      // 에러 처리 로직, 예를 들어 에러 메시지 표시
    }
  };
  
  const handleConfirm = () => {
    const signupData = JSON.parse(localStorage.getItem("signupData")) || {};

    // friend와 lover 설정 추가, 연령 값들을 숫자로 변환
    signupData.friend = {
      minAge: minAgeFriend ? parseInt(minAgeFriend, 10) : 0,
      maxAge: maxAgeFriend ? parseInt(maxAgeFriend, 10) : 200,
      gender: genderFriend
    };

    signupData.lover = {
      minAge: minAge ? parseInt(minAge, 10) : 0,
      maxAge: maxAge ? parseInt(maxAge, 10) : 200,
      gender: gender
    };
  
    // 변경된 signupData를 Localstorage에 저장
    localStorage.setItem("signupData", JSON.stringify(signupData));
    
    registerUser(signupData);
  };
    

  const [nickname, setNickname] = useState(""); // 닉네임 상태 초기화
  // 기존 상태 및 핸들러 정의 코드는 생략됨

  useEffect(() => {
    // Localstorage에서 signupData 가져오기
    const signupData = JSON.parse(localStorage.getItem("signupData"));
    if (signupData && signupData.name) {
      setNickname(signupData.name); // signupData에서 name을 가져와 닉네임 상태 업데이트
    }
  }, []);
  return (
    <Container>
      <Greeting>
        <Nickname>{nickname}</Nickname>님 안녕하세요!
      </Greeting>
      <SubText>
        당신이 원하는 만남을 알려주세요.
        <br />
        당신이 바라는 사람을 <Highlight>우연</Highlight>이 발견해줄게요 :)
      </SubText>

      <div
        style={{
          display: "flex",
          alignItems: "flex-between",
          marginBottom: "1rem",
        }}
      >
        <Title>친구 찾기</Title>
        <ToggleContainer>
          <ToggleLabel>
            <ToggleInput
              type="checkbox"
              onChange={handleToggleFriend}
              checked={toggleFriend}
            />
            <Slider />
          </ToggleLabel>
        </ToggleContainer>
      </div>

      {toggleFriend && (
        <>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <SubText>연령 </SubText>
            <Input
              type="number"
              value={minAgeFriend}
              onChange={(e) => setMinAgeFriend(e.target.value)}
              placeholder="최소 연령"
            />
            <SubText>살 이상 </SubText>
            <Input
              type="number"
              value={maxAgeFriend}
              onChange={(e) => setMaxAgeFriend(e.target.value)}
              placeholder="최대 연령"
            />
            <SubText>살 이하</SubText>
          </div>
          <div>
            <GenderButton
              active={genderFriend === "male"}
              onClick={() => handleGenderSelectFriend("male")}
            >
              남성
            </GenderButton>
            <GenderButton
              active={genderFriend === "female"}
              onClick={() => handleGenderSelectFriend("female")}
            >
              여성
            </GenderButton>
            <GenderButton
              active={genderFriend === "none"}
              onClick={() => handleGenderSelectFriend("none")}
            >
              상관없음
            </GenderButton>
          </div>
        </>
      )}
      <div
        style={{
          display: "flex",
          alignItems: "flex-between",
          marginBottom: "1rem",
        }}
      >
        <Title>연인 찾기</Title>
        <ToggleContainer>
          <ToggleLabel>
            <ToggleInput
              type="checkbox"
              onChange={handleToggle}
              checked={toggle}
            />
            <Slider />
          </ToggleLabel>
        </ToggleContainer>
      </div>

      {toggle && (
        <>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <SubText>연령 </SubText>
            <Input
              type="number"
              value={minAge}
              onChange={(e) => setMinAge(e.target.value)}
              placeholder="최소 연령"
            />
            <SubText>살 이상 </SubText>
            <Input
              type="number"
              value={maxAge}
              onChange={(e) => setMaxAge(e.target.value)}
              placeholder="최대 연령"
            />
            <SubText>살 이하</SubText>
          </div>
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
        </>
      )}
      <ConfirmButton onClick={handleConfirm}>확인</ConfirmButton>
    </Container>
  );
};

export default FindSetting;
