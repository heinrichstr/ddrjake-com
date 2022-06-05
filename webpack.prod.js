const webpack = require("webpack");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const TerserPlugin = require('terser-webpack-plugin');
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
    .BundleAnalyzerPlugin;

module.exports = merge(common, {
    module: {
        rules: [
            {
                test: /\.(jpg|png|gif)$/,
                loader: "image-webpack-loader",
                enforce: "pre",
                options: {
                    mozjpeg: {
                        progressive: true,
                        quality: 75
                    }
                }
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify("production")
            }
        }),
        //new BundleAnalyzerPlugin(),
        new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)
    ],
    optimization: {
        minimizer: [new TerserPlugin()],
    }
});
