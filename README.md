> Ouvrir cette page à [https://eliotttak.github.io/pxt-calibration/](https://eliotttak.github.io/pxt-calibration/)

> Vous cherchez la page en français ? Cliquez ici : [https://eliotttak.github.io/pxt-calibration/](https://eliotttak.github.io/pxt-calibration/)

## About this repository

This repository is a [Microsoft Makecode for Micro:bit](https://makecode.microbit.org/) extension used to manage the calibration of the analogues devices (triggers, joysticks, etc.) by measuring the outgoing current from the device for the neutral position (center) and the extremes (top, bottom, left, right)

## About the new blocks

### Calibrate one [P1 ▼]
Used to calibrate a component connected to a single pin (i.e. a single axis, such as a trigger).

### Calibrate two [P1 ▼] [P2 ▼]
Used to calibrate a component connected to two pins (i.e. two axes, like a joystick).

### Read [P1 ▼]
Reads the current axis position, taking calibration into account (neutral position = 0; low position = -100; high position = 100).

## Utiliser comme extension

This repository can be added as an **extension** to MakeCode.

* Open [https://makecode.microbit.org/](https://makecode.microbit.org/)
* Click on **New project**
* Click on **Extensions** in the gear menu
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
<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>
