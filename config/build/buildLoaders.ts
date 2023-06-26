import { RuleSetRule } from 'webpack';

export function buildLoaders(): RuleSetRule[] {
  const typescriptLoader: RuleSetRule = {
    test: /.*\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/
  };
  return [typescriptLoader];
}
