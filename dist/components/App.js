import React, { useEffect, useState } from 'react';
var App = function () {
    var _a = useState([]), urls = _a[0], setUrls = _a[1];
    useEffect(function () {
        chrome.storage.local.get('visitedUrls', function (result) {
            if (result.visitedUrls) {
                setUrls(result.visitedUrls);
            }
        });
    }, []);
    return (React.createElement("div", null,
        React.createElement("h1", null, "Visited URLs"),
        React.createElement("ul", null, urls.map(function (url, index) { return (React.createElement("li", { key: index }, url)); }))));
};
export default App;
