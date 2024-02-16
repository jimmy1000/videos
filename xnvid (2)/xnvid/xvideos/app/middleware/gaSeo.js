module.exports = () => {
    return async function (ctx, next) {
        // 设置uv
        // ctx.cookies.set('uv-session-today', (Number(new Date().getUTCMonth())+1) +'-'+ new Date().getUTCDate());
        // ctx.service.gaseo.createGaSeo()
        await next()
    }
}