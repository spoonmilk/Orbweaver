import React, { useEffect, useState } from 'react';
import { RunButton } from './RunButton';

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
    <div className='w-[600px] flex flex-col space-y-2 bg-slate-700'>
      <RunButton/>
      <h1 className='font-semibold text-neutral-200'>Visited URLs</h1>
      <ul className='list-disc text-neutral-400 font-light leading-relaxed'>
        {urls.map((url, index) => (
          <li key={index}>{url}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
