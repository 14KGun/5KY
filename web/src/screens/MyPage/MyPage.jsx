import React, { useState } from "react";
import { Button } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import CustomButton from "../../components/PrimaryButton";

import { Box, Container, Slider } from "@mui/material";
import TextField from "@mui/material/TextField";

import { useNavigate } from "react-router-dom";

import CustomizedSwitches from "../../components/Btn";
import reallogo from "../../assets/real_logo.svg";
import styled from "styled-components";
import useSWR from "swr";
import { useCookies } from "react-cookie";

function valuetext(value) {
  return `${value}°C`;
}
const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;
const LabelContainers = styled.div`
  font-size: 20px;
  font-weight: 700;
`;
const LabelContainer = styled.div`
  font-size: 20px;
`;

const Margin = styled.div`
  margin-top: 18px;
`;

const LogoutButton = styled(Button)({
  marginTop: "20px",
  backgroundColor: "#F36427",
  "&:hover": {
    backgroundColor: "#FF8E5E",
  },
  color: "white",
  fontWeight: "bold",
});

const MyPage = () => {
  const [cookies, setCookie, removeCookie] = useCookies(["userId"]);
  const navigate = useNavigate();

  const { data, error, isLoading } = useSWR(
    cookies.userId ? `/user/byMe?userId=${cookies.userId}` : null
  );

  const [friendshipToggle, setFriendshipToggle] = useState(true);
  const [loveToggle, setLoveToggle] = useState(true);

  const [value, setValue] = React.useState([20, 37]);
  const handleLogout = () => {
    removeCookie("userId", { path: "/" }); // 쿠키 제거
    navigate("/login"); // 로그인 페이지로 리디렉션
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <React.Fragment>
      <CssBaseline />
      <Container
        display="flex"
        flexDirection="column"
        alignItems="center"
        Width="100%"
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              alignContent: "space-betweeen",
              margin: "20px 0",
              boxSizing: "border-box",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                bgcolor: "#ffffff",
                width: "100vw",
              }}
            >
              <Box
                component="img"
                sx={{
                  height: "51px",
                  marginLeft: "80px",
                }}
                src={reallogo}
              />
              <Box sx={{ marginLeft: "10px" }}>박정민님</Box>
            </Box>
            <Box
              sx={{
                width: "53px",
                height: "28px",
                bgcolor: "#D9D9D9",
                marginLeft: "10px",
                marginRight: "80px",
                border: "0px solid transparent",
                borderRadius: "15px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "16px",
              }}
            >
              수정
            </Box>
          </Box>
          <Box
            sx={{
              width: "344px",
              height: "274px",
              bgcolor: "#F3F3F3",
              border: "0px solid black",
              borderRadius: "15px",
            }}
          >
            <Box
              sx={{
                width: "344px",
                height: "274px",
                bgcolor: "#F3F3F3",
                border: "0px solid black",
                borderRadius: "15px",
              }}
            >
              <Container display="flex">
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      fontSize: "24px",
                      marginRight: "15px",
                      fontWeight: "500",
                    }}
                  >
                    우정의 우연
                  </Box>
                  <CustomizedSwitches
                    checked={friendshipToggle}
                    onChange={() => setFriendshipToggle(!friendshipToggle)}
                  />
                </Box>
                {friendshipToggle && (
                  <div>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        marginLeft: "15px",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          fontSize: "20px",
                          marginRight: "15px",
                          color: "#7e7e7e",
                        }}
                      >
                        연령
                        <Box sx={{ width: 200, marginLeft: "20px" }}>
                          <Slider
                            getAriaLabel={() => "Temperature range"}
                            value={value}
                            onChange={handleChange}
                            valueLabelDisplay="auto"
                            size="small"
                            // getAriaValueText={valuetext}
                          />
                        </Box>
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        marginLeft: "15px",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          fontSize: "20px",
                          marginRight: "15px",
                          marginBottom: "10px",
                          color: "#7e7e7e",
                        }}
                      >
                        성별
                        <Box
                          sx={{
                            width: 200,
                            marginLeft: "20px",
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                          }}
                        >
                          <Box
                            sx={{
                              width: "36px",
                              height: "25px",
                              bgcolor: "#FF8E5E",
                              border: "0px solid transparent",
                              borderRadius: "12px",
                              color: "white",
                              textAlign: "center",
                            }}
                          >
                            남
                          </Box>
                          <Box
                            sx={{
                              width: "36px",
                              height: "25px",
                              bgcolor: "#FF8E5E",
                              border: "0px solid transparent",
                              borderRadius: "12px",
                              color: "white",
                              textAlign: "center",
                            }}
                          >
                            여
                          </Box>
                          <Box
                            sx={{
                              width: "36px",
                              height: "25px",
                              bgcolor: "#FF8E5E",
                              border: "0px solid transparent",
                              borderRadius: "12px",
                              color: "white",
                              textAlign: "center",
                            }}
                          >
                            X
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  </div>
                )}

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      fontSize: "24px",
                      // marginTop: "15px",
                      marginRight: "15px",
                      fontWeight: "500",
                    }}
                  >
                    연애의 우연
                  </Box>
                  <CustomizedSwitches
                    checked={loveToggle}
                    onChange={() => setLoveToggle(!loveToggle)}
                  />
                </Box>
                {loveToggle && (
                  <div>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        marginLeft: "15px",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          fontSize: "20px",
                          marginRight: "15px",
                          color: "#7e7e7e",
                        }}
                      >
                        연령
                        <Box sx={{ width: 200, marginLeft: "20px" }}>
                          <Slider
                            getAriaLabel={() => "Temperature range"}
                            value={value}
                            onChange={handleChange}
                            valueLabelDisplay="auto"
                            size="small"
                            // getAriaValueText={valuetext}
                          />
                        </Box>
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        marginLeft: "15px",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          fontSize: "20px",
                          marginRight: "15px",
                          color: "#7e7e7e",
                        }}
                      >
                        성별
                        <Box
                          sx={{
                            width: 200,
                            marginLeft: "20px",
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                          }}
                        >
                          <Box
                            sx={{
                              width: "36px",
                              height: "25px",
                              bgcolor: "#FF8E5E",
                              border: "0px solid transparent",
                              borderRadius: "12px",
                              color: "white",
                              textAlign: "center",
                            }}
                          >
                            남
                          </Box>
                          <Box
                            sx={{
                              width: "36px",
                              height: "25px",
                              bgcolor: "#FF8E5E",
                              border: "0px solid transparent",
                              borderRadius: "12px",
                              color: "white",
                              textAlign: "center",
                            }}
                          >
                            여
                          </Box>
                          <Box
                            sx={{
                              width: "36px",
                              height: "25px",
                              bgcolor: "#FF8E5E",
                              border: "0px solid transparent",
                              borderRadius: "12px",
                              color: "white",
                              textAlign: "center",
                            }}
                          >
                            X
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  </div>
                )}
              </Container>
            </Box>
            <InfoContainer>
              <LabelContainers>
                <p>아이디</p>
                <Margin>알림</Margin>
                <p>나이</p>
                <p>성별</p>
              </LabelContainers>
              <LabelContainer>
                <p>{data.id}</p>
                <CustomizedSwitches></CustomizedSwitches>
                <p>{data.age}</p>
                <p>{data.gender}</p>
              </LabelContainer>
            </InfoContainer>
            <LogoutButton onClick={handleLogout}>로그아웃</LogoutButton>
          </Box>
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default MyPage;
