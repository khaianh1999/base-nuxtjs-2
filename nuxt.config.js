export default {
    router: {
        middleware: ["auth"],
    },
    server: {
        host: "0.0.0.0",
        port: 8009,
    },
    ssr: true,
    target: "server",
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: "Vui học",
        meta: [
            { charset: "utf-8" },
            {
                name: "viewport",
                content: "width=device-width, initial-scale=1",
            },
            { hid: "description", name: "description", content: "" },
            { name: "format-detection", content: "telephone=no" },
        ],
        link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: ["@/assets/css/main.css"],

    styleResources: {
        scss: ["@/assets/scss/app.scss", "@/assets/scss/mixins.scss"],
        hoistUseStatements: true,
    },

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        "~/plugins/repositories.js",
        "plugins/i18n.js",
        { src: "~/plugins/carousel.js", ssr: false },
        { src: "~/plugins/vue-validate.js", mode: "client" },
        { src: "~/plugins/vue-otp-input.js", mode: "client" },
        { src: "~plugins/vs-pagination", ssr: false },
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/eslint
        "@nuxtjs/eslint-module",
        "@nuxtjs/style-resources",
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        "@nuxtjs/dotenv",
        "@nuxtjs/moment",
        // '@nuxtjs/firebase',
        "@nuxtjs/sentry",
        // https://go.nuxtjs.dev/axios
        "@nuxtjs/axios",
        // https://go.nuxtjs.dev/pwa
        "@nuxtjs/pwa",
        // Simple usage
        "cookie-universal-nuxt",
    ],

    sentry: {
        dsn: process.env.CONFIG_DSN_SENTRY, // Enter your project's DSN.
        // Additional Module Options.
        config: {
            // Optional Sentry SDK configuration.
            // Those options are shared by both the Browser and the Server instances.
            // Browser-only and Server-only options should go
            // into `clientConfig` and `serverConfig` objects respectively.
        },
    },
    // firebase : {
    //   config: {
    //     // REQUIRED: Official config for firebase.initializeApp(config):
    //     apiKey: process.env.CONFIG_FIREBASE_APIKEY,
    //     authDomain: process.env.CONFIG_FIREBASE_AUTHDOMAIN,
    //     projectId: process.env.CONFIG_FIREBASE_PROJECTID,
    //     storageBucket: process.env.CONFIG_FIREBASE_STORAGEBUCKET,
    //     messagingSenderId: process.env.CONFIG_FIREBASE_MESSAGINGSENDERID,
    //     appId: process.env.CONFIG_FIREBASE_APPID,
    //     measurementId: process.env.CONFIG_FIREBASE_MEASUREMENTID
    //   },
    //   services: {
    //     auth: true,
    //     firestore: true,
    //     functions: true,
    //     storage: true,
    //     database: true,
    //     messaging: true,
    //     performance: true,
    //     analytics: true,
    //     remoteConfig: true
    //   }

    // },

    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {
        // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
        baseURL: "/",
    },

    // PWA module configuration: https://go.nuxtjs.dev/pwa
    pwa: {
        manifest: {
            lang: "en",
        },
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        postcss: {
            postcssOptions: {
                plugins: {
                    tailwindcss: {},
                    autoprefixer: {},
                },
            },
        },
    },
    loading: "~/components/LoadingPage.vue",
};
