import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const newPasswordSchema = z
  .object({
    hcm_code: z.string(),
    password: z
      .string()
      .nonempty('A senha é obrigatária')
      .min(6, 'A senha deve ter 6 ou mais caracteres'),
    confirm_password: z
      .string()
      .nonempty('A senha é obrigatária')
      .min(6, 'A senha deve ter 6 ou mais caracteres'),
  })
  .refine((data) => data.password === data.confirm_password, {
    message: "Passwords don't match",
    path: ['confirm'],
  });

export type NewPasswordFormData = z.infer<typeof newPasswordSchema>;

export const NewPasswordFormResolver = zodResolver(newPasswordSchema);
