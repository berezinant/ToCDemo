type BuildMode = 'production' | 'development';

export interface BuildPaths {
  entryPoint: string,
  outputDirectory: string,
  htmlFile: string,
}

export interface BuildEnv {
  port: number,
  mode: BuildMode,
}

export interface BuildOptions {
  mode: BuildMode;
  paths: BuildPaths;
  isDev: boolean;
  port: number;
}
