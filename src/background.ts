let visitedUrls: string[] = [];

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === "complete" && tab.url) {
    visitedUrls.push(tab.url);
    console.log(`Visited URL: ${tab.url}`);
  }
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "getUrls") {
    sendResponse({ urls: visitedUrls });
  }

  return true; // Keep the message channel open for sendResponse
});
