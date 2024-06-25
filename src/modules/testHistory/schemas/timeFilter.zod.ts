import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const timeFilter = z.object({
  hour_h1: z.preprocess(
    (a) => parseInt(z.string().parse(a), 10),
    z.number().min(0).max(2)
  ),
  hour_h2: z.preprocess(
    (a) => parseInt(z.string().parse(a), 10),
    z.number().min(0).max(9)
  ),
  minute_m1: z.preprocess(
    (a) => parseInt(z.string().parse(a), 10),
    z.number().min(0).max(5)
  ),
  minute_m2: z.preprocess(
    (a) => parseInt(z.string().parse(a), 10),
    z.number().min(0).max(9)
  ),
  second_s1: z.preprocess(
    (a) => parseInt(z.string().parse(a), 10),
    z.number().min(0).max(5)
  ),
  second_s2: z.preprocess(
    (a) => parseInt(z.string().parse(a), 10),
    z.number().min(0).max(9)
  ),
});

export type TimeFilterData = z.infer<typeof timeFilter>;

export const timeFilterResolver = zodResolver(timeFilter);
