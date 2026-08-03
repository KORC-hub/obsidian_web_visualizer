import TabItem, { type TabItemModel } from "./TabItem";

interface TabBarProps {
  tabs: TabItemModel[];
  activeTabId: string | null;
  onSelectTab: (tabId: string) => void;
  onTogglePin: (tabId: string) => void;
  onCloseTab: (tabId: string) => void;
}

export default function TabBar({
  tabs,
  activeTabId,
  onSelectTab,
  onTogglePin,
  onCloseTab,
}: TabBarProps) {
  return (
    <div
      className="flex items-stretch gap-1 overflow-x-auto bg-(--tabbar-bg)"
      role="tablist"
      aria-label="Pestañas de notas"
    >
      {tabs.map((tab) => (
        <TabItem
          key={tab.id}
          tab={tab}
          isActive={tab.id === activeTabId}
          onSelectTab={onSelectTab}
          onTogglePin={onTogglePin}
          onCloseTab={onCloseTab}
        />
      ))}
    </div>
  );
}
