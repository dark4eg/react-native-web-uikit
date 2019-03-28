module.exports = async ({ config }) => {
    const moduleRulesChanges = {
        rules: [
            ...config.module.rules,
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
                ]
            }
        ]
    };
    const resolveChanges = {
        extensions: [...config.resolve.extensions, '.ts', '.tsx'],
        alias: {
            "react-native": "react-native-web",
            "react-native-linear-gradient": "react-native-web-linear-gradient",
            "react-native-svg": "react-native-svg-web",
            "@storybook/react-native": "@storybook/react",
        }
    };
    return {
        ...config,
        module: { ...config.module, ...moduleRulesChanges },
        resolve: { ...config.resolve, ...resolveChanges },
    };
};