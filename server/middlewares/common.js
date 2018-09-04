import KoaBodyParser from 'koa-bodyparser'
export const bodyParser=app=>{

    app.use(KoaBodyParser())
}