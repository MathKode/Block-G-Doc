if (confirm("Vous voulez vraiment ouvrir ce word ?")) {
  alert("You pressed OK!");
} else {
  alert("You pressed Cancel!");
  chrome.runtime.sendMessage({ action: "close_tab" });
  window.close();
}
