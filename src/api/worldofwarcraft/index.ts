import { Shared } from '../..'
import gamedata from './gamedata/index.js'
import profile from './profile/index.js'

export default function worldofwarcraft(shared: Shared){
    return {
        gamedata: gamedata(shared),
        profile: profile(shared)
    }
}