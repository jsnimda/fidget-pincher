import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/bundle.js',
      name: 'FidgetPincher',
      format: 'umd'
    },
    {
      file: 'dist/bundle.min.js',
      name: 'FidgetPincher',
      format: 'umd',
      plugins: [terser()]
    }
  ],
  plugins: [typescript()]
};