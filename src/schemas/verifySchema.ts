import { verify } from 'crypto'
import {z} from  'zod'

export const verifySchema = z.object({
    Code  : z.string().length(6, 'verify code must be of length 6')
})



