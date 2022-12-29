class BlogController {
    // [GET] /blog/:slug
    show(req, res) {
        res.render('blog-detail')
    }
}

module.exports = new BlogController()
