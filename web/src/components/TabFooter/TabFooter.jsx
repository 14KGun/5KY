import * as React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";

const TabFooter = () => {
  const [value, setValue] = useState(1);
  const navigate = useNavigate();

  const location = useLocation();
  const [isTabFooterVisible, setTabFooterVisible] = useState(true);

  // /login 또는 /signup 경로에서는 TabFooter를 숨김
  const isFooterVisible = () => {
    return !["/login", "/signup"].includes(location.pathname);
  };

  const handleChange = (event, newValue) => {
    console.log("newValue", newValue);
    setValue(newValue);
  };

  return (
    isFooterVisible() && (
      <Box sx={{ width: "100%", border: 1, borderColor: "divider" }}>
        <Tabs value={value} onChange={handleChange} centered>
          <Tab icon={<FavoriteIcon />} onClick={() => navigate("/history")} />
          <Tab icon={<HomeIcon />} onClick={() => navigate("/")} />
          <Tab icon={<PersonIcon />} onClick={() => navigate("/mypage")} />
        </Tabs>
      </Box>
    )
  );
};

export default TabFooter;
