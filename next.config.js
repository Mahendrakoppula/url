const { PHASE_DEVELOPMENT_SERVER, PHASE_PRODUCTION_BUILD } = require('next/constants');
const runtimeCaching = require("next-pwa/cache");

const withPWA = require("next-pwa")({
    disable: PHASE_DEVELOPMENT_SERVER,
    dest: "public",
    register: true,
    skipWaiting: false,
    runtimeCaching,
});

module.exports = (phase) => {

    // when started in development mode `next dev` or `npm run dev` regardless of the value of STAGING environmental variable
    const isDev = phase === PHASE_DEVELOPMENT_SERVER
    // when `next build` or `npm run build` is used
    const isProd = phase === PHASE_PRODUCTION_BUILD && process.env.STAGING !== '1'
    // when `next build` or `npm run build` is used
    const isStaging = phase === PHASE_PRODUCTION_BUILD && process.env.STAGING === '1'

    let AppURLLocal = 'http://localhost:3000/';
    let AppURLLive = 'https://app.pixaurl.com/';

    let ApiUrlLocal = 'http://localhost:3000/api/';
    let ApiUrlLive = 'https://app.pixaurl.com/api/';
    
    const env = {
        API_URL: (() => {
            if (isDev) {
                return ApiUrlLocal
            } else if (isProd) {
                return ApiUrlLive
            } else if (isStaging) {
                return ApiUrlLive
            } else {
                return 'RESTURL_SPEAKERS:not (isDev,isProd && !isStaging,isProd && isStaging)'
            }
        })(),
        APP_URL: (() => {
            if (isDev) {
                return AppURLLocal
            } else if (isProd) {
                return AppURLLive
            } else if (isStaging) {
                return AppURLLive
            } else {
                return 'RESTURL_SPEAKERS:not (isDev,isProd && !isStaging,isProd && isStaging)'
            }
        })(),
        tableDataPerPage: isDev?10:12,
        s3URL : 'https://cdn.pixaurl.com/',
        tinymce_key : 'TINY_MCE_KEY',
        mongodburl: 'mongodb+srv://mahendrakoppula09:pzkBdBjymuPM6TNb@btm-cluster0.6cqvryv.mongodb.net/25days',
        dbtblPrefix: 'pixaurl_',
        SESSION_SECRET: 's09fasd8asd98fa9as9f8',
        folderPath: __dirname,
        SITE_TITLE: 'PixaURL',
        Mandrill_key: 'MANDRILL_KEY',
        rules: {
            "@next/next/no-img-element": "off",
        },
        aws: {
            bucket: 'cdn.pixaurl.com',
            configuration: {
                accessKeyId: 'AWS_ACCESS_KEY',
                secretAccessKey: 'AWS_SECRET_ACCESS_KEY',
                region: 'AWS_REGION',
            },
        }
    }

    const nextConfig = withPWA({
        reactStrictMode: true,
        env: env,
        eslint: {
            ignoreDuringBuilds: true,
        },
        swcMinify: false,
    });

    return nextConfig;
};
