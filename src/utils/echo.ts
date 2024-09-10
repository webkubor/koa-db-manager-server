function colorLog(text: string, color: string): void {
    const colors = {
      'reset': '\x1b[0m',
      'bright': '\x1b[1m',
      'dim': '\x1b[2m',
      'underscore': '\x1b[4m',
      'blink': '\x1b[5m',
      'reverse': '\x1b[7m',
      'hidden': '\x1b[8m',
      'black': '\x1b[30m',
      'red': '\x1b[31m',
      'green': '\x1b[32m',
      'yellow': '\x1b[33m',
      'blue': '\x1b[34m',
      'magenta': '\x1b[35m',
      'cyan': '\x1b[36m',
      'white': '\x1b[37m',
      'bgBlack': '\x1b[40m',
      'bgRed': '\x1b[41m',
      'bgGreen': '\x1b[42m',
      'bgYellow': '\x1b[43m',
      'bgBlue': '\x1b[44m',
      'bgMagenta': '\x1b[45m',
      'bgCyan': '\x1b[46m',
      'bgWhite': '\x1b[47m'
    };
  
    if (color === undefined) {
      color = 'black';
    }
  
    if (!colors[color]) {
      throw new Error(`Invalid color: ${color}`);
    }
  
    console.log(`${colors[color]}${text}${colors['reset']}`);
  }


  export const Echo = {
    reset: (text: string) => colorLog(text, 'reset'),
    bright: (text: string) => colorLog(text, 'bright'),
    dim: (text: string) => colorLog(text, 'dim'),
    underscore: (text: string) => colorLog(text, 'underscore'),
    blink: (text: string) => colorLog(text, 'blink'),
    reverse: (text: string) => colorLog(text, 'reverse'),
    hidden: (text: string) => colorLog(text, 'hidden'),
    black: (text: string) => colorLog(text, 'black'),
    red: (text: string) => colorLog(text, 'red'),
    green: (text: string) => colorLog(text, 'green'),
    yellow: (text: string) => colorLog(text, 'yellow'),
    blue: (text: string) => colorLog(text, 'blue'),
    magenta: (text: string) => colorLog(text, 'magenta'),
    cyan: (text: string) => colorLog(text, 'cyan'),
    white: (text: string) => colorLog(text, 'white'),
    bgBlack: (text: string) => colorLog(text, 'bgBlack'),
    bgRed: (text: string) => colorLog(text, 'bgRed'),
    bgGreen: (text: string) => colorLog(text, 'bgGreen'),
    bgYellow: (text: string) => colorLog(text, 'bgYellow'),
    bgBlue: (text: string) => colorLog(text, 'bgBlue'),
    bgMagenta: (text: string) => colorLog(text, 'bgMagenta'),
    bgCyan: (text: string) => colorLog(text, 'bgCyan'),
    bgWhite: (text: string) => colorLog(text, 'bgWhite')
    };
    
    