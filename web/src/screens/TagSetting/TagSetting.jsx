import styled from "styled-components";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const RealContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Container = styled.div`
  width: 100vw-60px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 30px;
`;

const Title = styled.div`
  display: flex;
  flex-direction: row;
  align-items: first baseline;
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 24px;
`;
const Name = styled.div`
  font-size: 40px;
  font-weight: 700;
  color: #f36427;
`;

const Info = styled.div`
  font-size: 12px;
  color: #616161;
`;

const Highlight = styled.span`
  color: #ff8e5e;
  font-size: 14px;
  font-weight: bold;
`;

const TagContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 24px;
`;

const TagSubContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const TagTitle = styled.div`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 10px;
`;
const Tags = styled.div`
  display: flex;
  /* flex-direction: column; */
  /* align-items: flex-start; */
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: space-between;
`;

const Tag = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 72px;
  height: 32px;
  border: 0px solid black;
  border-radius: 17px;
  background-color: #d9d9d9;
  color: #616161;
  margin-bottom: 10px;
`;

const SelectedTag = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 72px;
  height: 32px;
  border: 0px solid black;
  border-radius: 17px;
  background-color: #ff8e5e;
  color: #ffffff;
`;

const NextBtn = styled.div`
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

const initialTags = [
  {
    category: "취미",
    tags: ["영화", "책", "애니", "유튜브", "공부", "방탈출", "여행", "게임"],
  },
  {
    category: "음식",
    tags: [
      "피자",
      "마라탕",
      "라멘",
      "파스타",
      "치킨",
      "떡볶이",
      "초밥",
      "삼계탕",
    ],
  },
  {
    category: "음료",
    tags: [
      "커피",
      "칵테일",
      "탄산",
      "위스키",
      "주스",
      "에이드",
      "유제품",
      "식혜",
    ],
  },
  // 추가 분류 및 태그들...
];

const TagSetting = () => {
  const [selectedTags, setSelectedTags] = useState([]);
  const navigate = useNavigate();
  const [nickname, setNickname] = useState(""); // 닉네임 상태 초기화
  // 기존 상태 및 핸들러 정의 코드는 생략됨

  // 태그 선택/해제 핸들러
  const toggleTag = (tag) => {
    setSelectedTags((prev) => {
      if (prev.includes(tag)) {
        return prev.filter((t) => t !== tag);
      } else {
        return [...prev, tag];
      }
    });
  };

  // 태그가 선택되었는지 여부를 결정하는 함수
  const isTagSelected = (tag) => {
    return selectedTags.includes(tag);
  };

  useEffect(() => {
    // Localstorage에서 signupData 가져오기
    const signupData = JSON.parse(localStorage.getItem("signupData"));
    if (signupData && signupData.name) {
      setNickname(signupData.name); // signupData에서 name을 가져와 닉네임 상태 업데이트
    }
  }, []);

  useEffect(() => {
    // Localstorage에서 signupData 가져오기
    const storedData = localStorage.getItem("signupData");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      if (parsedData.tags) {
        setSelectedTags(parsedData.tags); // 기존에 선택된 태그들이 있다면 상태에 설정
      }
    }
  }, []);

  const handleNextClick = () => {
    const storedData = localStorage.getItem("signupData");
    let parsedData = storedData ? JSON.parse(storedData) : {};

    // 선택된 태그들을 signupData 객체에 추가
    parsedData.tags = selectedTags;

    // 변경된 데이터를 localStorage에 저장
    localStorage.setItem("signupData", JSON.stringify(parsedData)); // 변경된 데이터를 다시 저장
    navigate("/findsetting");
  };
  return (
    <RealContainer>
      <Container>
        <Title>
          <Name>{nickname}</Name>님 안녕하세요!
        </Title>
        <Info>당신에 대해 알려주세요.</Info>
        <Info>
          당신과 비슷한 사람을 <Highlight>우연</Highlight>이 발견해 줄게요:)
        </Info>
        {initialTags.map((category) => (
          <TagContainer key={category.category}>
            <TagSubContainer>
              <TagTitle>{category.category}</TagTitle>
              <Tags>
                {category.tags.map((tag) => (
                  <div key={tag} onClick={() => toggleTag(tag)}>
                    {isTagSelected(tag) ? (
                      <SelectedTag>{"#" + tag}</SelectedTag>
                    ) : (
                      <Tag>{"#" + tag}</Tag>
                    )}
                  </div>
                ))}
              </Tags>
            </TagSubContainer>
          </TagContainer>
        ))}
      </Container>
      <NextBtn onClick={handleNextClick}>다음 단계</NextBtn>
    </RealContainer>
  );
};

export default TagSetting;
