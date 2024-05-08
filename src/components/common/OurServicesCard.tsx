import React, { createContext, useState, useContext } from "react";

interface TabContextType {
  activeTab: number;
  setTab: (tab: number) => void;
}

const TabContext = createContext<TabContextType | undefined>(undefined);

function CardTab({ children }: { children: React.ReactNode }) {
  const [activeTab, setActiveTab] = useState<number>(1);

  const setTab = (tab: number) => {
    setActiveTab(tab);
  };

  return (
    <TabContext.Provider value={{ activeTab, setTab }}>
      <div className="">{children}</div>
    </TabContext.Provider>
  );
}

function TabSwitcher({
  children,
  tabId,
  activeClass = "border-b-2 border-gray-600",
}: {
  children: React.ReactNode;
  tabId: number;
  activeClass?: string;
}) {
  const { activeTab, setTab } = useContext(TabContext)!;

  const onClick = () => setTab(tabId);

  const className = ["mr-2"];
  if (activeTab === tabId) className.push(activeClass);
  return (
    <button className={className.join(" ")} onClick={onClick}>
      {children}
    </button>
  );
}

function TabContent({
  children,
  id,
}: {
  children: React.ReactNode;
  id: number;
}) {
  const { activeTab } = useContext(TabContext)!;
  return id === activeTab ? children : null;
}

export { CardTab, TabSwitcher, TabContent };
