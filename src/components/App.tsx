import React, { useEffect, useState } from 'react';

const App: React.FC = () => {
  const [urls, setUrls] = useState<string[]>([]);

  useEffect(() => {
    chrome.storage.local.get('visitedUrls', (result) => {
      if (result.visitedUrls) {
        setUrls(result.visitedUrls);
      }
    });
  }, []);

  return (
    <div>
      <h1>Visited URLs</h1>
      <ul>
        {urls.map((url, index) => (
          <li key={index}>{url}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
