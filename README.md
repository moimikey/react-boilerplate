# ⚛ web app boilerplate [![Build Status][travis-image]][travis-url] [![License][git-license-image]][git-license-url] [![Donate Beer][beerpay-image]][beerpay-url]
My personal react/redux/etc webapp boilerplate and build pipeline like everyone else's, but better! (cause it gets _distributed_)

## Why use this boilerplate?
Everyone has their own opinion on how they want their code base to look.
There are hundreds of boilerplates for a React and/or Redux application —
especially when they're architected to solve specific problems like async
control flow or isolation of "side-effects."

The reason for this boilerplate was to not only address various concerns
within scalable, production-ready web application, but also the code itself.

This boilerplate is meant to be an intuitive, easy to follow, scalable
and secure, modern web application boilerplate with options to expand into
dockerized micro architectures and beyond.

Beyond initially-necessary parts of the app are commented out.

## Goals / `TODO`
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
* State persistance and auto rehydration with `redux-persist`
  * Paired with `redux-persist-crosstab` for unified sessions

## Docs
* [FontAwesome Usage](./docs/fontawesome.md)

## Install

### Local
```
npm install
npm start
```

### Cluster (with Docker)
```
docker-compose build
docker-compose up
```

## Usage

This web application is driven by `routes`, that are tied to `pages`, which
consist of `modules`, that are comprised of `components`

### Routes & Pages

URI paths (routes) in a web application are mapped to `pages`. They are created
in the `pages` directory and are respectively named, as they are dynamically
generated and passed to `react-router`.

```js
pages/
  counter.js  // http://localhost/counter
  home.js     // http://localhost/home
  404.js      // any non-route
```

Routes in this case are dynamically generated using the filename. In the event
of a more complex route, simple create a respectively named directory that
contains sub-routes.

```js
pages/
  counter.js
  home.js
  404.js
  profile/
    index.js  // http://localhost/profile
    edit.js   // http://localhost/profile/edit
```

A `page` is simply a container for `modules`, which may consist of more
`modules` or individual `components`. A `Home` page for example may consist of
many `modules` like a `Blog` and `BlogSidebar`. These `modules` are of course
comprised of `components` or even more `modules`.

### Modules

`modules` are container (smart) components. They're contained in respectively
named directories that include relative dependencies like as `actions`, `reducers`,
a root `component`.

```js
modules/
  MyModule/        // modules and components are capitalized
    actions.js     // local actions
    component.js   // the container (smart) component itself
    component.css  // accompanying CSS
    index.js       // exports actions, components, reducers, etc.
    reducers.js    // local reducers
```

When a `module` contains a `reducers.js` file, the default export is
automatically added as a globally available reducer (`rootReducers`)

The state slice that the reducer will automatically bind itself to, is
equivilent to the name of the module, but lowercase. Therefore, the
`Counter` component has access to `state.counter` while the `FourOhFour`
component is mapped to `state.fourohfour`

Use `Counter` as a boilerplate module.

## Data Flow

### Nanomsg

TODO

### Redux

#### Actions

Special meta properties can be used to do different things:

```
meta: {
  debounce: 'simple' // debounce the action for 300ms
}
```

```
meta: {

}
```

## Stack

### Frontend
* react
* redux w/ async routing & code splitting
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
