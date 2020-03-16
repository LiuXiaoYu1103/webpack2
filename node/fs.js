// fs url 文件读入和写入
var fs = require('fs')

fs.readFile('./test.txt', (err, data) => {
  if (!err) {
    console.log('读成功')
  }
})

fs.writeFile('test.txt', '11', (err) => {
  if (!err) {
    console.log('写入成功')
  }
})