import { Shared } from '..'
import worldofwarcraft from './worldofwarcraft/index.js'

export default function(shared: Shared){
    return {
        worldofwarcraft: worldofwarcraft(shared)
    }
}