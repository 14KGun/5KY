import { SWRConfig } from "swr";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import instance from "@/utils/instance";
import TabApp from "./TabApp/TabApp";
import MyPage from "./screens/MyPage/MyPage";
import Main from "./screens/Main/Main";
import Login from "./screens/Login/Login";
import SignUp from "./screens/SignUp/SignUp";
import FindSetting from "./screens/FindSetting";
import TagSetting from "./screens/TagSetting/TagSetting";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import TabFooter from "./components/TabFooter/TabFooter";
import History from "./screens/History";

const theme = createTheme({
  palette: {
    background: {
      default: "#ffffff",
    },
    primary: {
      main: "#F36427",
    },
    secondary: {
      main: "#FF8E5E",
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
            <Route path="/" element={<Main />} />
            <Route path="/mypage" element={<MyPage />} />
            <Route path="/history" element={<History />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/findsetting" element={<FindSetting />} />
            <Route path="/tagsetting" element={<TagSetting />} />
          </Routes>
          <div
            style={{
              position: "fixed",
              bottom: 0,
              left: 0,
              width: "100%",
              zIndex: 1000,
            }}
          >
            <TabFooter />
          </div>
        </BrowserRouter>
      </ThemeProvider>
    </SWRConfig>
  );
};

export default App;
