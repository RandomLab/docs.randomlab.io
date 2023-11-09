# à faire

- [x] Nettoyage des dossiers :tada:
- [x] Ajout collection 'type projet'
- [x] Faire un index des projets
- [ ] Ajout date
- [ ] Ajout tags
- [x] Paramétrage connection ssh github
- [ ] Créer des dossiers manquants
- [ ] Compléter les dossiers existants
- [x] Ajouter des images
- [x] Ajouter header metadonnées dans les .md
- [ ] Script pour vérfier que les images sont au bon format
- [x] Ajouter assets css
- [ ] Pouvoir ajouter des vidéos
- [x] Ajouter publish true/false
- [ ] Caption images


# Format des métadonnées du fichier .MD

```
layout : page
type: projet
title: "mon titre"
author: "prénom nom"
publish: true
```

# Comment documenter ?

Le projet est basé sur le générateur de site statique [Eleventy](https://www.11ty.dev/)

structure du projet:

```
root/ 
      |
      -- eleventy.js
      -- \_includes
      -- assets
      -- src/ 
              |
              -- <prenom-nom>/
                              |
                              -- <annee>/
                                          |
                                          -- <titre>/
                                                     |
                                                      -- index.md
                                                      -- <image.jpg>
                
```

### Nom des dossiers et fichiers

pas de caractères spéciaux, espace, accents, etc

## Cloner le dépôt

Le dépôt est ici : https://github.com/RandomLab/docs.randomlab.io
pour le cloner en ssh :

```
git clone git@github.com:RandomLab/docs.randomlab.io.git
```

## Si le dépôt est déjà cloner

```
git pull
```

On renseigne son travail dans un dossier 




