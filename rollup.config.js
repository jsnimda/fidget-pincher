import typescript from '@rollup/plugin-typescript';

export default {
  input: 'src/index.ts',
  output: {
    name: 'FidgetPincher',
    dir: 'dist',
    format: 'umd'
  },
  plugins: [typescript()]
};