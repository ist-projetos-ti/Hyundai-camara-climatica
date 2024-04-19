import { defineConfig } from 'vite';
// eslint-disable-next-line import/no-extraneous-dependencies
import { ValidateEnv } from '@julr/vite-plugin-validate-env';
import react from '@vitejs/plugin-react-swc';
// eslint-disable-next-line import/no-extraneous-dependencies
import svgr from 'vite-plugin-svgr';
import tsConfigPaths from 'vite-tsconfig-paths';

import * as path from 'path';
import { z } from 'zod';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsConfigPaths(),
    ValidateEnv({
      validator: 'zod',
      schema: {
        VITE_API_URL: z.string().url(),
      },
    }),
    svgr({
      include: '**/*.svg?react',
    }),
  ],
  resolve: {
    alias: [
      { find: '@assets', replacement: path.resolve(__dirname, './src/assets') },
      {
        find: '@components',
        replacement: path.resolve(__dirname, './src/components'),
      },
      { find: '@hooks', replacement: path.resolve(__dirname, './src/hooks') },
      {
        find: '@interfaces',
        replacement: path.resolve(__dirname, './src/interfaces'),
      },
      {
        find: '@layout',
        replacement: path.resolve(__dirname, './src/layout'),
      },
      {
        find: '@modules',
        replacement: path.resolve(__dirname, './src/modules'),
      },
      {
        find: '@routes',
        replacement: path.resolve(__dirname, './src/routes'),
      },
      {
        find: '@services',
        replacement: path.resolve(__dirname, './src/services'),
      },
      { find: '@style', replacement: path.resolve(__dirname, './src/style') },
      { find: '@utils', replacement: path.resolve(__dirname, './src/utils') },
      { find: '@errors', replacement: path.resolve(__dirname, './src/errors') },
    ],
  },
});
