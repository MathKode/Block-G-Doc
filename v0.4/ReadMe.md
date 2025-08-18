# OUVRIR DANS WORD!!! v0.2.nw (not work)
_18/08/2025_ 

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
-Si l’utilisateur clique sur “Annuler”, la page est fermée immédiatement via window.close()


## Amélioration possible

Le script est fonctionnel, robuste sur tout les navigateurs mais peut-être qu'on pourrait le rendre plus ergonomique avec une petite popup ? Et aussi créer la possibilité de la désactiver en cliquant sur l'icon ?