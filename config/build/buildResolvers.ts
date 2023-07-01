import { ResolveOptions } from 'webpack';

export function buildResolvers(): ResolveOptions {
  return {
    extensions: ['.js', '.ts', '.tsx'],
  };
}
