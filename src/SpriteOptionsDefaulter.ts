import { ICompilerOptions } from './Compiler';

export class SpriteOptionsDefaulter {
  process(options: Partial<ICompilerOptions>): ICompilerOptions {
    return options as ICompilerOptions;
  }
}
