import { Configuration as WebpackDevServerConfiguration } from 'webpack-dev-server';
import { BuildOptions } from './types/config';

export function buildDevServer({ port, paths }: BuildOptions): WebpackDevServerConfiguration {
  return {
    port,
    open: true,
    historyApiFallback: {
      rewrites: [{ from: /.*\.html$/, to: '/index.html' }],
    },
    static: {
      directory: paths.publicDirectory,
    },
  };
}
