import { SWRConfig } from "swr";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import instance from "@/utils/instance";
import TabApp from "./TabApp/TabApp";
import Login from "./screens/Login/Login"
import SignUp from "./screens/SignUp/SignUp"

const SWRValue = {
  refreshInterval: 1000 * 60,
  fetcher: async (url) => (await instance.get(url)).data,
};

const App = () => {
  return (
    <SWRConfig value={SWRValue}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TabApp/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<SignUp/>}/>
        </Routes>
      </BrowserRouter>
    </SWRConfig>
  );
};

export default App;
