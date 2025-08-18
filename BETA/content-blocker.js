// Masquer la page tant qu'on n'a pas confirmé
document.documentElement.style.display = "none";
alert('ok')
// Créer l'iframe qui charge confirm.html
const iframe = document.createElement("iframe");
iframe.src = chrome.runtime.getURL("confirm.html");
alert('ok2')
iframe.style.position = "fixed";
iframe.style.top = "0";
iframe.style.left = "0";
iframe.style.width = "100vw";
iframe.style.height = "100vh";
iframe.style.border = "none";
iframe.style.zIndex = "999999";

document.addEventListener("DOMContentLoaded", () => {
  document.body.appendChild(iframe);
});

// Écouter les messages venant de confirm.html
window.addEventListener("message", (event) => {
  if (event.data === "continue") {
    iframe.remove();
    document.documentElement.style.display = "block";
  } else if (event.data === "cancel") {
    window.close();
  }
});
