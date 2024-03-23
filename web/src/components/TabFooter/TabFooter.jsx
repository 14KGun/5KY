import React from 'react';
import './TabFooter.css'; // Footer 컴포넌트에 대한 CSS 스타일링

const TabFooter = ({ onTabChange }) => {
  return (
    <footer className="footer">
      <button onClick={() => onTabChange('tab1')} className="tab-button">Tab 1</button>
      <button onClick={() => onTabChange('tab2')} className="tab-button">Tab 2</button>
      <button onClick={() => onTabChange('tab3')} className="tab-button">Tab 3</button>
    </footer>
  );
};

export default TabFooter;
