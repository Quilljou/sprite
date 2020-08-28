import { Compiler } from './Compiler';

export abstract class Plugin {
  abstract apply(compiler: Compiler): void;
}

type IpluginFunction = (compiler: Compiler) => void;

export type Iplugin = Plugin & IpluginFunction;
