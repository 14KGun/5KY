import { useState } from 'react';
import styled from 'styled-components';

import TabFooter from '../components/TabFooter/TabFooter';
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
      {data}
      {JSON.stringify(error)}
      {isLoading}
      <div className="tab-content">
        {renderTabContent()}
      </div>
      <TabFooter onTabChange={handleTabClick} />
    </div>
  );
};

export default TabApp;
