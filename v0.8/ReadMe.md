# OUVRIR DANS WORD!!! v0.8
_19/08/2025_ 

Mathis KREMER (UE3) 

Cette extension Chrome permet de bloquer l’ouverture de documents Google Docs et de demander à l’utilisateur une confirmation explicite avant de les afficher.

L’idée est d’éviter d’ouvrir par erreur un document Google Docs qui pourrait « casser » la présentation des fichiers du tutorat (par exemple la trame des ronéos).

## Fonctionnement

L’extension déclare dans le manifest.json un content script (content-blocker.js) qui s’injecte automatiquement dans toutes les pages correspondant au motif :
```
https://docs.google.com/document/*
```

Ce script est exécuté au tout début du chargement de la page ("run_at": "document_start"), donc avant que le document Google Docs ne soit entièrement affiché.

Le script exécute un simple confirm(...) JavaScript :
-Si l’utilisateur clique sur “OK”, la page continue de se charger normalement.
-Si l’utilisateur clique sur “Annuler”, la page est fermée immédiatement via un message envoyé en arrière plan (service_worker)


## Amélioration possible

Déveloper sur safari et firefox ? Créer la possibilité de choisir entre la fermeture d'un onglet et le retour en arrière via un `history.back()`

## Changement vis-à-vis de la v0.7

Possibilité d'ajouter plusieurs heures de désactivation (+1h +1h etc...). De même il y a la correction d'un bug esthétique, le height de la popup est maintenant set sur 170px 
