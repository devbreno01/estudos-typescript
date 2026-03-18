import path from "node:path";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

 export default {
   mode: 'development',
   entry: './src/webpack/index.ts',
   devtool: 'inline-source-map',
   module: {
     rules: [
       {
         test: /\.tsx?$/,
         use: 'ts-loader',
         exclude: /node_modules/,
       },
     ],
   },
   resolve: {
     extensions: [ '.tsx', '.ts', '.js' ],
   },
   output: {
     filename: 'bundle.js',
     path: path.resolve(__dirname, 'dist','assets','js'),
   },
   devtool: 'source-map',
 };
