import { RuleSetRule } from 'webpack';

export function buildLoaders(): RuleSetRule[] {
  const typescriptLoader: RuleSetRule = {
    test: /.*\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/
  };

  const cssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      'style-loader',
      'css-loader',
      'sass-loader',
    ],
  };

  return [typescriptLoader, cssLoader];
}
