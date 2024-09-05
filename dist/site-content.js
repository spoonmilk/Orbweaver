export var getPageText = function (tab) {
    chrome.scripting.executeScript({
        target: { tabId: tab.id || -1 },
        func: function () {
            // Strips html of any javascript and grabs only plaintext
            // const scripts = document.querySelectorAll("script, style");
            // scripts.forEach((element) => {element.remove()})
            // Extract the actual text content of the page
            console.log("Returning document HTML:");
            return document.documentElement.outerHTML;
        }
    }, function (results) {
        if (results && results[0] && results[0].result) {
            // Handle the result of 'func'
            var html = results[0].result;
            console.log("Logging html:");
            console.log(html);
            // // Store 
            // chrome.storage.local.get( { visitedPages: [] }, (res) => {
            //     const pages = res.visitedPages;
            //     pages.push(bodyText);
            //     chrome.storage.local.set({ visitedPages : bodyText});
            // })
        }
    });
};
export function logTest() {
    console.log("Test Success\n");
}
