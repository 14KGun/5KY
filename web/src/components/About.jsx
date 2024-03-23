import React from "react";
import styled from "styled-components";
import { Typography, Box, Button } from "@mui/material";

const ProfileContainer = styled.div`
  background: #ffffff;
  border-radius: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  max-width: 350px; // Adjust width as needed
  font-family: "Roboto", sans-serif;
  margin: 50px auto;
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

const About = ({ setOpenProfile, user }) => {
  return (
    <ProfileContainer>
      <Box
        sx={{
          width: "100%",
          marginLeft: "1rem",
          display: "flex",
          alignItems: "start",
          flexDirection: "column",
          justifyContent: "start",
          flexWrap: "wrap",
        }}
      >
        <Header>
          <Box
            sx={{
              width: "100%",
              marginTop: "1rem",
              display: "flex",
              alignItems: "start",
              flexDirection: "column",
              justifyContent: "start",
              flexWrap: "wrap",
              marginBottom: "2rem",
            }}
          >
            <Box
              sx={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                flexDirection: "row",
                justifyContent: "start",
                flexWrap: "wrap",
              }}
            >
              <Typography
                fontFamily={"Pretendard-Black"}
                fontSize={"24px"}
                color="primary"
              >
                {user.name}
              </Typography>
              <Typography>
                님이
                <br />
              </Typography>
            </Box>
            <Typography>당신의 우연을 울렸어요!</Typography>
          </Box>
        </Header>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Box sx={{ marginRight: "60px" }}>
            <Typography fontFamily={"Pretendard-Thin"} fontSize={"12px"}>
              성별
            </Typography>
            <Typography>{user.gender}</Typography>
          </Box>
          <Box>
            <Typography fontFamily={"Pretendard-Thin"} fontSize={"12px"}>
              나이
            </Typography>
            <Typography>{user.age}</Typography>
          </Box>
        </Box>
        {/* <Box>
          <Typography fontFamily={"Pretendard-Thin"} fontSize={"12px"}>
            공통 관심사
          </Typography>
          <Typography fontFamily={"Pretendard-Reular"}>
            #맛집탐방 #음악
          </Typography>
        </Box> */}

        <Box>
          <Typography fontFamily={"Pretendard-Thin"} fontSize={"12px"}>
            관심사
          </Typography>
          <Typography fontFamily={"Pretendard-Reular"}>
            {user.tags.map((tag) => `#${tag} `)}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            width: "100%",
            marginTop: "1rem",
          }}
        >
          <Button
            type="text"
            onClick={() => setOpenProfile(false)}
            sx={{
              color: "grey",
              margin: "0rem 8rem 0rem 0rem",
            }}
          >
            채팅하기
          </Button>
          <Button
            type="text"
            onClick={() => setOpenProfile(false)}
            sx={{
              color: "grey",
            }}
          >
            닫기
          </Button>
        </Box>
      </Box>
    </ProfileContainer>
  );
};

export default About;
