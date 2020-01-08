<div align="center">
  <h1>Untune.io</h1>
  <p>Untune is a fullstack app built with React, Redux, Node, Saas, Reddit API, Youtube API, and Jest</p>
  <img src="public/images/web-screenshot.png" width="557" />
  <br />
</div>
<br>

## Contents

- [Overview](#overview)
- [Getting Started](#getting-started)
- [Tests](#tests)
- [API](#API)

## Overview
The components of Untune are the [Untune Node API](https://github.com/zenobo/Untune-Backend) and the [Untune Chrome Extension](https://github.com/zenobo/Untune-Extension). The desktop version of the website generates playlists on the fly. On mobile, pre-cached playlists are fetched through the Node API. To learn more about data fetching on Untune, view the [API Section](#API).

## Getting Started
Use Node v12 to install and run the app 

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
Untune uses Jest and React-Testing-Library to test redux connected components. Tests can be found inside the components folder, eg body.test.js. Redux data is imported from __mocks__ as a static state. Whenever the app's state is changed, it will also need to seperately be updated here.

#### Run the test watcher  
```
npm run test
```

## API
Playlists are compiled differently across web and mobile. On web, playlists are generated on the fly through youtubes /watch_videos endpoint. This watch_videos endpoint isn't supported on the youtube mobile browser, so the [Untune Node API](https://github.com/zenobo/Untune-Backend) creates playlists daily on its youtube account for the top subreddits.
