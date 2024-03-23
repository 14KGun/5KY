import { useState } from 'react';
import TabFooter from '../components/TabFooter/TabFooter';

const Tab1 = () => <div>Tab 1 Content</div>;
const Tab2 = () => <div>Tab 2 Content</div>;
const Tab3 = () => <div>Tab 3 Content</div>;

const TabApp = () => {
  const [activeTab, setActiveTab] = useState('tab1');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'tab1':
        return <Tab1 />;
      case 'tab2':
        return <Tab2 />;
      case 'tab3':
        return <Tab3 />;
      default:
        return <div>Unknown Tab</div>;
    }
  };

  return (
    <div>
      <ul className="tab-list">
        <li className={activeTab === 'tab1' ? 'active' : ''} onClick={() => handleTabClick('tab1')}>Tab 1</li>
        <li className={activeTab === 'tab2' ? 'active' : ''} onClick={() => handleTabClick('tab2')}>Tab 2</li>
        <li className={activeTab === 'tab3' ? 'active' : ''} onClick={() => handleTabClick('tab3')}>Tab 3</li>
      </ul>
      <div className="tab-content">
        {renderTabContent()}
      </div>
      <TabFooter onTabChange={handleTabClick} />
    </div>
  );
};

export default TabApp;
