import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const dateFilter = z.object({
  year: z.preprocess(
    (a) => parseInt(z.string().parse(a), 10),
    z.number().min(4)
  ),
  month: z.preprocess(
    (a) => parseInt(z.string().parse(a), 10),
    z.number().min(2)
  ),
  day: z.preprocess(
    (a) => parseInt(z.string().parse(a), 10),
    z.number().min(2)
  ),
});

export type DateFilterData = z.infer<typeof dateFilter>;

export const dateFilterResolver = zodResolver(dateFilter);
