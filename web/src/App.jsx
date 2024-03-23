import { SWRConfig } from "swr";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import instance from "@/utils/instance";

const SWRValue = {
  refreshInterval: 1000 * 60,
  fetcher: async (url) => (await instance.get(url)).data,
};

const App = () => {
  return (
    <SWRConfig value={SWRValue}>
      <BrowserRouter>
        <Routes>
          <Route path="/" />
        </Routes>
      </BrowserRouter>
    </SWRConfig>
  );
};

export default App;
