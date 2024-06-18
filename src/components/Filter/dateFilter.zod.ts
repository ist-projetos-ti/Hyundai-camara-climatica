import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const filter = z.object({
  testName: z.string(),
});

export type FilterData = z.infer<typeof filter>;

export const filterResolver = zodResolver(filter);
