if (chrome.storage.local.get(['extensionState']) != true) {
    document.body.innerHTML = document.body.innerHTML.replace(/コメント/g, '🌾🌾🌾');
}