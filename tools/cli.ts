import { Configuration } from 'webpack';
import webpack = require('webpack');
import { resolve } from 'path';
const htmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
import UglifyJsPlugin = require('uglifyjs-webpack-plugin');
import { LicenseWebpackPlugin } from 'license-webpack-plugin';

const root = process.cwd();
export interface CompilerOptions {
    entry?: any;
    mode: "production" | "development"
}
export function compiler(options?: CompilerOptions) {
    const plugins = [
        new htmlWebpackPlugin({
            filename: 'index.html',
            template: resolve(root, 'src/index.html')
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        })
    ];
    if (options.mode === 'production') {
        plugins.push(new LicenseWebpackPlugin({
            pattern: /.*/,
            suppressErrors: true,
            perChunkOutput: false,
            outputFilename: `3rdpartylicenses.txt`
        }))
    }
    const minimizer = [];
    if (options.mode === 'production') {
        minimizer.push(new UglifyJsPlugin({
            uglifyOptions: {
                warnings: false,
                mangle: true,
                output: {
                    ascii_only: true,
                    comments: false,
                    webkit: true,
                },
                safari10: true
            }
        }))
    }

    const cfg: Configuration = {
        entry: options.entry,
        output: {
            path: resolve(root, 'publish'),
            filename: '[name].js'
        },
        mode: options.mode,
        optimization: {
            removeEmptyChunks: true,
            removeAvailableModules: true,
            minimize: true,
            minimizer: [
                new webpack.HashedModuleIdsPlugin(),
                ...minimizer
            ]
        },
        target: "web",
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    exclude: /(node_modules|bower_components)/,
                    use: [
                        {
                            loader: 'babel-loader',
                            options: {
                                presets: ['@babel/preset-env']
                            }
                        },
                        'ts-loader'
                    ]
                },
                {
                    test: /\.scss$/,
                    use: [
                        "style-loader",
                        "css-loader",
                        "sass-loader"
                    ]
                }
            ]
        },
        externals: [],
        resolve: {
            modules: ["node_modules"],
            extensions: ['.ts', ".tsx", '.js', '.json', '.scss'],
            alias: {}
        },
        devtool: "source-map",
        plugins: [
            ...plugins
        ]
    };
    if (options.mode === 'production') {
        cfg.devtool = false;
    }
    const compiler = webpack(cfg);
    return compiler;
}

export function cli(watch: boolean = false, isDev: boolean = true) {
    const comp = compiler({
        entry: {
            main: resolve(root, "src/index.tsx")
        },
        mode: isDev ? "development" : "production"
    })
    const handler = (err: Error, stats: webpack.Stats) => {
        if (err) {
            console.error(err);
        }
        if (stats.hasErrors) {
            console.error(`${stats.toJson().errors.join('\n\n\n\n')}`)
        }
        console.log('webpack run');
    };
    if (!watch) {
        comp.run(handler);
    } else {
        comp.watch({}, handler);
    }
}
