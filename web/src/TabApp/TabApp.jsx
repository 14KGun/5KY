import { useState } from 'react';
import History from '../screens/History';
import Main from '../screens/Main/Main';
import MyPage from '../screens/MyPage/MyPage';
import useSWR from 'swr';

const TabApp = () => {
  const { data, error, isLoading } = useSWR("/user/byMe");
  const [activeTab, setActiveTab] = useState('tab2');

  console.log(data);
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
      {JSON.stringify(error)}
      {isLoading}
      <div className="tab-content">
        {renderTabContent()}
      </div>
    </div>
  );
};

export default TabApp;
