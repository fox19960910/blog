const BlogPost = require('../models/Post')

const { arrayMongooseToObject } = require('../../utils/mongoose')
class SiteController {
    // [GET] /
    index(req, res, next) {
        BlogPost.find({})
            .then((blogPost) =>
                res.render('home', {
                    blogPost: arrayMongooseToObject(blogPost),
                })
            )
            .catch(next) // catch(err => next(err))
    }

    // [GET] /search/:slug
    show(req, res) {
        res.render('search')
    }
}

module.exports = new SiteController()
