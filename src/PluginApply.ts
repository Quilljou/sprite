import { Compiler, ICompilerOptions } from './Compiler';
import { PreviewPlugin } from './plugins/PreviewPlugin';

export class PluginApply {
  process(options: ICompilerOptions, compiler: Compiler) {
    if (options.preview) {
      new PreviewPlugin().apply(compiler);
    }
  }
}
