import React, { useEffect, useState } from 'react';
import { RunButton } from './RunButton';
var App = function () {
    var _a = useState([]), urls = _a[0], setUrls = _a[1];
    useEffect(function () {
        chrome.storage.local.get('visitedUrls', function (result) {
            if (result.visitedUrls) {
                setUrls(result.visitedUrls);
            }
        });
    }, []);
    return (React.createElement("div", { className: 'w-[600px] flex flex-col space-y-2 bg-slate-700' },
        React.createElement(RunButton, null),
        React.createElement("h1", { className: 'font-semibold text-neutral-200' }, "Visited URLs"),
        React.createElement("ul", { className: 'list-disc text-neutral-400 font-light leading-relaxed' }, urls.map(function (url, index) { return (React.createElement("li", { key: index }, url)); }))));
};
export default App;
