const BlogPost = require('../models/Post')
class SiteController {
    // [GET] /
    index(req, res) {
        BlogPost.find({}, function (err, blogPost) {
            if (!err) {
                res.json(blogPost)
                return
            }
            res.status(400).json({ err: 'ERORR!!!' })
        })
        // res.render("home");
    }

    // [GET] /search/:slug
    show(req, res) {
        res.render('search')
    }
}

module.exports = new SiteController()
