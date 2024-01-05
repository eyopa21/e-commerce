import { z } from 'zod'

export const BillingValidationSchema = z.object({



    address1: z
        .string().min(3, "Address should be atleaset 3 letters"),
    country: z
        .string().min(3, "Country should be atleaset 3 letters"),
    city: z
        .string().min(3, "City should be atleaset 3 letters"),
    sub_city: z
        .string().min(3, "Sub city should be atleaset 3 letters"),
    kebele: z
        .string().min(1, "Kebele is required"),


})