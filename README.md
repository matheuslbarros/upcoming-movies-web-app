# Upcoming Movies Web App

## Project description

> As a full stack software developer you've been tasked with the development of an webapp for cinephiles and movie hobbyists. This first version (MVP) of the app will be very simple and limited to showing the list of upcoming movies. The app will be fed with content from The Movie
Database (TMDb). No design specs were given, so you're free to follow your UX and UI personal preferences. The front-end for this app should be simple, so try to keep all the business logic on the back-end, including access to the TMDb API. As mentioned before, all data must come from TMDb, but feel free to create your own data storage strategy.

## Architecture

The project was built using the Nuxt.js framework, which is highly used to build complex entreprise web aplications. It's based on Vue.js and some development tools like Webpack, Babel and PostCSS. On the server side is used Express.js, a minimal and flexible Node.js application framework that provides a robust set of features for web and mobile applications.

Directory structure:
- **components**: Contains components, they are built using HTML, Javascript and and SCSS.
- **pages**: Contains views and routes, a view it's a web page, and every page is a component.
- **plugins**: Contains plugins, used to add external modules.
- **server**: Contains the server application, it contains the app bootstrap, routes and handlers.
- **services**: Contains services, a service is used to organize and share code across the app.
- **static**: Contains static files, this directory is directly mapped on the server root.
- **store**: Contains Vuex Store, a store is a container that holds the application state.

## Build

``` bash
# install dependencies
$ npm install

# copy env config (you must configure your variables in this file)
$ cp .env.sample to .env

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

## Demo

See the live example running on Heroku

https://matheuslbarros-upcoming-movies.herokuapp.com/

## Libraries

* [npm](https://www.npmjs.com/) - Package manager for JavaScript
* [Node.js](https://nodejs.org/) - JavaScript runtime built on Chrome's V8 JavaScript engine
* [Nuxt.js](https://nuxtjs.org/) - An open source framework making web development simple and powerful.
* [Vue.js](https://vuejs.org/) - The Progressive JavaScript Framework
* [Express](https://expressjs.com/) - Fast, unopinionated, minimalist web framework for Node.js
* [Axios](https://github.com/axios/axios) - Promise based HTTP client for the browser and node.js
* [Heroku](https://www.heroku.com/) - Platform as a service for building, running, and managing apps

## Authors

* [Matheus Barros](https://github.com/matheuslbarros)
