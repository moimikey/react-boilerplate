require('http').get(`http://localhost:3000/health`, res => {
  if (res.statusCode === 200) return process.exit(0)
  return process.exit(1)
}).on('error', err => process.exit(1))
