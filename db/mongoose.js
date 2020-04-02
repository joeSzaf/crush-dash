const mongoose = require('mongoose')

const mongodbUrl = 'mongodb://127.0.0.1:27017/crush-dash-api'

mongoose.connect(mongodbUrl, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
})
