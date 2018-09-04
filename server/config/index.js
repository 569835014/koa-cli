let mode=process.env.NODE_ENV?process.env.NODE_ENV:'development'
import fs from 'fs'
import {resolve} from 'path'
const config= JSON.parse(fs.readFileSync(`${resolve(__dirname,`./${mode}.config.json`)}`,'utf-8'))
export default config