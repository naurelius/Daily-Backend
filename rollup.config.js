import sucrase from '@rollup/plugin-sucrase';
import resolve from '@rollup/plugin-node-resolve';

export default {
    input: './server.ts',
    output: {
        file: './dist/server.bundle.js',
        format: 'cjs'
    },
    plugins: [
        resolve({
            extensions: ['.js', '.ts'],
            dedupe: ['express']
        }),
        sucrase({
            exclude: ['node_modules/**'],
            transforms: ['typescript']
        })
    ]
};


