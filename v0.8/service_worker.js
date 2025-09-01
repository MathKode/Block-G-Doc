console.log('HIIIII')

chrome.runtime.onMessage.addListener((msg, sender) => {
  if (msg.action === "close_tab" && sender.tab) {
    chrome.tabs.remove(sender.tab.id)
    console.log('Tab closed');
  }

  if (msg.action === "log_background") {
    console.log(msg.message)
  }
});
