# ⚛ web app boilerplate [![Build Status][travis-image]][travis-url] [![License][git-license-image]][git-license-url] [![Donate Beer][beerpay-image]][beerpay-url]
My personal react/redux/etc webapp boilerplate and build pipeline like everyone else's, but better!

## Why use this boilerplate?
Everyone has their own opinion on how they want their code base to look. There are hundreds of boilerplates for a React and Redux applications. Especially when they're architected to solve specific problems like async control flow or isolation of "side-effects."

The reason for this boilerplate was to not only address various concerns within scalable, production-ready web application, but also the code itself.

This boilerplate is meant to be an intuitive, easy to follow, scalable and secure, modern web application boilerplate with options to expand into dockerized micro architectures and beyond.

## Goals / TODO
- [ ] Distributed configuration and caching with `redis`
- [ ] Realtime `redux` communication over `WebSockets`

## Features
* Easy to read, follow and scale from
* Containerization with `docker` (optional)
* Enhanced logging and debugging features
* Support for ES3-ES8 (full es2017 support with `babel`)
* Asynchronous testing with `tap`
  * Paired with `enzyme` for `react`
* Configurable linting with `eslint`
* Unidirectional data flow with `redux` 
  * Paired with `redux-saga`
* State persistance and hydration with `redux-persist`
  * Paired with `redux-persist-crosstab` for unified sessions

## Install

### Local
```
npm install
npm start
```

### Docker
```
docker-compose build
docker-compose up
```

## Stack

### Frontend
* react
* redux w/ async routing & code splitting (webpack)
* socket.io-client

### Backend
* HTTP - koa
* DB, MQ - redis, nanomsg

#### TODO
* advanced routing architecture:
* redux saga
* distributed config w/ local cache

## Scripts
* build - **production build**
* clean - **clean built libs, logs and caches**
* clean:all - **runs clean scripts and rm's node_modules**
* lint - **run eslint**
* prebuild - **run prebuild scripts**
* server - **start production server**
* start - **start development server**
* test - **test with immediate exit & stats (single run)**
* test:dev - **test with immediate exit (single run)**
* test:watch - **test with watcher (for dev)**

## License
MIT

[git-license-url]: https://github.com/moimikey/react-boilerplate/blob/master/LICENSE
[git-license-image]: https://img.shields.io/github/license/moimikey/react-boilerplate.svg
[travis-url]: https://travis-ci.org/moimikey/react-boilerplate
[travis-image]: https://travis-ci.org/moimikey/react-boilerplate.svg?branch=redux
[beerpay-url]: https://beerpay.io/moimikey/react-boilerplate
[beerpay-image]: https://beerpay.io/moimikey/react-boilerplate/badge.svg?style=flat
