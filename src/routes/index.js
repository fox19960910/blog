const blogRouter = require('../routes/blog.router')
const siteRouter = require('../routes/site.router')
function route(app) {
    app.use('/blog', blogRouter)
    app.use('/', siteRouter)
}

module.exports = route
