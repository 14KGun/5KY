import { SWRConfig } from "swr";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import instance from "@/utils/instance";
import TabApp from "./TabApp/TabApp";
import Login from "./screens/Login/Login";
import SignUp from "./screens/SignUp/SignUp";
import FindSetting from "./screens/FindSetting";
import TagSetting from "./screens/TagSetting/TagSetting";

import { red } from "@mui/material/colors";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    background: {
      default: "#ffffff", // Set your desired background color here
    },
    primary: {
      main: red[500],
    },
  },
});

const SWRValue = {
  refreshInterval: 1000 * 60,
  fetcher: async (url) => (await instance.get(url)).data,
};

const App = () => {
  return (
    <SWRConfig value={SWRValue}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<TabApp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/findsetting" element={<FindSetting />} />
            <Route path="/tagsetting" element={<TagSetting />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </SWRConfig>
  );
};

export default App;
