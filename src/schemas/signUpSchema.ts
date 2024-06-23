import {z} from 'zod'


export const usernameValidation = z.string().min(2,'username must be atleaset 2 characters').max(15, 'username must be atmost 15 characters').regex(/^[a-zA-Z0-9_]+$/, "Username myst not contain special characters")
export const passwordValidation = z.string().min(5,{message :'Password should contain atleast 5 characters'}) 
export const signUpSchema = z.object({
    username: usernameValidation,
    email : z.string().email({message : 'Enter a valid email'}),
    password : passwordValidation,  
})
