import React from "react";
// import { useNavigate } from "react-router-dom";
// import Alarm from "../../components/Alarm";
import Profile from "../../components/Profile";
import useSWR from 'swr';
import { useCookies } from 'react-cookie';

const Main = () => {
  // let navigate = useNavigate();

  const [cookies] = useCookies(['userId']);
  const id = cookies.userId;

  const { data, error, isLoading } = useSWR(
    id ? `/user/byMe?userId=${id}` : null
  );
  console.log(data);
  return (
    <div>
      {/* <button onClick={goToFindSetting}>Find Setting으로 가기</button> */}
      {/* <Alarm></Alarm> */}
      <Profile></Profile>
    </div>
  );
};

export default Main;
