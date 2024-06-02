// チェックボックスの状態が変更されたときに、その状態を保存します。
document.getElementById('toggleExtension').addEventListener('change', (event) => {
    chrome.storage.local.set({extensionState: event.target.checked});
});

document.getElementById('toggleExtension').addEventListener('change', function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.reload(tabs[0].id);
    });
});

// ポップアップが読み込まれたときに、保存されている状態を読み込みます。
chrome.storage.local.get(['extensionState'], (result) => {
    document.getElementById('toggleExtension').checked = result.extensionState;
});
