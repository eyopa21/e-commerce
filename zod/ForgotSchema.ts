import { z } from 'zod'

export const ForgotPasswordValidationSchema = z.object({

    email: z.string().email('Pease insert your valid Email'),
    


})