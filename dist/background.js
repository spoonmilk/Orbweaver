import { getPageText } from "./site-content.js";
// Logic for saving URLs in background
chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    if (changeInfo.status === 'complete' && tab.url) {
        console.log('Tab URL:', tab.url);
        // Here you can store the URL in storage or do other processing
        storeUrl(tab.url);
    }
});
chrome.tabs.onActivated.addListener(function (activeInfo) {
    chrome.tabs.get(activeInfo.tabId, function (tab) {
        if (tab.url) {
            console.log('Active Tab URL:', tab.url);
            // Here you can store the URL in storage or do other processing
            storeUrl(tab.url);
            console.log("Getting page text");
            getPageText(tab);
        }
    });
});
function storeUrl(url) {
    chrome.storage.local.get({ visitedUrls: [] }, function (result) {
        var urls = result.visitedUrls;
        urls.push(url);
        chrome.storage.local.set({ visitedUrls: urls });
    });
}
