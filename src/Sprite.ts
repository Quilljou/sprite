import { Compiler, ICompilerOptions } from './Compiler';
import { SpriteOptionsDefaulter } from './SpriteOptionsDefaulter';
import { PluginApply } from './PluginApply';

export const sprite = (op: Partial<ICompilerOptions>, callback?: Function) => {
  // Complete Options
  const options = new SpriteOptionsDefaulter().process(op);

  // Initialize Compiler
  const compiler = new Compiler(options);

  // Register Custom Plugins
  if (Array.isArray(options.plugins)) {
    for (const plugin of options.plugins) {
      if (typeof plugin == 'function') {
        plugin.call(compiler, compiler);
      } else {
        plugin.apply(compiler);
      }
    }
  }

  // Apply plugins
  new PluginApply().process(options, compiler);

  compiler.run(callback!);
};
