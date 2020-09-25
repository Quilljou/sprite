import minimist from 'minimist';
import { sprite } from './sprite';
import { readPackage } from './utils/ReadPackage';

export default class Cli {
  run() {
    const argv = minimist(process.argv.slice(2), {
      alias: {
        version: ['v'],
        help: ['h'],
        debug: ['d'],
      },
    });
    // console.log(argv);
    const path = argv._[0];

    if (argv.v) {
      this.runVersion();
    } else if (!path || argv.h) {
      this.runHelp();
    } else {
      const options = {
        input: path,
        ...argv,
      };

      try {
        sprite(options, function(err: Error) {
          console.error(err);
        });
      } catch (error) {
        console.error(error);
        process.exit(1);
      }
    }
  }

  runVersion() {
    console.log('\n🎨  Sprite v%s\n', readPackage('version'));
    console.log('For more information, visit %s\n', readPackage('repository.url'));
  }

  runHelp() {
    console.log(' ');
    console.log('Usage: sprite <InputPath> [options]');
    console.log(' ');
    console.log('Options:');
    console.log('  -v, --version       output the version number');
    console.log('  -h, --help          output usage information');
    console.log('  -d, --debug         print debug information');
    this.runVersion();
  }
}
