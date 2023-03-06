import { z } from 'zod'

const RegionIdentifiers = z.enum(['na', 'eu', 'kr', 'tw'])
type RegionIdentifiers = z.infer<typeof RegionIdentifiers>

export { RegionIdentifiers };
