var http = require('http')
var fs = require('fs')

var server = http.createServer((req, res) => {
  if (req.url === '/index1.html') {
    fs.readFile('./index1.html', (err, data) => {
      if (!err) {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.write(data)
        res.end()
      }
    })
  } else if (req.url === '/index2.html') {
    fs.readFile('./index2.html', (err, data) => {
      if (!err) {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.write(data)
        res.end()
      }
    })
  } else if (req.url === '/') {
    res.setHeader('Content-Type', 'text/html')
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    res.write("hello")
    res.end()
  } else if (req.url === '/css/index.css') {
    fs.readFile('./css/index.css', (err, data) => {
      if (!err) {
        res.writeHead(200, { 'Content-Type': 'text/css' })
        res.write(data)
        res.end()
      }
    })
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html;charset=UTF-8' })
    res.write("服务器不存在")
    res.end()
  }
})
server.listen(3000)