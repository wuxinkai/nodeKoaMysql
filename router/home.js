const Router = require('koa-router')
const homes = new Router()
const db = require('../mysql/db')


homes.get('/', async (ctx) => {
  ctx.body = 'home首页'
})

homes.get('/banner', async (ctx) => {
  let myData = await new Promise((resolve, reject) => {
    db.query(`SELECT * FROM banner`, (err, data) => {
      if (err) console.log(err);
      data.map(v=>{
        v.imgUrl = `http://49.232.19.124:9000${v.imgUrl}`
      })

      resolve(data)
    })
  })
  ctx.body = myData
})

module.exports = homes