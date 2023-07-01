import { Configuration as WebpackDevServerConfiguration } from 'webpack-dev-server';
import { BuildOptions } from './types/config';

export function buildDevServer({ port }: BuildOptions): WebpackDevServerConfiguration {
  return {
    port,
    open: true,
    historyApiFallback: true,
  };
}
