const response = require('./res');
const connection = require('./koneksi')

exports.index = (req,res) => {
    response.ok('REST API running',res)
}