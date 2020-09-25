import { Compiler, ICompilerOptions } from './Compiler';
import { SpriteOptionsDefaulter } from './SpriteOptionsDefaulter';
import { PluginApply } from './PluginApply';

export const sprite = (op: Partial<ICompilerOptions>, callback?: Function) => {
  // Complete Options
  const options = new SpriteOptionsDefaulter().process(op);

  // Initialize Compiler
  const compiler = new Compiler(options);

  // Apply plugins
  new PluginApply().process(options, compiler);

  if (callback) {
    compiler.run(callback);
  }
  return compiler;
};
