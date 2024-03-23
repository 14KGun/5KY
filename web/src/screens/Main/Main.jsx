import React from "react";
import { useNavigate } from "react-router-dom";
import Alarm from "../../components/Alarm";

const Main = () => {
  let navigate = useNavigate();

  const goToFindSetting = () => {
    navigate("/findsetting");
  };

  return (
    <div>
      <h1>메인페이지</h1>
      <button onClick={goToFindSetting}>Find Setting으로 가기</button>
      <Alarm></Alarm>
    </div>
  );
};

export default Main;
