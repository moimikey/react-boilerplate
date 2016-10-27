# ⚛ web app boilerplate [![Build Status][travis-image]][travis-url] [![License][git-license-image]][git-license-url]
My personal react/redux/etc webapp boilerplate and build pipeline like everyone else's, but better!

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

## Support on Beerpay
Hey dude! Help me out for a couple of :beers:!

[![Beerpay](https://beerpay.io/moimikey/react-boilerplate/badge.svg?style=beer-square)](https://beerpay.io/moimikey/react-boilerplate)  [![Beerpay](https://beerpay.io/moimikey/react-boilerplate/make-wish.svg?style=flat-square)](https://beerpay.io/moimikey/react-boilerplate?focus=wish)