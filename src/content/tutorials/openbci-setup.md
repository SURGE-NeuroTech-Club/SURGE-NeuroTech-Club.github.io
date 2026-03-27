---
title: "Getting Started with OpenBCI"
description: "Steps for setting up your OpenBCI board and streaming EEG signals using the OpenBCI GUI."
order: 5
draft: true
---

> **This page is not yet complete.** Check back later!

This tutorial will take you through the steps of getting your OpenBCI board up and streaming EEG signals.

## Installing The Software

First, download the latest version of the [OpenBCI GUI](https://openbci.com/downloads). Make sure to download the correct version for your machine (Windows, Mac, or Linux).

Once downloaded, unzip it and move the folder somewhere you'll remember. The GUI doesn't "install" — you open the folder directly to start the program.

Once you open `OpenBCI_GUI`, you should see the main interface. If you see a red bar at the bottom reading "This Application is Not being run with Admin Access...", close it and restart as an administrator (right-click > Run As Administrator > Yes).

If you run into trouble, check out the [official GUI documentation](https://docs.openbci.com/Software/OpenBCISoftware/GUIDocs/) or ask one of the SURGE folks!

## Connecting to Your Board

Make sure you have your Cyton Board, Dongle, and Battery Pack with 4 AA batteries. If anything doesn't work — check out the [official Cyton setup documentation](https://docs.openbci.com/GettingStarted/Boards/CytonGS/).

There is a tiny switch on the side of the Cyton board. **Make sure it is in the 'off' position (middle) before plugging in the battery.**

Once set to 'off', plug in the battery pack and change the switch to 'PC'. **If you don't see a blue light on the board after switching to 'PC', the batteries need to be replaced.**

Next, look for the switch on the USB dongle. **Make sure the switch is on 'GPIO 6' — toward the plug-end — before plugging it into your computer.**

## More Information & References

- [OpenBCI GUI Reference](https://docs.openbci.com/Software/OpenBCISoftware/GUIDocs/)
