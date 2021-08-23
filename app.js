const express = require('express')
const ejs = require('ejs')
const layout = require('express-ejs-layouts')
const bodyParser = require('body-parser')
const compression = require('compression')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const methodOverride = require('method-override')
const connectDB = require('./config/db')
const PORT = process.env.PORT || 3000
const path = require('path')
const app = express()

connectDB()
app.use(bodyParser.json())
app.locals.moment = require("moment");
app.use(bodyParser.urlencoded({extended:true}))
app.use(methodOverride('_method',{
    methods:['POST', 'GET']
}))
app.use(compression())
app.use(cookieParser())
app.use(cors())
app.set('view engine', 'ejs')
app.set('views', './views')

app.use(express.static(path.join(__dirname + "/public")))


app.use('/', require('./routes/blogRouter'))

app.get('/', (req,res)=>{
    res.render('index')
})
app.get('/about', (req,res)=>{
    res.render('about')
})
app.get('/blogdetails', (req,res)=>{
    res.render('blogDetailsSidebar')
})
app.get('/blog', (req,res)=>{
    res.render('blog')
})
app.get('/contact', (req,res)=>{
    res.render('contact')
})
app.get('/error', (req,res)=>{
    res.render('error')
})
app.get('/faq', (req,res)=>{
    res.render('faq')
})
app.get('/gallery', (req,res)=>{
    res.render('gallery')
})
app.get('/service', (req,res)=>{
    res.render('service')
})

app.listen(PORT, ()=>{
    console.log(`Localhost is running to ${PORT}`)
})