
const devServerProperties = {
    entry: {
        vendor: './src/vendor.js',
        app: './src/index.js',
    },

    env: 'development',

    proxy: {
        '/user': {
            target: 'http://kei890.iptime.org:8080/school/',
            secure: false
            //changeOrigin: true
        }
        
    }
}

module.exports = devServerProperties;