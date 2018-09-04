import Koa from 'koa'
import config from './config'
import MIDDLEWARES from './middlewares'
import R from 'ramda'
import {resolve} from 'path'
const r = path => resolve(__dirname, path)
class Server{
    constructor(){
        this.app=new Koa();
        this.useMiddleWares2(this.app,MIDDLEWARES)
        // this.useMiddleWares(this.app)(MIDDLEWARES)
    }
    //利用ramda特效的函数式写法
    useMiddleWares(app){
        return R.map(R.compose(
            R.map(i => i(app)),
            require,
            i => `${r('./middlewares')}/${i}`
        ))
    }
    start(){
        this.app.use((ctx)=>{
            ctx.status=200;
        })
        this.app.listen(config.app.port,config.app.host)
    }

    //普通的函数写法
    useMiddleWares2(app,middleWares){
        middleWares.map((item)=>{
            let middleware=require(`${r('./middlewares')}/${item}`)
            for(let fn in middleware){
                middleware[fn](app)
            }
        })
    }
}
const app = new Server()
app.start()