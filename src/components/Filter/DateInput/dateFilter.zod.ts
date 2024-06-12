import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const currentYear = new Date().getFullYear();

const dateFilter = z.object({
  year: z.preprocess(
    (a) => parseInt(z.string().parse(a), 10),
    z.number().min(2000).max(currentYear)
  ),
  month: z.preprocess(
    (a) => parseInt(z.string().parse(a), 10),
    z.number().min(1).max(12)
  ),
  day: z.preprocess(
    (a) => parseInt(z.string().parse(a), 10),
    z.number().min(1).max(31)
  ),
});

export type DateFilterData = z.infer<typeof dateFilter>;

export const dateFilterResolver = zodResolver(dateFilter);
