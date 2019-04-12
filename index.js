const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
  console.log(ctx.request);
  if (true) debugger;
  ctx.body = 'Hello World ' + JSON.stringify(ctx);
});

app.listen(5000);
