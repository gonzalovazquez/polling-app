module.exports = {
    entry: "./app-client.js",
    output: {
        filename: "public/bundle.js"
    },
    module: {
        loaders: [
            {
                exclude: /(node_modules|app-server.js)/,
                test: /\.jsx?$/,
                loader: 'babel'
            }
        ]
    }
};
