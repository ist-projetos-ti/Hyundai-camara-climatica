import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const forgotPasswordFormSchema = z.object({
  email: z.string().email('E-mail inválido').min(1, 'O email é obrigatório'),
});

export type ForgotPasswordFormData = z.infer<typeof forgotPasswordFormSchema>;

export const forgotPasswordResolver = zodResolver(forgotPasswordFormSchema);
