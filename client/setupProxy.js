const proxy = require('http-proxy-middleware')

module.exports = function(setupProxy){
    setupProxy.use(proxy('/auth/callback',
        {'target': 'http://localhost:9000'}
        ))
    setupProxy.use(proxy('/api',
        {'target':'http://localhost:9000'}
        ))
}