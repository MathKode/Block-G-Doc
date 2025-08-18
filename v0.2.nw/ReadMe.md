# OUVRIR DANS WORD!!! v0.2.nw (not work)
_18/08/2025_ 

Mathis KREMER (UE3) 


Version très basique qui bloque l'ouverture des onglet google doc lorsque l'extension est active. 
Avantage :
- Facile à utiliser
- Facile à coder

Désavantage :
- Pas ergonomique (l'utilisateur peut ne pas comprendre la manip activer/désactiver l'extension)
- Etre obligé de désactiver et de réactiver manuellement l'extension


```
[
    {
        "id": 1,
        "priority": 1,
        "action": {
            "type": "block"
        },

        "condition": {
            "urlFilter": "||docs.google.com", 
            "resourceTypes": ["main_frame"] 
        }

    }
]


[
    {
        "id": 1,
        "priority": 1,
        "action": {
            "type": "redirect",
            "redirect": {
                "extensionPath": "/confirm.html?target=docs.google.com"
            }
        },

        "condition": {
            "urlFilter": "||docs.google.com", 
            "resourceTypes": ["main_frame"] 
        }

    }
]
```