"use strict";
var visitedUrls = [];
chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    if (changeInfo.status === "complete" && tab.url) {
        visitedUrls.push(tab.url);
        console.log("Visited URL: ".concat(tab.url));
    }
});
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action === "getUrls") {
        sendResponse({ urls: visitedUrls });
    }
    return true; // Keep the message channel open for sendResponse
});
