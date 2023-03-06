import { z } from 'zod'

const SelfReferenceSchema = z.object({
    self: z.object({
        href: z.string().url()
    })
})

export { SelfReferenceSchema }