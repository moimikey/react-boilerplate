# ⚛ web app boilerplate [![Build Status][travis-image]][travis-url]
a straight forward and high functioning web app boilerplate

[![Version][npm-version-image]][npm-version-url] [![License][npm-license-image]][npm-license-url] [![Downloads][npm-downloads-image]][npm-downloads-url] [![Deps][npm-deps-image]][npm-deps-url] [![DevDeps][npm-devdeps-image]][npm-devdeps-url]

## Stack

* **server**
  * **utilities**
    * chalk
    * cross-env
    * nodemon
    * npm-run-all
    * rimraf

* **source**
  * babel
    * runtime
    * cli
    * **plugins**
      * ramda
    * **transforms**
      * decorators
      * decorators-legacy
      * runtime
    * **presets**
      * es2015
      * es2016
      * es2017
      * stage-0
      * react

  * **webpack**
    * dev-server
    * **plugins**
      * compression
      * extract-text
      * html
      * progress-bar
      * visualizer
    * **loaders**
      * babel
      * css
      * ejs
      * eslint
      * file
      * json
      * postcss
      * raw
      * react-hot
      * style
      * url

* **ui**
  * **react**
    * css-modules
    * dom
    * helmet
    * redux (bindings)
    * router
    * router-redux
    * **utilities**
      * flux-standard-action

  * **redux**
    * actions
    * router
    * **utilities**
      * reselect
    * **middleware**
      * analytics
      * devtools
      * logger
      * mediaquery
      * promise
      * saga
      * persist
        * **transforms**
          * compress

  * **utility**
    * classnames
    * cq-prolyfill
    * halogen
    * history
    * isomorphic-fetch
    * lave
    * ramda
    * shortid
    * typeov
    * url

* **style**
  * postcss
    * autoprefixer
    * autoreset
    * browser-reporter
    * cssnext
    * devtools
    * discard-duplicates
    * font-magician
    * import
    * url
    * utilities

* **quality**
  * eslint
    * **plugins**
      * react
      * babel
  * stylelint
  * tap
    * babel-tap
    * **utilities**
      * capture-stream

## Scripts
* build - **production build**
* clean - **clean built libs, logs and caches**
* clean:all - **runs clean scripts and rm's node_modules**
* lint - **run eslint**
* prebuild - **run prebuild scripts**
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

[npm-version-url]: https://www.npmjs.com/package/react-boilerplate
[npm-version-image]: https://img.shields.io/npm/v/react-boilerplate.svg
[npm-license-url]: https://github.com/moimikey/react-boilerplate/blob/master/LICENSE
[npm-license-image]: https://img.shields.io/npm/l/react-boilerplate.svg
[npm-downloads-url]: https://www.npmjs.com/package/react-boilerplate
[npm-downloads-image]: https://img.shields.io/npm/dm/react-boilerplate.svg
[npm-deps-url]: https://david-dm.org/moimikey/react-boilerplate
[npm-deps-image]: https://img.shields.io/david/moimikey/react-boilerplate.svg
[npm-devdeps-url]: https://david-dm.org/moimikey/react-boilerplate
[npm-devdeps-image]: https://img.shields.io/david/dev/moimikey/react-boilerplate.svg
[travis-url]: https://travis-ci.org/moimikey/react-boilerplate
[travis-image]: https://travis-ci.org/moimikey/react-boilerplate.svg?branch=master
