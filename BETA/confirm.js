document.getElementById("btn-continue").addEventListener("click", () => {
  window.parent.postMessage("continue", "*");
});

document.getElementById("btn-cancel").addEventListener("click", () => {
  window.parent.postMessage("cancel", "*");
});
