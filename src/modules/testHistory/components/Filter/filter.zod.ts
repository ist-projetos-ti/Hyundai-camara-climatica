import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const dateValueSchema = z.object({
  initialDate: z.date().optional(),
  finalDate: z.date().optional(),
});

const timeValueSchema = z.object({
  initialTime: z.string().optional(),
  finalTime: z.string().optional(),
});

const carDetailsSchema = z.object({
  vin: z.string().optional(),
  prodDate: z.string().optional(),
  model: z.string().optional(),
  engine: z.string().optional(),
  mileage: z.string().optional(),
  color: z.string().optional(),
});

const filter = z.object({
  testName: z.string().optional(),
  date: dateValueSchema,
  time: timeValueSchema,
  carDetails: carDetailsSchema,
});

export type FilterData = z.infer<typeof filter>;

export const filterResolver = zodResolver(filter);
