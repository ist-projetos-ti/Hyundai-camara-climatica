import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const loginFormSchema = z.object({
  hcm_code: z
    .string()
    .email('E-mail inválido')
    .nonempty('O campo hcm é obrigatório'),
  password: z
    .string()
    .nonempty('A senha é obrigatária')
    .min(6, 'A senha deve ter 6 ou mais caracteres'),
});

export type LoginFormData = z.infer<typeof loginFormSchema>;

export const loginFormResolver = zodResolver(loginFormSchema);
