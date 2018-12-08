
const devServerProperties = {
    entry: {
        vendor: './src/vendor.js',
        app: './src/index.js',
    },

    env: 'development',

    proxy: {
        '/bid': {
            target: 'httep://localhost:8080',
            secure: false,
        },
        '/user': {
            target: 'httep://localhost:8080',
            secure: false,
        },
        '/item': {
            target: 'httep://localhost:8080',
            secure: false,
        }
    }
}

module.exports = devServerProperties;