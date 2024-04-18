import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

export const newPasswordSchema = z
  .object({
    hcm_code: z.string().nonempty('Required field.'),
    password: z
      .string()
      .nonempty('Required field.')
      .min(6, 'Password must contain at least 6 characters.'),
    confirm_password: z
      .string()
      .nonempty('Required field.')
      .min(6, 'Password must contain at least 6 characters.'),
  })
  .refine((values) => values.password === values.confirm_password, {
    message: 'Passwords must match.',
    path: ['confirm_password'],
  });

export type NewPasswordFormData = z.infer<typeof newPasswordSchema>;

export const NewPasswordFormResolver = zodResolver(newPasswordSchema);
