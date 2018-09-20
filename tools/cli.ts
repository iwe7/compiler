import { Configuration } from 'webpack';
import webpack = require('webpack');
import { resolve } from 'path';
const htmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
import UglifyJsPlugin = require('uglifyjs-webpack-plugin');
import { LicenseWebpackPlugin } from 'license-webpack-plugin';
import WebpackDevServer = require('webpack-dev-server');
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
    } else {
        plugins.push(new webpack.HotModuleReplacementPlugin())
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
    if (options.mode === 'development') {
        return () => new WebpackDevServer(webpack(cfg), {
            hot: true,
            open: true,
            inline: true
        }).listen(4200)
    } else {
        const handler = (err: Error, stats: webpack.Stats) => {
            if (err) {
                console.error(err);
            }
            if (stats.hasErrors) {
                console.error(`${stats.toJson().errors.join('\n')}`)
            }
            console.log('webpack run');
        };
        return () => webpack(cfg).run(handler);
    }
}

export function cli(isDev: boolean = true) {
    compiler({
        entry: {
            main: isDev ? [
                "webpack-dev-server/client?http://localhost:4200",
                "webpack/hot/dev-server",
                resolve(root, "src/index.tsx")
            ] : resolve(root, "src/index.tsx")
        },
        mode: isDev ? "development" : "production"
    })()
}
