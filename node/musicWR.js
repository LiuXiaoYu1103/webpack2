var fs = require('fs')

var rs = fs.createReadStream('../song.mp3')
var ws = fs.createWriteStream('./music.mp3')
// once监听事件  流是一次监听   on 是一直监听
ws.once('open', () => {
    console.log('写通道打开')
})

ws.once('close', () => {
    console.log('写通道关闭')
})
rs.once('open', () => {
    console.log('读通道打开')
})

rs.once('close', () => {
    console.log('读通道关闭')
})
rs.on('data', (data) => {
  // console.log(data)
  ws.write(data)
})