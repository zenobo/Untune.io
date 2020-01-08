<div align="center">
  <img src="public/images/web-screenshot.png" width="557">
  <h1>Untune.io</h1>
  <br>
  <p><b>A tool to convert Reddit.com subreddits to Youtube Playlists</b></p>
  <p>Untune is a fullstack app built with React, Redux, Node, Reddit API, Youtube API, and Jest</p>
  <br>
</div>
<br>

## Contents

- [Overview](#overview)
- [Getting Started](#getting-started)
- [Tests](#tests)
- [API](#API)
- [License](#license)

## Overview
This repo contains the web app for Untune.io. The other components are the [Untune Node API](https://github.com/zenobo/Untune-Backend) and the [Untune Chrome Extension](https://github.com/zenobo/Untune-Extension). The desktop version of the website generates playlists on the fly. On mobile, pre-cached playlists are fetched through the Node API. To learn more about data fetching on Untune, view the [API Section](#API).

## Getting Started
<p>Node version 12</p>
Install and run the app
```
npm install
npm run dev
```

Export the static production build and upload it to your static host (netlify, cloudflare, s3)
```
npm run deploy
```

#### Eslint
Untune uses the airbnb react linter, which runs on npm run dev.

## Tests
Untune uses Jest and React-Testing-Library to test redux connected components. Tests can be found inside the components folder, eg body.test.js. Redux data is imported from __mocks__ and mocked using a static state. Whenever the app's state is changed, it will also need to seperately be updated here.
