import { BuildOptions } from './types/config';
import { Configuration as WebpackDevServerConfiguration } from 'webpack-dev-server';

export function buildDevServer({ port }: BuildOptions): WebpackDevServerConfiguration {
  return {
    port,
    open: true,
  };
}
