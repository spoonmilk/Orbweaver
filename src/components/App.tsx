import React, { useState, useEffect } from "react";

const App: React.FC = () => {
  const [currentUrl, setCurrentUrl] = useState<string>("");
  const [urlList, setUrlList] = useState<string[]>([]);

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

    chrome.runtime.sendMessage({ action: "getUrls" }, (response) => {
      if (chrome.runtime.lastError) {
        console.error("Error sending message:", chrome.runtime.lastError);
      } else {
        setUrlList(response.urls);
      }
    });
  }, []);

  return (
    <div className="flex flex-col items-center w-[500px] p-6 border border-slate-700 rounded-xl">
      <h1 className="text-lg font-bold mb-4">Current URL</h1>
      <div className="mb-4">{currentUrl}</div>
      <h2 className="text-md font-semibold mb-2">Visited URLs</h2>
      <div className="flex flex-col items-start">
        {urlList.map((url, index) => (
          <div key={index} className="mb-1">
            {url}
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
