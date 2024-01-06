import { z } from "zod";

export const ChangePasswordValidationSchema = z.object({

  old_password: z.string().min(6, "PLease enter your old password"),
  //new_password: z.string().min(6, "Password must be atleast 6 character long"),
  //confirm_password: z.string().min(6, "Password must be atleast 6 character long")
})