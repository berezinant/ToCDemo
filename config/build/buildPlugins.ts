import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';
import webpack, { WebpackPluginInstance } from 'webpack';
import { BuildOptions } from './types/config';

export function buildPlugins({ paths }: BuildOptions): WebpackPluginInstance[] {
  return [
    new HtmlWebpackPlugin({ template: paths.htmlFile }),
    new webpack.ProgressPlugin(),
  ];
}
