import './test-1.js';

chrome.storage.local.get(["etat"], (result) => {
  if (result.etat) {
    console.log("Etat actuel : " + result.etat);
  } else {
    console.log("Aucun état trouvé !");
    chrome.storage.local.set({ etat: "on" })
  }
});

chrome.declarativeNetRequest.updateDynamicRules({
  removeRuleIds: [1],
  addRules: [
    {
      id: 1,
      priority: 1,
      condition: {
        regexFilter: "^https://docs\\.google\\.com/document/d/(.*)",
        resourceTypes: ["main_frame","sub_frame","xmlhttprequest"],
      },
      action: {
        type: "redirect",
        redirect: {
        regexSubstitution: `chrome-extension://${chrome.runtime.id}/blocking.html?\\1`,
        },
      },
    },
  ],
});

chrome.declarativeNetRequest.updateDynamicRules({
  removeRuleIds: [2],
  addRules: [
    {
      id: 2,
      priority: 2,
      condition: {
        urlFilter : chrome.runtime.id,
        resourceTypes: ["main_frame","sub_frame","xmlhttprequest"],
      },
      action: {
          type: "allow",
      }
    },
  ],
});

