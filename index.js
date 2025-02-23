const express = require ('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const methodOverride = require('method-override')



const Siswa = require ('./models/siswa');
mongoose.connect("mongodb://localhost:27017/elektronika")// untuk conect ke mongodb dengan nama database movieApp

//mengembalikan sebuah promise lebih ringan dari on dan once
    .then(() => { //untuk kondisi berhasil 
         console.log("conected") ;
     })
        .catch(err => { //untuk kondisi error
            console.log("oh no eror") ;
            console.log(err) // ini itu maksudnya nampilin apa aja errornya
         })


app.set('views' , path.join(__dirname,'views'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')));


app.get('/siswa', async (req,res)=>{ // index
    const siswas = await Siswa.find({})
    res.render('siswa/index', { siswas })
})

app.get('/siswa/add', (req,res)=>{ // tambahin
    res.render('siswa/add')
})

app.post('/siswa', async (req, res)=>{ // tambahin
    const {nama, absen, nis} = req.body;
    const newSiswa = new Siswa ({nama, absen, nis});
    await newSiswa.save();
    res.redirect('/siswa');
})

app.get('/siswa/:id', async (req, res) =>{ //detail 
    const{id}= req.params;
    const siswas = await Siswa.findById(id);
    res.render('siswa/show', {siswas})
})

app.get('/siswa/:id/edit', async (req, res)=>{
    const {id} = req.params;
    const siswas = await Siswa.findById(id);
    res.render('siswa/edit', {siswas})
})

app.put('/siswa/:id', async (req, res) =>{
    const {id}= req.params;
    const siswas= await Siswa.findByIdAndUpdate(id, req.body, {runValidators:true, new:true});
    console.log(req.body);
    res.redirect(`/siswa/${siswas._id}`)
})

app.delete('/siswa/:id', async(req, res) =>{
    const {id} = req.params;
    const deleteSiswa = await Siswa.findByIdAndDelete(id);
    res.redirect('/siswa');
})

app.listen(3000, ()=>{
    console.log('okey in port 3000')
})

