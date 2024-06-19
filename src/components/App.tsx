import React from "react";
import { useState, useEffect } from "react";

const App: React.FC = () => {
  const [currentUrl, setCurrentUrl] = useState<string>("");

  useEffect(() => {
    const fetchCurrentUrl = async () => {
      const [activeTab] = await chrome.tabs.query({
        active: true,
        lastFocusedWindow: true,
      });

      if (activeTab.url) {
        setCurrentUrl(activeTab.url);
      }
    };

    fetchCurrentUrl();
  }, []);

  return (
    <div className="w-xl h-48 border border-slate-700 rounded-lg">
      <span className="font-normal text-slate-950">{currentUrl}</span>
    </div>
  );
};

export default App;
