const express= require('express');
const {engine} = require('express-handlebars');
const mysql = require('mysql2')
const bodyParser = require('body-parser')
const Post = require('./models/Post')
const multer = require('multer')
const flash = require('connect-flash')
const session = require('express-session')
const path = require('path')
const fs = require('fs')

const app = express();

//configurando o express-handlebars
app.engine('handlebars', engine({defaultLayout:'main'}));
app.set('view engine', 'handlebars');
app.set('views', './views');

//configurando o body-parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/images', express.static('./images'))

app.use(session({
    secret:'cursodenode',
    resave: true,
    saveUninitialized: true
}))

app.use(flash())

app.use((req, res, next)=>{
    res.locals.success_msg = req.flash('success_msg')
    res.locals.error_msg = req.flash('error_msg')
    // res.locals.error = req.flash('error')
    // res.locals.user = req.user || null
    next()
})

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, 'images/')
    },
    filename: function(req, file, cb){
        cb(null, Date.now()+ '-' + file.originalname)
    },
    // fileFilter:(req, file, cb)=>{ // formatos de imagens aceitos
    //     const extensaoImg = ['image/png','image/jpg','image/jpeg'].find(formatoAceito => formatoAceito == file.mimetype)
    // }
   
})

const upload = multer({storage})
app.get('/', async (req, res) => {
    try{
        await Post.findAll().then((posts)=>{ // mostra o conteudo das tabelas
            res.render('cadastro', {posts:posts})
        })
    }
    catch(err){
        req.flash('error_msg', 'Falha ao listar produtos')
        res.redirect('/')
    }
})

app.post('/cadastro', upload.single('file'), async (req, res)=>{
    try{
        await Post.create({
            nome: req.body.nome,
            preco: req.body.preco,
            imagem: req.file.filename
        })
        req.flash('success_msg', 'Produto cadastrar com sucesso')
        res.redirect('/')
    }
    catch(err){
        req.flash('error_msg', 'Falha ao cadastrar Produto')
        res.redirect('/')
    }
})
app.post('/delete/:id&:imagem',upload.single('file'), async (req, res)=>{
    try{
        Post.destroy({where: {id: req.params.id}})
        req.flash('success_msg', 'Produto deletado com sucesso')
        console.log(req.params.imagem)
        
        fs.unlink(__dirname +'/images/' + req.params.imagem,
        (erro)=>{
           console.log('Falha ao deletar arquivo dodiretório'+erro)
        }
    )
        res.redirect('/')
    }
    catch(err){
        req.flash('error_msg', 'Falha ao deletar produto'+err)
        res.redirect('/')
    }
})
app.get('/editar/:id', async (req, res)=>{
    let post = await Post.findByPk(req.params.id)
    res.render('editar', {id: post.id, nome: post.nome, preco: post.preco})
})

app.post('/editado', upload.single('file'),async (req, res)=>{
    try{
        let id = req.body.id
        await Post.update({
        nome: req.body.nome,
        preco: req.body.preco,
        imagem: req.file.filename},
            {where: {id: id}
        })
        req.flash('success_msg', 'Produto editado com sucesso')
        res.redirect('/')
    }
    catch(err){
        req.flash('error_msg', 'Falha ao editar produto' + err)
        res.redirect('/')
    }  
})
app.listen(8082,()=>{
    console.log('servidor rodando na porta 8082');
})



