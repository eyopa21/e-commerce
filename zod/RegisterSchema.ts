import { z } from "zod";

export const RegsiterValidationSchema = z.object({
  
  username: z
    .string({
      invalid_type_error: "Please enter valid Username",
    })
    .min(5, "Username should be atleaset 5 letters"),
  email: z.string().email("Pease insert a valid Email"),
  password: z.string().min(6, "Password must be atleast 6 character long"),
});
