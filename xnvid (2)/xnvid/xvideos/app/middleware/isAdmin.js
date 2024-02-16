module.exports = () => {
  return async function (ctx, next) {
    let message = {
      code: -1,
      message: '非管理员不允许操作！'
    }
    let client_token = ctx.headers['authorization']
    if (!client_token) return ctx.body = message
    let verifyRes = {}
    verifyRes = ctx.app.jwt.verify(client_token, ctx.app.config.jwt.secret, (err, decoded) => decoded)
    // console.log(verifyRes)
    if (verifyRes.isAdmin) {
      await next()
    } else {
      return ctx.body = message
    }
  }
}