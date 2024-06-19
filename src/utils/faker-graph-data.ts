/* eslint-disable import/no-extraneous-dependencies */
import { faker } from '@faker-js/faker';
import { format } from 'date-fns';

export const graphData = Array.from({ length: 50 }).map(() => ({
  id: faker.number.int({ min: 5, max: 10 }),
  temp1: faker.number.int({ min: 0, max: 5 }),
  temp2: faker.number.int({ min: 10, max: 15 }),
  humity1: faker.number.int({ min: 18, max: 20 }),
  humity2: faker.number.int({ min: 5, max: 16 }),
  time: format(
    faker.date.between({
      from: '2024-06-01T01:00:00.000Z',
      to: '2024-06-01T23:59:59.000Z',
    }),
    'hh:mm:ss'
  ),
}));
