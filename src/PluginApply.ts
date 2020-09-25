import { Compiler, ICompilerOptions } from './Compiler';
import { Iplugin } from './Plugin';
import { PreviewPlugin } from './plugins/PreviewPlugin';

export class PluginApply {
  process(options: ICompilerOptions, compiler: Compiler) {
    this.applyCustomPlugin(options, compiler);
    this.applyBuiltInPlugins(options, compiler);
  }

  private applyCustomPlugin(options: ICompilerOptions, compiler: Compiler) {
    if (typeof options.plugins == 'string') {
      const plugins = options.plugins.split(',').map(name => {
        return require(`sprite-plugin-${name}`);
      });

      for (const plugin of plugins) {
        if (typeof plugin == 'function') {
          plugin.call(compiler, compiler);
        } else {
          const p = new plugin();
          p.apply(compiler);
        }
      }
    }
  }

  private applyBuiltInPlugins(options: ICompilerOptions, compiler: Compiler) {
    if (options.preview) {
      new PreviewPlugin().apply(compiler);
    }
  }
}
