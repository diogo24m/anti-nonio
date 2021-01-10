waitForElementToDisplay("div.fc-ab-root", function () {
    document.querySelectorAll('div.fc-ab-root')[0].remove();
    document.body.style = 'overflow:scroll !important;';
}, 1000, 9000);

waitForElementToDisplay("#imp-content-gate-root", function () {
    document.getElementById('imp-content-gate-root').remove();
    document.body.style = 'overflow:scroll !important;';
}, 1000, 9000);

function waitForElementToDisplay(selector, callback, checkFrequencyInMs, timeoutInMs) {
    var startTimeInMs = Date.now();
    (function loopSearch() {
        if (document.querySelector(selector) != null) {
            callback();
            return;
        }
        else {
            setTimeout(function () {
                if (timeoutInMs && Date.now() - startTimeInMs > timeoutInMs)
                    return;
                loopSearch();
            }, checkFrequencyInMs);
        }
    })();
}