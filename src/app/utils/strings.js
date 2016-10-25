import camelizeFn from 'camelize'
import decamelizeFn from 'decamelize'
export function camelize(str) {
  return camelizeFn(str)
}
export function decamelize(str) {
  return camelToDash(str)
}
export function camelToUnderscore(str) {
  return decamelizeFn(str)
}
export function camelToDash(str) {
  return decamelizeFn(str, '-')
}
