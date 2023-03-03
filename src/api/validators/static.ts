import { z } from 'zod'

const RegionIdentifiers = z.enum(['na', 'eu', 'kr', 'tw'])
type RegionIdentifiers = z.infer<typeof RegionIdentifiers>

const Locals = z.object({
    'North America': z.enum(['en_US', 'es_MX', 'pt_BR']),
    'Europe': z.enum(['en_GB', 'es_ES', 'fr_FR', 'ru_RU', 'de_DE', 'pt_PT', 'it_IT']),
    'Korea': z.enum(['ko_KR']),
    'Taiwan': z.enum(['zh_TW'])
})
type Locals = z.infer<typeof Locals>

export { RegionIdentifiers, Locals };
