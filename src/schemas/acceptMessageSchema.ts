import {z} from 'zod'

export const accepMessagesSchema = z.object({
    acceptMessages : z.boolean()
})  