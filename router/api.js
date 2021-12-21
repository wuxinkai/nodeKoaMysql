const Router = require('koa-router');
const errorPage = new Router();

errorPage.get('/users', async (ctx) => {
  let users = [
    {id:1,name:'zhufeng1'},
    {id:2,name:'zhufeng2'},
    {id:3,name:'zhufeng3'}
  ]
    ctx.body = JSON.stringify(users)
})

module.exports = errorPage;
