import { useState } from "react";

export type TabType = "home" | "play" | "rules" | "results";

interface UseTabsReturn {
  currentTab: TabType;
  resultId: string | undefined;
  handleTabChange: (tab: TabType, id?: string) => void;
}

export function useTabs(): UseTabsReturn {
  const [currentTab, setCurrentTab] = useState<TabType>("home");
  const [resultId, setResultId] = useState<string | undefined>();

  const handleTabChange = (tab: TabType, id?: string) => {
    setCurrentTab(tab);
    if (id) setResultId(id);
  };

  return {
    currentTab,
    resultId,
    handleTabChange,
  };
}
