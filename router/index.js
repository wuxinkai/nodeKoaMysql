//路由
const Router = require('koa-router')
const router = new Router()

//引入list路由
const list  =require('./list')
const home  =require('./home')
const api  =require('./api')



// 外部引入home路由模块
router.use('/home',home.routes(),home.allowedMethods())

//外部引入list路由模块
router.use('/list',list.routes(),list.allowedMethods())

router.use('/api',api.routes(),api.allowedMethods())
router.redirect('/api','/api/users')

// 路由重定向 访问/ 直接去到home路由
router.redirect('/','/home')

//node 导出模块的方法
module.exports = router