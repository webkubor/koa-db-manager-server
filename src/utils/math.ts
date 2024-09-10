import BigNumber from 'bignumber.js';

// 定义返回类型选项
type OutputType = 'string' | 'number';

// 加法函数
export function add(a: number | string, b: number | string, outputType: OutputType = 'string'): number | string {
  const result = new BigNumber(a).plus(new BigNumber(b));
  return outputType === 'number' ? result.toNumber() : result.toString();
}

// 减法函数
export function subtract(a: number | string, b: number | string, outputType: OutputType = 'string'): number | string {
  const result = new BigNumber(a).minus(new BigNumber(b));
  return outputType === 'number' ? result.toNumber() : result.toString();
}

// 乘法函数
export function multiply(a: number | string, b: number | string, outputType: OutputType = 'string'): number | string {
  const result = new BigNumber(a).times(new BigNumber(b));
  return outputType === 'number' ? result.toNumber() : result.toString();
}

// 除法函数
export function divide(a: number | string, b: number | string, outputType: OutputType = 'string'): number | string {
  const result = new BigNumber(a).div(new BigNumber(b));
  return outputType === 'number' ? result.toNumber() : result.toString();
}
