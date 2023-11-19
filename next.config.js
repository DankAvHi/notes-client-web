/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack(config) {
        const fileLoaderRule = config.module.rules.find((rule) => rule.test?.test?.(".svg"));
        config.module.rules = [
            ...config.module.rules.filter((rule) => rule !== fileLoaderRule),
            { ...fileLoaderRule, exclude: /\.svg$/i },
            {
                ...fileLoaderRule,
                test: /\.svg$/i,
                resourceQuery: {
                    ...fileLoaderRule.resourceQuery,
                    not: [...fileLoaderRule.resourceQuery.not, /component/],
                },
            },
            { test: /\.svg$/i, issuer: /\.[jt]sx?$/, use: "@svgr/webpack", resourceQuery: /component/ },
        ];
        return config;
    },
};

module.exports = nextConfig;
