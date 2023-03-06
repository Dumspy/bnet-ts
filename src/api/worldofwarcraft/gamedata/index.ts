import { Shared } from '../../..'
import auctionhouse from './auctionhouse.js'
import wowtoken from './wowtoken.js'

export default function gamedata(shared: Shared){
    return {
        auctionhouse: auctionhouse(shared),
        wowtoken: wowtoken(shared)
    }
}