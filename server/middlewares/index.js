import fs from 'fs'
import {resolve} from 'path'
const MIDDLEWARES=fs.readdirSync(`${resolve(__dirname,`../middlewares`)}`,'utf-8')
MIDDLEWARES.splice(MIDDLEWARES.indexOf('index.js'),1);
export default MIDDLEWARES
