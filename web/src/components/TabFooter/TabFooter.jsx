
// eslint-disable-next-line react/prop-types
const TabFooter = ({ onTabChange }) => {
  return (
    <footer className="footer">
      <button onClick={() => onTabChange('tab1')} className="tab-button">히스토리</button>
      <button onClick={() => onTabChange('tab2')} className="tab-button">홈</button>
      <button onClick={() => onTabChange('tab3')} className="tab-button">마이페이지</button>
    </footer>
  );
};

export default TabFooter;
