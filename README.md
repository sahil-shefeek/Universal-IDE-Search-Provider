# Universal IDE Search Provider

> Find and launch any coding workspace directly from GNOME Shell.

![GitHub License](https://img.shields.io/github/license/sahil-shefeek/Universal-IDE-Search-Provider)
[![Lint](https://github.com/sahil-shefeek/Universal-IDE-Search-Provider/actions/workflows/eslint.yml/badge.svg)](https://github.com/sahil-shefeek/Universal-IDE-Search-Provider/actions/workflows/eslint.yml)

<!-- ![GNOME Extensions download](https://img.shields.io/badge/dynamic/xml?url=https%3A%2F%2Fextensions.gnome.org%2Fextension%2F6976%2Fvscode-search-provider%2F&query=%2Fhtml%2Fbody%2Fdiv%5B2%5D%2Fdiv%2Fdiv%5B2%5D%2Fdiv%5B1%5D%2Fspan%5B3%5D&logo=gnome&label=GNOME%20extensions&cacheSeconds=86400) -->

## Description

![screenshot.png](screenshot.png)

Stop digging through menus or terminal histories. Universal IDE Search Provider integrates all your favorite code editors—including VS Code, VSCodium, Antigravity, and more—straight into your GNOME overview. One search bar, every workspace.

## Features

- Supports GNOME Shell 45 - 46 (and possibly newer versions)
- List all your local VSCode workspaces
- List all your remote VSCode projects

## Installation

<!-- ### Installation from Gnome Extensions

[<img alt="" height="100" src="https://raw.githubusercontent.com/andyholmes/gnome-shell-extensions-badge/master/get-it-on-ego.svg?sanitize=true">](https://extensions.gnome.org/extension/6976/) -->

### Installation from GitHub repository

The latest development version
You may need to install `git` and `node`
Navigate to the directory you want to download the source code and execute following commands in the terminal:

#### GNOME 45+

    git clone https://github.com/sahil-shefeek/Universal-IDE-Search-Provider.git
    cd Universal-IDE-Search-Provider
    pnpm install && pnpm setup

### Enabling the extension

After installation you need to enable the extension.

- First restart GNOME Shell (`ALt` + `F2`, `r`, `Enter`, or Log-Out/Log-In if you use Wayland)
- Now you should see the _VSCode Search Provider_ extension in the _Extensions_ application (reopen the app if needed to load new data), where you can enable it.

### Contributing

If you'd like to contribute, please fork the repository and use a feature branch. Pull requests are warmly welcome.
