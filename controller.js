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
            response.ok(results,res)
        }
    })
}

exports.tampilberdasarkanid = (req,res) => {
    let id = req.params.id;
    connection.query('SELECT * FROM mahasiswa WHERE id_mahasiswa = ?', [id], (error,results,fields) => {
        if (error) {
            connection.log(error)
        } else {
            response.ok(results,res)
        }
    })
}

exports.tambahmahasiswa = (req,res) => {
    let nim = req.body.nim;
    let nama = req.body.nama;
    let jurusan = req.body.jurusan;
    connection.query('INSERT INTO mahasiswa (nim,nama,jurusan) = ?', [nim,nama,jurusan], (error,results,fields) => {
        if (error) {
            connection.log(error)
        } else {
            response.ok("Data berhasil ditambah",res)
        }
    })
}

