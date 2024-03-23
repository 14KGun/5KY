import React from 'react';
import './HistoryCard.css'; // CSS 파일 임포트

const HistoryCard = ({ id, nickname, metCount, isHeartFilled, onHeartClick }) => {
    return (
      <div className="history-card">
        <div className="heart-icon" onClick={() => onHeartClick(id)}>
          {isHeartFilled ? '❤️' : '🤍'} {/* 부모로부터 받은 상태에 따라 하트 표시 */}
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
