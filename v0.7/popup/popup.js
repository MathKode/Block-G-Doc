document.getElementById('disable-button').addEventListener('click', function() {
    // Enregistrer le temps actuel + 1 heure dans le stockage local
    const disableUntil = Date.now() + 3600000; // 1 heure en millisecondes
    chrome.storage.local.set({ 'disableUntil': disableUntil }, function() {
        //alert('L\'extension est desactivee pendant 1 heure.');
        timeleft();
    });
});

document.getElementById('reset-button').addEventListener('click', function() {
    chrome.storage.local.remove('disableUntil', function() {
        //alert('L\'extension a été réinitialisée.');
        timeleft();
    });
});

function timeleft() {
    chrome.storage.local.get('disableUntil', function(data) {
    const now = Date.now();
    
    if (data.disableUntil) {
        millisecond = data.disableUntil - now;
        if (millisecond < 0) {
            // Si le temps est écoulé, réinitialiser le minuteur
            document.getElementById('seconds').textContent = '00';
            document.getElementById('minutes').textContent = '00';
            document.getElementById('accept-icon').style.display = 'block';
            document.getElementById('stop-icon').style.display = 'none';
        } else {
            second = Math.floor((millisecond % (1000 * 60)) / 1000);
            minute = Math.floor((millisecond % (1000 * 60 * 60)) / (1000 * 60));
            if (second < 10) { second = '0' + second; }
            if (minute < 10) { minute = '0' + minute; }
            document.getElementById('seconds').textContent = second;
            document.getElementById('minutes').textContent = minute;
            document.getElementById('accept-icon').style.display = 'none';
            document.getElementById('stop-icon').style.display = 'block';
        }
    } else {
        document.getElementById('seconds').textContent = '00';
        document.getElementById('minutes').textContent = '00';
        document.getElementById('accept-icon').style.display = 'block';
        document.getElementById('stop-icon').style.display = 'none';
    }
    })
}
timeleft()

setInterval(timeleft, 1000)

// Ceci est un test pour vérifier que la fonction interval ne s'éxecute que quand la popup est ouverte (afin d'éviter une surchage en arrière plan)
/*

var x = setInterval(function() {
  chrome.runtime.sendMessage({ action: "log_background", message: 'code executé x1' })
}, 1000);

*/