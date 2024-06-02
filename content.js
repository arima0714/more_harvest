chrome.storage.local.get(['extensionState'], function(result) {
    if (result.extensionState) {
        document.body.innerHTML = document.body.innerHTML.replace(/コメント/g, '🌾🌾🌾');
    }
});