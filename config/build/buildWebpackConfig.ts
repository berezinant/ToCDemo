import webpack from 'webpack';
import { buildDevServer } from './buildDevServer';
import { buildLoaders } from './buildLoaders';
import { buildPlugins } from './buildPlugins';
import { buildResolvers } from './buildResolvers';
import { BuildOptions } from './types/config';

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
  const { isDev, mode, paths } = options;
  return {
    mode,
    entry: paths.entryPoint,
    output: {
      filename: '[name].[hash].js',
      path: paths.outputDirectory,
      clean: true
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(),
    },
    resolve: buildResolvers(),
    devtool: isDev ? 'inline-source-map' : undefined,
    devServer: isDev ? buildDevServer(options) : undefined,
  };
}

