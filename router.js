module.exports = (app) => {
    const jsonku = require('./controller');
    app.route('/')
    .get(jsonku.index);

    app.route('/tampil')
    .get(jsonku.tampilsemuamahasiswa);

    app.route('/tampil/:id')
    .get(jsonku.tampilberdasarkanid);
    
    app.route('/tambah')
    .post(jsonku.tambahmahasiswa);

    app.route('/update')
    .put(jsonku.updatemahasiswa);

    app.route('/delete')
    .delete(jsonku.deletemahasiswa);
}

