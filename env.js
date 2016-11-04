import * as path from 'path'
export const NODE_ENV = process.env.NODE_ENV && String.prototype.toLowerCase.call(process.env.NODE_ENV) || process.env.TAP && 'test'
export const OPTIONS = require(path.join(__dirname, 'config/env', NODE_ENV))
export const SERVER_HOST = process.env.DEV_SERVER_HOST || OPTIONS.defaultHost
export const SERVER_PORT = process.env.DEV_SERVER_PORT || OPTIONS.defaultPort
