import {z} from 'zod'
import { passwordValidation } from './signUpSchema'

const signInSchema = z.object({
    identifier : z.string(),
    password : passwordValidation
})