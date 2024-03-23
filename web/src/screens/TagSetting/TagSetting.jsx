import styled from "styled-components";

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
  color: #ec407a;
`;

const Info = styled.div`
  font-size: 12px;
  color: #616161;
`;

const Highlight = styled.span`
  color: #f48fb1;
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
  background-color: #f76da7;
  color: #ffffff;
`;

const NextBtn = styled.div`
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

const TagSetting = () => {
  return (
    <RealContainer>
      <Container>
        <Title>
          <Name>박정민</Name>님 안녕하세요!
        </Title>
        <Info>당신에 대해 알려주세요.</Info>
        <Info>
          당신과 비슷한 사람을 <Highlight>우연</Highlight>이 발견해 줄게요:)
        </Info>
        <TagContainer>
          <TagSubContainer>
            <TagTitle>취미</TagTitle>
            <Tags>
              <Tag>#영화</Tag>
              <SelectedTag>#책</SelectedTag>
              <Tag>#영화</Tag>
              <Tag>#영화</Tag>
              <Tag>#영화</Tag>
              <Tag>#영화</Tag>
              <Tag>#영화</Tag>
              <Tag>#영화</Tag>
            </Tags>
          </TagSubContainer>
        </TagContainer>
        <TagContainer>
          <TagSubContainer>
            <TagTitle>취미</TagTitle>
            <Tags>
              <Tag>#영화</Tag>
              <SelectedTag>#책</SelectedTag>
              <Tag>#영화</Tag>
              <Tag>#영화</Tag>
              <Tag>#영화</Tag>
              <Tag>#영화</Tag>
              <Tag>#영화</Tag>
              <Tag>#영화</Tag>
            </Tags>
          </TagSubContainer>
        </TagContainer>
        <TagContainer>
          <TagSubContainer>
            <TagTitle>취미</TagTitle>
            <Tags>
              <Tag>#영화</Tag>
              <SelectedTag>#책</SelectedTag>
              <Tag>#영화</Tag>
              <Tag>#영화</Tag>
              <Tag>#영화</Tag>
              <Tag>#영화</Tag>
              <Tag>#영화</Tag>
              <Tag>#영화</Tag>
            </Tags>
          </TagSubContainer>
        </TagContainer>
        <TagContainer>
          <TagSubContainer>
            <TagTitle>취미</TagTitle>
            <Tags>
              <Tag>#영화</Tag>
              <SelectedTag>#책</SelectedTag>
              <Tag>#영화</Tag>
              <Tag>#영화</Tag>
              <Tag>#영화</Tag>
              <Tag>#영화</Tag>
              <Tag>#영화</Tag>
              <Tag>#영화</Tag>
            </Tags>
          </TagSubContainer>
        </TagContainer>
        <TagContainer>
          <TagSubContainer>
            <TagTitle>취미</TagTitle>
            <Tags>
              <Tag>#영화</Tag>
              <SelectedTag>#책</SelectedTag>
              <Tag>#영화</Tag>
              <Tag>#영화</Tag>
              <SelectedTag>#영화</SelectedTag>
              <Tag>#영화</Tag>
              <Tag>#영화</Tag>
              <Tag>#영화</Tag>
            </Tags>
          </TagSubContainer>
        </TagContainer>
      </Container>
      <NextBtn>다음 단계</NextBtn>
    </RealContainer>
  );
};

export default TagSetting;
