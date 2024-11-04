> You search the English page ? Click here : [https://eliotttak.github.io/pxt-calibration/](https://eliotttak.github.io/pxt-calibration/)

## À propos de ce dépos

Ce dépos est une extension pour [Microsoft Makecode for Micro:bit](https://makecode.microbit.org/) servant à gérer l'étallonage des dispositifs analogiques (gachettes, josticks, etc.) en mesurant le courant sortant du dispositif pour la position neutre (centre) et les extrêmes (haut, bas, gauche, droite)

## À propos des nouveaux blocs

### Calibrate one [P1 ▼]
Permet de calibrer un composant connecté sur une seule broche (donc une seule axe, comme une gâchette)

### Calibrate two [P1 ▼] [P2 ▼]
Permet de calibrer un composant connecté sur deux broches (donc deux axes, comme un joystick)

### Read [P1 ▼]
Permet de lire la position actuelle de l'axe en prenant en compte la calibration (position neutre = 0 ; position basse = -100 ; position haute = 100)

## Utiliser comme extension

Ce dépôt peut être ajouté en tant qu'**extension** dans MakeCode.

* ouvrir [https://makecode.microbit.org/](https://makecode.microbit.org/)
* cliquez sur **Nouveau projet**
* cliquez sur **Extensions** dans le menu engrenage
* recherchez **https://github.com/eliotttak/pxt-calibration** et importez

## Éditer ce projet ![Badge du statut de la compilation](https://github.com/eliotttak/pxt-calibration/workflows/MakeCode/badge.svg)

Éditer ce dépôt dans MakeCode.

* ouvrir [https://makecode.microbit.org/](https://makecode.microbit.org/)
* cliquez sur **Importer** puis cliquez sur **Importer l'URL **
* collez **https://github.com/eliotttak/pxt-calibration** et cliquez sur importer

## Aperçu des blocs

Cette section montre le code des blocs du dernier commit dans la branche master.
Cette image peut prendre quelques minutes pour être actualisée.

![Un rendu de la vue des blocs](https://github.com/eliotttak/pxt-calibration/raw/master/.github/makecode/blocks.png)

#### Métadonnées (utilisées pour la recherche, le rendu)

* for PXT/microbit
<html><script src="https://makecode.com/gh-pages-embed.js" type="text/javascript"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>
