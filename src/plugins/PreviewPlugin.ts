import { Compiler } from '../Compiler';
import { Plugin } from '../Plugin';

export class PreviewPlugin extends Plugin {
  apply(compiler: Compiler) {
    compiler.hooks.entryOption.tap('PreviewPlugin', () => {
      console.log('start preview');
    });
  }
}
