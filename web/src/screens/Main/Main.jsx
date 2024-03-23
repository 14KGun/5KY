import React, { useEffect } from 'react';
// import Alarm from "../../components/Alarm";
import Profile from "../../components/Profile";
import { useNavigate } from 'react-router-dom';
import useSWR from 'swr';
import { useCookies } from 'react-cookie';

const Main = () => {
  let navigate = useNavigate();
  const [cookies] = useCookies(['userId']);
  const id = cookies.userId;

  const { data, error, isLoading } = useSWR(id ? `/user/byMe?userId=${id}` : null);

  useEffect(() => {
    // 여기에서 로그인 여부를 판단합니다.
    // 예를 들어, 'userId' 쿠키가 없다면 로그인 페이지로 리디렉션
    if (!cookies.userId) {
      navigate('/login'); // 사용자를 로그인 페이지로 리디렉션
    }
    // 로그인이 되어 있으면, 추가적인 로직을 실행
  }, [cookies.userId, navigate]);

  // 데이터 로딩 중이거나 에러가 발생한 경우의 처리
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;

  // `data` 객체가 존재하고 `data.name` 속성이 있는지 확인
  const userName = data && data.name ? data.name : 'Default Name';
  const userTags = data && data.tags ? data.tags : [];

  console.log(data);
  return (
    <div>

      {/* <button onClick={goToFindSetting}>Find Setting으로 가기</button> */}
      {/* <Alarm></Alarm> */}
      <Profile name={userName} tags={userTags}></Profile>
    </div>
  );
};

export default Main;
