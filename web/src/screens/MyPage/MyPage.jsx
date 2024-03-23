import * as React from "react";
import { Button } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import CustomButton from "../../components/PrimaryButton";

import { Box, Container, Slider } from "@mui/material";
import TextField from "@mui/material/TextField";

import { useNavigate } from "react-router-dom";

import CustomizedSwitches from "../../components/Btn";
import reallogo from "../../assets/real_logo.svg";
import styled from "styled-components";

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

const MyPage = () => {
  const [value, setValue] = React.useState([20, 37]);

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
                  <CustomizedSwitches></CustomizedSwitches>
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
                    sx={{ marginTop: "30px" }}
                  ></CustomizedSwitches>
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
              </Container>
            </Box>
            <InfoContainer>
              <LabelContainers>
                <p>아이디</p>
                <p>비밀번호</p>
                <Margin>알림</Margin>
                <p>나이</p>
                <p>성별</p>
              </LabelContainers>
              <LabelContainer>
                <p>jheon1223</p>
                <p>*******</p>
                <CustomizedSwitches></CustomizedSwitches>
                <p>23</p>
                <p>여성</p>
              </LabelContainer>
            </InfoContainer>
          </Box>
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default MyPage;
