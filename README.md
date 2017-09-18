# ⚛ web app boilerplate [![Build Status][travis-image]][travis-url] [![License][git-license-image]][git-license-url] [![Donate Beer][beerpay-image]][beerpay-url]

[![Greenkeeper badge](https://badges.greenkeeper.io/moimikey/react-boilerplate.svg)](https://greenkeeper.io/)
My personal react/redux/etc webapp boilerplate and build pipeline like everyone else's,
but better! (cause it gets _distributed_)

This repo can also pose as an example for scaling out your project for
distributed or non-distributed, multi-environment web applications.

## Philosophy • Why use this?
Everyone has their own opinion on how they want their code base to look.
There are hundreds of boilerplates for a React and/or Redux application —
especially when they're architected to solve specific problems like async
control flow or isolation of "side-effects."

The reason for this boilerplate was to not only address various concerns
within scalable, production-ready web application, but also the code itself.

This boilerplate is meant to be an intuitive, easy to follow, scalable
and secure, modern web application boilerplate, with options to expand into
containerized micro architectures and beyond. This boilerplate is **not**
meant to be used completely out of the box. It is loaded with easy-to-shed
features and should be hacked and tailored to your projects needs.

Beyond initially-necessary parts of the app are commented out.

## Goals • `TODO`
- [ ] Distributed 12-factor configuration and caching with `redis`
- [ ] Realtime `redux` communication over `WebSockets`
- [ ] Achieve 12-factor

## Features
* Easy to read, follow and scale from
* Containerization with `docker` using `docker-compose` (optional)
* Enhanced logging and debugging features
* Support for ES3-ES8 (full es2017 support with `babel` at `stage-0`)
* Asynchronous testing with `tap`
  * Paired with `enzyme` for `react`
* Configurable linting with `eslint`
* Unidirectional data flow with `redux`
* Full-duplex WebSockets communication with `uws` and `redux-scuttlebutt`
* Realtime feature toggling
* Authentication, sessions, uid, gid, groups

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

## Configure

### .env

You'll find an `example.env` file that is nearly identical to `.env`. This
contains runtime environment variables that can be read by this web application.
Variables can have values that are variables. An example in `example.env` is the
Redis configuration: `REDIS_HOST`, `REDIS_PORT` and `REDIS_AUTH`. `REDIS_AUTH`
is assigned the variable `$REDIS_AUTH` which equates to `process.env.REDIS_AUTH`.
This becomes a useful way to read sensitive data into configuration without explicitly
hardcoding it.

## Usage

This web application is driven by `routes`, that are tied to `pages`, which
consist of `modules`, that are comprised of `components`

### Authentication, Permissioning and Feature Toggling

This is a topic that I felt should be aligned with Unix based systems, whereby an
account can have a user id `uid`; group id `gid`; and be part of many `groups`.
The strategy behind this, is to provide a vector for providing features (or `modules`),
to subsets of accounts. In other words: feature toggling.

| uid | gid | groups | features |
| moimikey | 0 | admins, superusers | feature_a, feature_b|
| joe | 15 | users | feature_a, feature_c |

Features can be set on all groups are some groups where accounts are applicable.


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

### Providers (Working Draft)

`providers` are Higher-Order Components (HOC) for various enhancements
and are reusable:

i18n: international and local translation
featureToggle: feature toggling


## Data Flow

### Redux

#### Actions

Special meta properties can be used to do different things:

```
meta: {
  debounce: 'simple' // debounce the action for 300ms
}
```

## Stack

### Frontend
* react
* redux w/ async routing & code splitting
* postcss
* babel
* webpack

### Backend
* koa
* redis
* scuttlebutt
* uws
* nodejs

### Ops
* docker

#### TODO
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

## The Road to 12-factor
- [x] Codebase (version controlled, deployable)
- [x] Dependencies (explicitly declared and isolated deps)
- [ ] Config (store config in the environment)
- [ ] Backing services (treat backing services as attached resources)
- [ ] Build, release, run (strictly separate build and run stages)
- [ ] Processes (execute the app as one or more stateless processes)
- [x] Port binding (export services via port binding)
- [ ] Concurrency (scale out via the process model)
- [ ] Disposability (maximize robustness with fast startup and graceful shutdown)
- [x] Dev/prod parity (keep development, staging, and production as similar as possible)
- [x] Logs (treat logs as event streams)
- [x] Admin processes (run admin/management tasks as one-off processes)

## License
MIT

[git-license-url]: https://github.com/moimikey/react-boilerplate/blob/master/LICENSE
[git-license-image]: https://img.shields.io/github/license/moimikey/react-boilerplate.svg
[travis-url]: https://travis-ci.org/moimikey/react-boilerplate
[travis-image]: https://travis-ci.org/moimikey/react-boilerplate.svg?branch=redux
[beerpay-url]: https://beerpay.io/moimikey/react-boilerplate
[beerpay-image]: https://beerpay.io/moimikey/react-boilerplate/badge.svg?style=flat
