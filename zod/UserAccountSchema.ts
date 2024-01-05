import { z } from 'zod'

export const UserAccountValidationSchema = z.object({



    user_name: z
        .string({
            invalid_type_error: "Please enter valid Username",
        })
        .min(5, "Username should be atleaset 5 letters"),
    first_name: z
        .string({
            invalid_type_error: "Please enter valid Name",
        })
        .min(5, "Name should be atleaset 5 letters"),
    last_name: z
        .string({
            invalid_type_error: "Please enter valid Name",
        })
        .min(5, "Name should be atleaset 5 letters"),
    phone_number: z.string().min(10, 'Phone Number mustbe 10 numbers long ').max(10, 'Phone Number mustbe 10 numbers long '),
})