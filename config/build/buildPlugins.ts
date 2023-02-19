import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import { BuildOptions } from './types/config';

export function buildPlugins({
    paths,
    isDev,
}: BuildOptions): webpack.WebpackPluginInstance[] {
    const plugin = [
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:6].css',
            chunkFilename: 'css/[name].[contenthash:6].css',
        }),
        new HtmlWebpackPlugin({
            template: paths.html,
        }),
        new webpack.ProgressPlugin(),

        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev),
        }),
    ];

    if (isDev) {
        plugin.push(
            new webpack.HotModuleReplacementPlugin(),
            new BundleAnalyzerPlugin({ openAnalyzer: false }),
        );
    }

    return plugin;
}
