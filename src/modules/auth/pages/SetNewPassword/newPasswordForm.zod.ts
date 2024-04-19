import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

export const newPasswordSchema = z
  .object({
    hcm_code: z.string().optional(),
    password: z
      .string()
      .nonempty('Required field.')
      .min(6, 'Password must contain at least 6 characters.'),
    password_confirmation: z
      .string()
      .nonempty('Required field.')
      .min(6, 'Password must contain at least 6 characters.'),
  })
  .refine((values) => values.password === values.password_confirmation, {
    message: 'Passwords must match.',
    path: ['password_confirmation'],
  });

export type NewPasswordFormData = z.infer<typeof newPasswordSchema>;

export const NewPasswordFormResolver = zodResolver(newPasswordSchema);
