import { z } from "zod";

export const RegsiterValidationSchema = z.object({

  username: z
    .string({
      invalid_type_error: "Please enter valid Username",
    })
    .min(5, "Username should be atleaset 3 letters"),
  // first: z
  //   .string()
  //   .min(5, "First name should be atleaset 5 letters"),
  // last: z
  //   .string()
  //   .min(5, "Last name should be atleaset 5 letters"),
  email: z.string().email("Pease insert a valid Email"),
  phone_number: z.string().min(10, 'Phone Number mustbe 10 numbers long ').max(10, 'Phone Number mustbe 10 numbers long '),
  password: z.string().min(6, "Password must be atleast 6 character long"),
});
