const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dataSchema = new Schema({
    user: {
        type: String,
        // required: true
    },
    pass: {
        type: String,
        // required: true
    },
    utube: {
        type: Array,
    },
    recipe: {
        type: String
    },
    ingred: {
        type: Array
    },
    method: {
        type: String
    }
}, { timestamps: true })

const Data = mongoose.model('Data', dataSchema);

module.exports = Data;