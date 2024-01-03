import { z } from 'zod'

export const LoginValidationSchema = z.object({

    email: z.string().email('Pease insert a valid Email'),
    password: z.string().min(6, 'Password must be atleast 6 character long')


})