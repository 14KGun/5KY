import React, { useState } from 'react';
import HistoryCard from '../../components/HistoryCard/HistoryCard';

// 각 항목에 고유한 id 속성을 추가합니다.
const initialHistoryData = [
  { id: 1, nickname: "제이", metCount: 51, isHeartFilled: true },
  { id: 2, nickname: "프로스트", metCount: 3, isHeartFilled: false },
  { id: 3, nickname: "라이트", metCount: 1, isHeartFilled: false },
  { id: 4, nickname: "얼그레이", metCount: 23, isHeartFilled: true },
  { id: 5, nickname: "수니", metCount: 10, isHeartFilled: false },
  { id: 6, nickname: "블루디", metCount: 7, isHeartFilled: true },
];

const History = () => {
  const [historyData, setHistoryData] = useState(initialHistoryData);

  // 북마크된 항목만 필터링합니다.
  const bookmarks = historyData.filter((item) => item.isHeartFilled);
  
  // toggleHeart 함수는 id를 받아 해당하는 항목의 isHeartFilled 상태를 토글합니다.
  const toggleHeart = (id) => {
    const updatedHistory = historyData.map((item) =>
      item.id === id ? { ...item, isHeartFilled: !item.isHeartFilled } : item
    );
    setHistoryData(updatedHistory);
  };

  return (
    <div className="container">
      <div className="app-container">
        {/* 북마크 섹션에도 onHeartClick prop을 전달합니다. */}
        {bookmarks.map((data) => (
          <HistoryCard key={data.id} {...data} onHeartClick={toggleHeart} />
        ))}

        {/* '오늘의 우연' 섹션 */}
        <div className="section-title">오늘의 우연</div>
        {bookmarks.map((data) => (
          <HistoryCard key={data.id} {...data} onHeartClick={toggleHeart} />
        ))}

        {/* '그 모든 우연' 섹션 */}
        <div className="section-title">그 모든 우연</div>
        {historyData.map((data) => (
          <HistoryCard key={data.id} {...data} onHeartClick={toggleHeart} />
        ))}
      </div>
    </div>
  );
};

export default History;
