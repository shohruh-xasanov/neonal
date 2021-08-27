const express = require('express')
const ejs = require('ejs')
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

app.use('/public',express.static('public'));
app.use(express.static(path.join(__dirname + "/public")))

app.use('/', require('./routes/blogRouter'))
app.use('/', require('./routes/commentRouter'))
app.use('/', require('./routes/contactusRouter'))
app.use('/', require('./routes/drRouter'))
app.use('/', require('./routes/ourContactRouter'))
app.use('/', require('./routes/serviceRouter'))
app.use('/', require('./routes/sliderRouter'))
app.use('/', require('./routes/userRouter'))
app.use('/', require('./routes/bannerRouter'))
app.use('/', require('./routes/about'))

app.use('/', require('./routes/mainRouter/mainRouter'))

app.get('/blogdetails', (req,res)=>{
    res.render('blogDetailsSidebar')
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

app.listen(PORT, ()=>{
    console.log(`Localhost is running to ${PORT}`)
})