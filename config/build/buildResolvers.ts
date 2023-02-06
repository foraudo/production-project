import { BuildOptions } from './types/config';

export function buildResolvers({ paths }: BuildOptions) {
  return {
    extensions: ['.tsx', '.ts', '.js'],
    preferAbsolute: false,
    alias: {},
    modules: [paths.src, 'node_modules'],
    mainFiles: ['index'],
  };
}
