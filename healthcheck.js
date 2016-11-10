/* eslint-disable */
require('http').get(`http://vcap.me:3000/health`, res => {
  if (res.statusCode === 200) return process.exit(0)
  return process.exit(1)
}).on('error', err => {
  console.error(err)
  process.exit(1)
})
