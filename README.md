<p align="center">
  <h2 align="center">Uptime Monitoring API using Node.js</h3>

<!-- TABLE OF CONTENTS -->

## Table of Contents

- [Update Node](#update-node)
- [Install and Update Yarn](#install-and-update-yarn)
- [VS Code Editor Setup](#vs-code-editor-setup)
  - [Extensions](#extensions)
  - [Settings](#settings)
  - [Set Line Breaks](#set-line-breaks)
- [Linting Setup](#linting-setup)
  - [Install Dev Dependencies](#install-dev-dependencies)
  - [Setup Linting Configuration file](#setup-linting-configuration-file)


<!-- UPDATE NODE -->

## Update Node

Please follow the below instructions to update node in your machine:



### Ubuntu

1. Add the NodeSource repository for the latest version:
   - For the latest LTS version:
     ```sh
     curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
     ```
   - For the latest Current version:
     ```sh
     curl -fsSL https://deb.nodesource.com/setup_current.x | sudo -E bash -
     ```
2. Install Node.js:
   ```sh
   sudo apt install -y nodejs
   ```

<!-- INSTALL & UPDATE YARN -->

## Install and Update yarn

Please follow the below instructions to install or update yarn in your machine.

### On Ubuntu

1. Add the yarn repository
   ```sh
   curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
   echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
   ```
2. Update the package list and install yarn
   ```sh
   sudo apt update
   sudo apt install -y yarn
   ```
3. Verify the Yarn installation:
   ```sh
   yarn --version
   ```
4. (Optional) If you don't have Node.js installed, add the --no-install-recommends flag during installation to avoid the Node.js dependency:
   ```sh
   sudo apt install --no-install-recommends yarn
   ```

<!-- EDITOR SETUP -->

## VS Code Editor Setup

In order to follow along the tutorial series, I recommend you to use Visual Studio Code Editor and install & apply the below extensions and settings.

### Extensions

Install the below extensions:

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [Path Autocomplete](https://marketplace.visualstudio.com/items?itemName=ionutvmi.path-autocomplete)

### Settings

Go to your Visual Stuido Code `settings.json` file and add the below settings there:

```json
// config related to code formatting
"editor.defaultFormatter": "esbenp.prettier-vscode",
"editor.formatOnSave": true,
"[javascript]": {
  "editor.formatOnSave": false,
  "editor.defaultFormatter": null
},
"editor.codeActionsOnSave": {
  "source.fixAll.eslint": true,
  "source.organizeImports": true
},
"eslint.alwaysShowStatus": true
```

### Set Line Breaks

Make sure in your VS Code Editor, "LF" is selected as line feed instead of CRLF (Carriage return and line feed). To do that, just click LF/CRLF in bottom right corner of editor, click it and change it to "LF". If you dont do that, you will get errors in my setup.


<!-- LINTING SETUP -->

## Linting Setup

In order to lint and format your code automatically according to popular airbnb style guide, I recommend you to follow the instructions as described in video. References are as below.

### Install Dev Dependencies

```sh
yarn add -D eslint prettier
npx install-peerdeps --dev eslint-config-airbnb-base
yarn add -D eslint-config-prettier eslint-plugin-prettier
```

### Setup Linting Configuration file

Create a `.eslintrc.json` file in the project root and enter the below contents:

```json
{
  "extends": ["prettier", "airbnb-base"],
  "parserOptions": {
    "ecmaVersion": 12
  },
  "env": {
    "commonjs": true,
    "node": true
  },
  "rules": {
    "no-console": 0,
    "indent": 0,
    "linebreak-style": 0,
    "prettier/prettier": [
      "error",
      {
        "trailingComma": "es5",
        "singleQuote": true,
        "printWidth": 100,
        "tabWidth": 4,
        "semi": true
      }
    ]
  },
  "plugins": ["prettier"]
}
```
