if (chrome.storage.local.get(['extensionState']) != true) {
    document.body.innerHTML = document.body.innerHTML.replace(/コメント/g, '🌾🌾🌾');
    document.body.innerHTML = document.body.innerHTML.replace(/JavaScript/g, '🌾🌾🌾');
    document.body.innerHTML = document.body.innerHTML.replace(/ECMAScript/g, '🌾🌾🌾');
}