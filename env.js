import path from 'path'
export const NODE_ENV = process.env.NODE_ENV && String(process.env.NODE_ENV).toLowerCase() || 'development'
export const OPTIONS = require(path.join(__dirname, 'config/env/', NODE_ENV))
export const SERVER_HOST = process.env.DEV_SERVER_HOST || OPTIONS.defaultHost
export const SERVER_PORT = process.env.DEV_SERVER_PORT || OPTIONS.defaultPort
