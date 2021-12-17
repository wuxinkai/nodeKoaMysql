//（1）引入koa
const koa = require('koa2')

//引入路由模块
const router = require('./router')

//读取静态文件
const path = require('path')
const static = require('koa-static')

const app = new koa()


const port = 9000


/*
router.routes() 启动路由
router.allowedMethods()  允许任何请求（get post put）
*/

var cors = require('koa2-cors');
//解决跨域
app.use(cors(), async (ctx,next)=>{
 await next()
});


// 匹配不到页面的全部跳转去404
app.use(async (ctx, next) => {
  await next();
  if (parseInt(ctx.status) === 404) {
      ctx.response.redirect("/404")
  }
})

// 获取静态资源文件夹
//在url输入  http://localhost:9000/images/banner1.jpg
app.use(static(path.join(__dirname+'/assets')));

app.use(router.routes(),router.allowedMethods())


app.listen(port, () => {
  console.log(`http://localhost:${port}`);
})