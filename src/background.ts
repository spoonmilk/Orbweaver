import { getPageText } from "./site-content.js";

// Logic for saving URLs in background
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete' && tab.url) {
    console.log('Tab URL:', tab.url);
    // Here you can store the URL in storage or do other processing
    storeUrl(tab.url);
    
  }
});

chrome.tabs.onActivated.addListener((activeInfo) => {
  chrome.tabs.get(activeInfo.tabId, (tab) => {
    if (tab.url) {
      console.log('Active Tab URL:', tab.url);
      // Here you can store the URL in storage or do other processing
      storeUrl(tab.url);
      console.log("Getting page text");
      getPageText(tab);
    }
  });
});

function storeUrl(url: string) {
  chrome.storage.local.get({ visitedUrls: [] }, (result) => {
    const urls = result.visitedUrls;
    urls.push(url);
    chrome.storage.local.set({ visitedUrls: urls });
  });
}

