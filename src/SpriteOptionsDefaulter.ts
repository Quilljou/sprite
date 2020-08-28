import { ICompilerOptions } from './Compiler';

export class SpriteOptionsDefaulter {
  process(op: Partial<ICompilerOptions>): ICompilerOptions {
    return {} as ICompilerOptions;
  }
}
