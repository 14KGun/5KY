import { useState } from 'react';
import TabFooter from '../components/TabFooter/TabFooter';
import History from '../screens/History/History';
import Main from '../screens/Main/Main';
import MyPage from '../screens/MyPage/MyPage';

const TabApp = () => {
  const [activeTab, setActiveTab] = useState('tab2');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'tab1':
        return <History />;
      case 'tab2':
        return <Main />;
      case 'tab3':
        return <MyPage />;
      default:
        return <div>Unknown Tab</div>;
    }
  };

  return (
    <div>
      <div className="tab-content">
        {renderTabContent()}
      </div>
      <TabFooter onTabChange={handleTabClick} />
    </div>
  );
};

export default TabApp;
