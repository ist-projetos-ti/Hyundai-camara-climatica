import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const loginFormSchema = z.object({
  language: z.enum(['pt_BR', 'en_US'], {
    errorMap: () => ({
      message: 'Opção inválida',
    }),
  }),
  email: z.string().email('E-mail inválido').nonempty('O email é obrigatório'),
  password: z
    .string()
    .nonempty('A senha é obrigatária')
    .min(6, 'A senha deve ter 6 ou mais caracteres'),
});

export type LoginFormData = z.infer<typeof loginFormSchema>;

export const loginFormResolver = zodResolver(loginFormSchema);
