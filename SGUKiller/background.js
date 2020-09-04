firstTime = true;

chrome.windows.getAll({}, function(windows) {
    chrome.windows.onCreated.addListener(function() {
        firstTime = true;
    });
});

chrome.webNavigation.onBeforeNavigate.addListener((details) => {
	if(firstTime && details.url === "https://www.sgu.ru/") {
		firstTime = false;
        chrome.tabs.update(details.tabId, {
            url: "chrome://newtab"
        });
    }
});
