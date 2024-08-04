export var getPageText = function (tab) {
    chrome.scripting.executeScript({
        target: { tabId: tab.id || -1 },
        func: function () {
            // Strips html of any javascript and grabs only plaintext
            var scripts = document.querySelectorAll("script, style");
            scripts.forEach(function (element) { element.remove(); });
            // Extract the actual text content of the page
            return document.body.innerText;
        }
    }, function (results) {
        if (results && results[0] && results[0].result) {
            // Handle the result of 'func'
            var bodyText = results[0].result;
            console.log(bodyText);
            // // Store 
            // chrome.storage.local.get( { visitedPages: [] }, (res) => {
            //     const pages = res.visitedPages;
            //     pages.push(bodyText);
            //     chrome.storage.local.set({ visitedPages : bodyText});
            // })
        }
    });
};
