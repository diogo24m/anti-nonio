chrome.webNavigation.onCommitted.addListener(updateIcon);
chrome.webNavigation.onHistoryStateUpdated.addListener(updateIcon);
chrome.webNavigation.onBeforeNavigate.addListener(updateIcon);

function updateIcon(details) {
    if (details.frameId != 0) {
        return; // only update the icon for main page, not iframe/frame
    }
    chrome.browserAction.setIcon({
        path: {
            16: "icon16d.png",
            48: "icon48d.png",
            128: "icon128d.png"
        },
        tabId: details.tabId
    });
}