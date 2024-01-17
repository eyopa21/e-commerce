import { z } from 'zod'

export const VerificationValidationSchema = z.object({

    code: z.string().min(5, 'Verication code must be 5 digits').max(5, 'Verication code must be 5 digits'),



})