const Router = require('koa-router')
const lists = new Router()

lists.get('/',async (ctx)=>{
  ctx.body = '列表首页'
})


lists.get('/wanju',async (ctx)=>{
  ctx.body = '玩具'
})

module.exports = lists