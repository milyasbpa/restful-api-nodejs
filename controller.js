const response = require('./res');
const connection = require('./koneksi')

exports.index = (req,res) => {
    response.ok('REST API running',res)
}

exports.tampilsemuamahasiswa = (req,res) => {
    connection.query('SELECT * FROM mahasiswa', (error,results,fields) => {
        if (error) {
            console.log(error)
        } else {
            response.ok(results,res)
        }
    })
}

exports.tampilberdasarkanid = (req,res) => {
    let id = req.params.id;
    connection.query('SELECT * FROM mahasiswa WHERE id_mahasiswa = ?', [id], (error,results,fields) => {
        if (error) {
            console.log(error)
        } else {
            response.ok(results,res)
        }
    })
}

exports.tambahmahasiswa = (req,res) => {
    let nim = req.body.nim;
    let nama = req.body.nama;
    let jurusan = req.body.jurusan;
    connection.query('INSERT INTO mahasiswa (nim,nama,jurusan) VALUES(?,?,?)', [nim,nama,jurusan], (error,results,fields) => {
        if (error) {
            console.log(error)
        } else {
            response.ok("Data berhasil ditambah",res)
        }
    })
}

exports.updatemahasiswa = (req,res) => {
    let id = req.body.id_mahasiswa;
    let nim = req.body.nim;
    let nama = req.body.nama;
    let jurusan = req.body.jurusan;
    connection.query('UPDATE mahasiswa SET nim=?, nama=? ,jurusan=? WHERE id_mahasiswa = ?', [nim,nama,jurusan,id], (error,results,fields) => {
        if (error) {
            console.log(error)
        } else {
            response.ok("Sukses Ubah Data",res)
        }
    })
}

exports.deletemahasiswa = (req,res) => {
    let id = req.body.id_mahasiswa;
    connection.query('DELETE FROM mahasiswa WHERE id_mahasiswa = ?', [id], (error,results,fields) => {
        if (error) {
            console.log(error)
        } else {
            response.ok("Sukses Hapus Data",res)
        }
    })
}