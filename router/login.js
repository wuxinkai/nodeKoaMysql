const Router = require('koa-router');
const loginPage = new Router();
const bodyParser = require('koa-bodyparser') // post参数
const jwt = require('jsonwebtoken') //生成token
const db = require('../mysql/db')

loginPage.use(bodyParser()); //调用中间件后就可以获取数据

loginPage.post('/register', async (ctx) => {
  console.log(ctx.request.body);
  let MyUser = ctx.request.body.user //获取账号 
  let MyPwd = ctx.request.body.pwd //获取密码

  let serachSql = `select * from users where user='${MyUser}'`
  //异步变同步
  let myarr = await new Promise((resolve, reject) => {
    return db.query(serachSql, (err, data) => {
      if (err) throw reject(err);
      resolve(data)
    })
  })


  //数组长度大于0 有这个账号 
  if (myarr.length > 0) {
    if (myarr[0].pwd == mypwd) {
      ctx.body = {
        token: myarr[0],
        msg: '登录成功',
        userName: MyUser
      };
    } else {
      ctx.body = {
        msg: '密码错误',
        userName: MyUser
      };
    }
  } else {
    //没有账号 要进行注册

    //生成token
    //  MyUser: MyUser, MyPwd: MyPwd } 通过什么转码生成token‘
    // secret 是加密
    //3600秒后 一个小时后失效
    const MyToken = jwt.sign({ MyUser: MyUser, MyPwd: MyPwd }, 'secret', { expiresIn: 3600 })
    let insertSql = `insert into users (user, pwd, token) values ('${MyUser}','${MyPwd}','${MyToken}')`
    //查询是一个异步过程必须改成同步
    let result = await new Promise((resolve, reject) => {
      db.query(insertSql, (err, data) => {
        if (err) throw reject(err);
        let obj = {
          msg: "注册成功",
          token: MyToken,
          userName: MyUser
        }
        resolve(obj)
      })
    })
    if (result) {
      ctx.body = result;
    }
  }
})

module.exports = loginPage;
