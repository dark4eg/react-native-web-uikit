var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var setUikitWebpackSetting = function (config) {
    var moduleRulesChanges = {
        rules: config.module.rules.concat([
            // https://github.com/react-native-web-community/react-native-web-webview#getting-started
            {
                test: /postMock.html$/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: "[name].[ext]",
                    },
                },
            },
            {
                test: /\.(ts|tsx)$/,
                use: [
                    {
                        loader: require.resolve("awesome-typescript-loader"),
                        options: {
                            transpileOnly: true,
                            useCache: true,
                        },
                    },
                    {
                        loader: require.resolve("react-docgen-typescript-loader"),
                    },
                ],
            },
        ]),
    };
    var resolveChanges = {
        extensions: config.resolve.extensions.concat([".ts", ".tsx"]),
        alias: {
            "react-native": "react-native-web",
            "react-native-linear-gradient": "react-native-web-linear-gradient",
            "react-native-svg": "react-native-svg-web",
            "react-native-webview": "react-native-web-webview",
            "react-native-modal": "modal-react-native-web",
            "react-native-shimmer-placeholder": "react-content-loader",
            "@storybook/react-native": "@storybook/react",
        },
    };
    if (config) {
        return __assign({}, config, { module: config.module ? __assign({}, config.module, moduleRulesChanges) : moduleRulesChanges, resolve: config.resolve ? __assign({}, config.resolve, resolveChanges) : resolveChanges });
    }
    return {
        module: moduleRulesChanges,
        resolve: resolveChanges,
    };
};
export default setUikitWebpackSetting;
