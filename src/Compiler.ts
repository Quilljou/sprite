import { AsyncSeriesHook } from 'tapable';
import { Iplugin } from './Plugin';

export interface ICompilerOptions {
  input: string;
  output: string;
  animationDuration: number;
  frameDuration: number;
  preview: boolean;
  algorithm: 'binary-tree' | 'top-down' | 'left-right' | 'diagonal' | 'alt-diagonal';
  plugins: Iplugin[];
  minify: boolean;
  debug: boolean;
}

export class Compiler {
  hooks = {
    entryOption: new AsyncSeriesHook(['Compiler']),
    beforeRun: new AsyncSeriesHook(['Compiler']),
    run: new AsyncSeriesHook(['Compiler']),
  };
  options: ICompilerOptions;
  constructor(options: ICompilerOptions, callback?: Function) {
    this.options = options;
    if (callback) {
      this.run(callback);
      return this;
    }
    return this;
  }

  async run(callback: Function) {
    await this.hooks.beforeRun.promise();
    await this.hooks.run.promise();
  }
}
