chrome.runtime.sendMessage({ action: "log_background", message: document.visibilityState })

// Verifie si la requête concerne une page active
// (en effet, il y a conflit avec les préloads de la bar de recherche)
chrome.storage.local.get('disableUntil', function(data) {
  const now = Date.now();
  if (data.disableUntil && now < data.disableUntil) {
    //alert('L\'extension est désactivée');
  } else {
      if (document.visibilityState === "visible") {
        if (!confirm("Voulez-vous vraiment ouvrir ce word dans G'doc ?")) {
          //alert("You pressed Cancel!");
          chrome.runtime.sendMessage({ action: "close_tab" })
          for (let i=0; i<10; i++) {
            alert("Veuillez Patienter, la page va se fermer automatiquement...")
          }
        }
      }
  }
});


// chrome.storage.local.get('disableUntil2', (data) => { console.log(data) })