const mongoose = require ('mongoose');
const Siswa = require('./models/siswa')

mongoose.connect("mongodb://localhost:27017/elektronika")// untuk conect ke mongodb dengan nama database movieApp

//mengembalikan sebuah promise lebih ringan dari on dan once
    .then(() => { //untuk kondisi berhasil untuk koneksi mongoose
         console.log("conected") ;
     })
        .catch(err => { //untuk kondisi error
            console.log("oh no eror") ;
            console.log(err) // ini itu maksudnya nampilin apa aja errornya
         }) 


    const dataProduct = [
        {nis:'30214',absen:1 ,nama:'Arya Dwi Saputra'},
        {nis:'30215',absen:2 ,nama:'Brian Saro Totonafo Telaumbanua'},
        {nis:'30216',absen:3 ,nama:'Darya Ivan Danendra'},
        {nis:'30217',absen:4 ,nama:'Dio Muhammad Risky'},
        {nis:'30218',absen:5 ,nama:'Dio Rizky Maulana'},
        {nis:'30219',absen:6 ,nama:'Febria Lentino Cahaya P.'},
        {nis:'30220',absen:7 ,nama:'Gusti Ayu Putu Apik Maharatri Adianova'},
        {nis:'30221',absen:8 ,nama:'Gusti Ngurah Agung Prasada Kerti Yasa'},
        {nis:'30222',absen:9 ,nama:'I Gede Karya Darmawan'},
        {nis:'30223',absen:10 ,nama:'I Gede Pasek Astawa'},
        {nis:'30224',absen:11 ,nama:'I Gusti Made Putra Kepakisan'},
        {nis:'30225',absen:12 ,nama:'I Kadek Aditya Arya Putra'},
        {nis:'30226',absen:13 ,nama:'I Kadek Lingga Pranala'},
        {nis:'30227',absen:14 ,nama:'I Kadek Maha Esa Sulaksana'},
        {nis:'30228',absen:15 ,nama:'I Komang Adi Resta Putra'},
        {nis:'30229',absen:16 ,nama:'I Komang Agus Arya Sastra D.'},
        {nis:'30230',absen:17 ,nama:'I Komang Budi Yasa'},
        {nis:'30231',absen:18 ,nama:'I Komang Teguh Adi Suniantara'},
        {nis:'30232',absen:19 ,nama:'I Putu Abi Mahesa'},
        {nis:'30233',absen:20 ,nama:'I Putu Alit Sudhagama'},
        {nis:'30234',absen:21 ,nama:'I Putu Ferdy Mahendra'},
        {nis:'30235',absen:22 ,nama:'I Wayan Amerta Bhawana'},
        {nis:'30236',absen:23 ,nama:'I Wayan Januari Putra'},
        {nis:'30237',absen:24 ,nama:'Ida Bagus Made Pradna Wiguna'},
        {nis:'30238',absen:25 ,nama:'Kadek Bagus Sutha Yoga'},
        {nis:'30239',absen:26 ,nama:'Lexine Abdillah Harta Poetra'},
        {nis:'30240',absen:27 ,nama:'M. Adam Dwi Permana'},
        {nis:'30241',absen:28 ,nama:'Muhammad Artur Hidayah Risky'},
        {nis:'30242',absen:29 ,nama:'Muhammad Fikri Ardiansah'},
        {nis:'30243',absen:30 ,nama:'Ni Ketut Fani Raga Padmi'},
        {nis:'30244',absen:31 ,nama:'Ni Luh Komang Ayu Wulandari'},
        {nis:'30245',absen:32 ,nama:'Ni Putu Surya Dewi'},
        {nis:'29285',absen:33 ,nama:'I Kadek Purya Ditya Suarnaputra'}

    ]

    Siswa.insertMany(dataProduct)

    .then(p =>{
        console.log(p) //  untuk menampilkan semua model yang sudah di masukkan tadi menggunakan array
    })

    .catch(er=>{
        console.log(er)
    })
