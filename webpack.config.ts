import path from 'path';
import { Configuration } from 'webpack';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { BuildEnv, BuildPaths } from './config/build/types/config';

export default function (env: BuildEnv): Configuration {
  const paths: BuildPaths = {
    entryPoint: path.resolve(__dirname, 'src', 'index.ts'),
    outputDirectory: path.resolve(__dirname, 'build'),
    htmlFile: path.resolve(__dirname, 'public', 'index.html'),
  };

  const port = env.port || 3000;
  const mode = env.mode || 'development';
  const isDev = mode === 'development';
  return buildWebpackConfig({
    mode,
    paths,
    port,
    isDev,
  });
};
