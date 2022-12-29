module.exports = {
    arrayMongooseToObject: function (mongooses) {
        return mongooses.map((mongoose) => mongoose.toObject())
    },

    mongooseToObject: function (mongoose) {
        return mongoose ? (mongoose) => mongoose.toObject() : mongoose
    },
}
