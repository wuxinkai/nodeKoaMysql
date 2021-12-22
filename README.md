# 一 koa2安装
```
# 初始化
npm  init -y

# 安装koa2 
npm i koa2 -S
```

# 二 入口文件
在项目根目录创建app.js 文件  并在package.json里配置
```
//（1）引入koa
const koa = require('koa2')
const app = new koa()
const port = 9000
app.use(async (ctx) => {
  ctx.body = "Hello koa!"
})
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
})
```
# 三  路由
```
# 下载
npm i koa-router -D

# 引入
const Router = require('koa-router')
const router = new Router()

# 设置
router.get('/',async (ctx)=>{
  ctx.body = '首页'
})

# 配置
/*
router.routes() 启动路由
router.allowedMethods()  允许任何请求（get post put）
*/ 

app.use(router.routes(),router.allowedMethods())

# 路由拆分

# 路由重定向  访问/ 直接去到home路由
router.redirect('/','/home')
```

# 404无效路由
```
app.use(async (ctx, next) => {
  await next();
  if (parseInt(ctx.status) === 404) {
      ctx.response.redirect("/404")
  }
})

```
# 前端请求 解决跨域
```
//后端解决跨域
npm install --save koa2-cors
var cors = require('koa2-cors');
app.use(cors());

//前端解决跨域
```

# mysql数据数据库

```
yarn add  mysql

 let mysql =require('mysql')

// F:\nodeKoaMysql\mysql\db.js

 var pool = mysql.createPool({
   host:"49.232.19.124", // 服务器连接地址
   port:"3307", //端口
   database:"mydb1",//数据库
   user:"root", //用户名
   password:"123456", //密码
 })

 function query(sql,callback){
  pool.getConnection(function(err,connection){
      connection.query(sql, function (err,rows) {
          callback(err,rows)
          connection.release() //连接完成后 立马终断连接
      })
  })
}

exports.query = query;


//F:\nodeKoaMysql\mysql\sqldata.js


const db =require('./db')
const data = [
  {id: 0, icon: '/images/subjectIcons1.png', title: "Java EE"},
  {id: 1, icon: '/images/subjectIcons2.png', title: "全栈UI设计"},
  {id: 2, icon: '/images/subjectIcons3.png', title: "H5前端"},
  {id: 3, icon: '/images/subjectIcons4.png', title: "Python"},
  {id: 4, icon: '/images/subjectIcons5.png', title: "iOS"},
  {id: 5, icon: '/images/subjectIcons6.png', title: "大数据"},
  {id: 6, icon: '/images/subjectIcons7.png', title: "C++"}
]

data.map(val=>{
  let sql = `INSERT INTO subject VALUES (${val.id}, '${val.icon}', '${val.title}')`;
  db.query(sql, (err, data)=>{
      if(err) console.log(err);
      console.log(data)
  })
})

//执行 命令
 node .\mysql\sqldata.js

```
# 读取静态文件
首先，在项目的根目录下创建 assets 后，将图片资源文件夹 images 放到其中，并且执行以下操作：
```
cnpm install koa-static -D


const path = require('path')
const static = require('koa-static')

app.use(static(path.join(__dirname+'/assets')));


//在url输入  http://localhost:9000/images/banner1.jpg  就可以访问到当前页面
```
# 获取后台数据
获取post请求数据
```
cnpm install koa-bodyparser --save
```
生成token
```
cnpm install jsonwebtoken --save
```

