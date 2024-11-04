> Open this page at [https://eliotttak.github.io/pxt-calibration/](https://eliotttak.github.io/pxt-calibration/)

> Vous cherchez la page en français ? Cliquez ici : [https://github.com/eliotttak/pxt-calibration/blob/master/LISEZMOI.md](https://github.com/eliotttak/pxt-calibration/blob/master/LISEZMOI.md)

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
* Search **https://github.com/eliotttak/pxt-calibration** and import

## Edit this project ![Compilation status badge](https://github.com/eliotttak/pxt-calibration/workflows/MakeCode/badge.svg)

Edit this repository in Makecode.

* Open [https://makecode.microbit.org/](https://makecode.microbit.org/)
* Click on **Importer** then click on **Import the URL **
* Paste **https://github.com/eliotttak/pxt-calibration** and click on import

## Block overview

This section shows the block code of the last commit in the master branch.
This image may take a few minutes to update.
![A rendering of the block view](https://github.com/eliotttak/pxt-calibration/raw/master/.github/makecode/blocks.png)

#### Metadata (used for the search, the rendering)

* for PXT/microbit
<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>
