import { useState } from 'react';
import History from '../screens/History';
import Main from '../screens/Main/Main';
import MyPage from '../screens/MyPage/MyPage';
import useSWR from 'swr';
import instance from '../utils/instance';
import { useCookies } from 'react-cookie';

const TabApp = () => {
  const [cookies] = useCookies(['userId']);
  console.log(cookies);
  const id = cookies.userId;
  console.log(id);
  const { data, error, isLoading } = useSWR(id ? `/user/byMe?userId=${id}` : null);
  const [activeTab, setActiveTab] = useState('tab2');
  
  console.log(JSON.stringify(data));
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
      {JSON.stringify(data)}
      {JSON.stringify(error)}
      {isLoading ? 'Loading...' : ''};
      <div className="tab-content">
        {renderTabContent()}
      </div>
    </div>
  );
};

export default TabApp;
