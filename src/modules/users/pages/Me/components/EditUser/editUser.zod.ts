import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const editUserSchema = z
  .object({
    name: z.string().nonempty('O nome é obrigatório'),
    email: z.string().email('O email precisa ser válido').toLowerCase(),
    old_password: z
      .string()
      .optional()
      .nullable()
      .transform((value) => value || undefined),
    password: z
      .string()
      .max(8, { message: 'A senha deve ter no máximo 8 caracteres' })
      .optional()
      .nullable()
      .transform((value) => value || undefined),
    password_confirmation: z
      .string()
      .optional()
      .nullable()
      .transform((value) => value || undefined),
    terms: z.literal(true, {
      errorMap: () => ({
        message: 'Você precisa aceitar os termos e condições',
      }),
    }),
  })
  .refine((data) => data.password === data.password_confirmation, {
    path: ['password_confirmation'],
    message: 'As senhas precisam ser iguais',
  });

export type EditUserFormData = z.infer<typeof editUserSchema>;

export const editUserFormResolver = zodResolver(editUserSchema);
