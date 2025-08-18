import './test-1.js';

chrome.storage.local.get(["etat"], (result) => {
  if (result.etat) {
    console.log("Etat actuel : " + result.etat);
  } else {
    console.log("Aucun état trouvé !");
    chrome.storage.local.set({ etat: "on" })
  }
});




/*
chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    function is_it_on() {
        return new Promise((resolve) => {
            chrome.storage.local.get(["etat"], (result) => {
                if (result.etat === "on" || result.etat === "off") {
                    console.log("Etat actuel : " + result.etat);
                    resolve(result.etat === "on");
                } else {
                    console.log("Aucun état trouvé !");
                    chrome.storage.local.set({ etat: "on" }, () => resolve(true));
                }
            });
        });
    }

    // Utilisation avec async/await :
    async function checkEtat() {
        const etatOn = await is_it_on();
        if (etatOn) {
            console.log("L'extension est activée");
            return { redirectUrl: "okokokko" };
        } else {
            console.log("L'extension est désactivée");
        }
    }
    console.log(details);
    checkEtat()
    

  },
  {urls: ["https://docs.google.com/document/d/*"],
    types: ["main_frame"]
  }

);
*/


/*

chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    console.log(details);
  },
  {urls: ["https://docs.google.com/document/*"]}
);

chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    console.log(details);
  },
  {urls: ["<all_urls>"]}
);


// Sauvegarder
chrome.storage.local.set({ etat: "on" }, () => {
  console.log("Etat enregistré : on");
});

chrome.storage.local.set({ etat: "off" }, () => {
  console.log("Etat enregistré : off");
});

// Lire
chrome.storage.local.get(["etat"], (result) => {
  if (result.etat) {
    console.log("Etat actuel : " + result.etat);
  } else {
    console.log("Aucun état trouvé !");
  }
});
*/
