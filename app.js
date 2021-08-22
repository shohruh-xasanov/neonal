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
app.use(layout);

app.use('/public', express.static('public'))

app.use('/', require('./routes/blogRouter'))

app.listen(PORT, ()=>{
    console.log(`Localhost is running to ${PORT}`)
})