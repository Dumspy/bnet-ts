import { Shared } from '../../../index.js'

export default function AuctionHouseFunctions(shared: Shared) {
    return {
        getCommidities: async () => {
            return shared.Axios.get('/gamedata/auctionhouse/commodities')
        }
    }
}