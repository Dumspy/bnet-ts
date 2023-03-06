import { Shared } from '../../../index.js'
import { z } from 'zod'
import { SelfReferenceSchema } from '../../globalSchemas.js'

export const WoWTokenSchema = z.object({
    _links: SelfReferenceSchema,
    last_updated_timestamp: z.number(),
    price: z.number()
})


export default function WoWTokenEndpoints(shared: Shared) {
    return {
        getWowToken: async () => {
            const response = await shared.Axios.get(`/data/wow/token/index?namespace=dynamic-${shared.Region}&locale=en_US&access_token=${shared.OAuthToken}`)
            
            console.log(response.data)

            return WoWTokenSchema.parse(response.data)
        }
    }
}