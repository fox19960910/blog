const { default: mongoose } = require('mongoose')
mongoose.set('strictQuery', true)
async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/code_blog_dev', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log('connect successfully !!!')
    } catch (err) {
        console.log('connect failure !!!')
    }
}
module.exports = { connect }
