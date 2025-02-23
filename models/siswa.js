const mongoose = require('mongoose');

const siswaSchema = new mongoose.Schema({
    nis :{
        type: String,
        require: true
    },

    absen :{
        type: Number,
        require: true
    },

    nama: {
        type: String,
        require: true
    }

})

const Siswa = mongoose.model('Siswa', siswaSchema);
module.exports = Siswa;