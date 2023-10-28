import * as z from "zod";

export const signupvalidation = z.object({
  username: z.string().min(2).max(50),
});