import { useState } from 'react';
import './HistoryCard.css'; // CSS 파일 임포트

// eslint-disable-next-line react/prop-types
const HistoryCard = ({ nickname, metCount, isHeartFilled }) => {
  const [heartFilled, setHeartFilled] = useState(isHeartFilled);

  // 하트 아이콘 클릭 핸들러
  const handleHeartClick = () => {
    setHeartFilled(!heartFilled);
  };

  return (
    <div className="history-card">
      <div className="heart-icon" onClick={handleHeartClick}>
        {heartFilled ? '❤️' : '🤍'} {/* 하트 채움 여부에 따라 아이콘 변경 */}
      </div>
      <div className="nickname">{nickname}</div>
      <div className="met-count">
        +{metCount}
        <span className="mail-icon">📧</span>
      </div>
    </div>
  );
};

export default HistoryCard;
