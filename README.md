# ⚛ web app boilerplate [![Build Status][travis-image]][travis-url]
a straight forward and high functioning web app boilerplate

![License][npm-license-image]][npm-license-url]

## Install
```
docker-compose build
docker-compose up
```

## Stack

### Frontend
* react
* redux w/ routing & async actions

#### TODO
* advanced routing architecture:

### Backend
TODO

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

## Install
```
yarn install || npm install
```

## License
MIT

[npm-license-url]: https://github.com/moimikey/react-boilerplate/blob/master/LICENSE
[npm-license-image]: https://img.shields.io/npm/l/react-boilerplate.svg
[travis-url]: https://travis-ci.org/moimikey/react-boilerplate
[travis-image]: https://travis-ci.org/moimikey/react-boilerplate.svg?branch=redux
