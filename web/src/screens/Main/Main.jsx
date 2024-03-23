import React from "react";
// import { useNavigate } from "react-router-dom";
// import Alarm from "../../components/Alarm";
import Profile from "../../components/Profile";
import useSWR from "swr";
// import { useCookies } from 'react-cookie';

const Main = () => {
  // let navigate = useNavigate();
  const [cookies] = useCookies(["userId"]);
  const id = cookies.userId;

  const { data, error, isLoading } = useSWR(
    id ? `/user/byMe?userId=${id}` : null
  );

  // 데이터 로딩 중이거나 에러가 발생한 경우의 처리
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;

  // `data` 객체가 존재하고 `data.name` 속성이 있는지 확인
  const userName = data && data.name ? data.name : "Default Name";

  console.log(data);
  return (
    <div>
      {/* <button onClick={goToFindSetting}>Find Setting으로 가기</button> */}
      {/* <Alarm></Alarm> */}
      <Profile name={userName}></Profile>
    </div>
  );
};

export default Main;
