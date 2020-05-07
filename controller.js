const response = require('./res');
const connection = require('./koneksi')

exports.index = (req,res) => {
    response.ok('REST API running',res)
}

exports.tampilsemuamahasiswa = (req,res) => {
    connection.query('SELECT * FROM mahasiswa', (error,results,fields) => {
        if (error) {
            connection.log(error)
        } else {
            response.ok(rows,results)
        }
    })
}