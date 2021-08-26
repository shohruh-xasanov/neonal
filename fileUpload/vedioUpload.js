const multer=require('multer')
const path= require('path')
const md5=require('md5')

const storage= multer.diskStorage({
    destination:(req, file, cb)=>{
        if(file.fieldname === "file")
        {
            cb(null, 'public/uploads/video')
        }
        if(file.fieldname === "image")
        {
            cb(null, 'public/uploads/image')
        }
    },
    filename: (req, file, cb)=>{
        let ext= path.extname(file.originalname)
        if(file.fieldname ==="file")
        {
            cb(null,  md5(Date.now()) + ext)
        }
        if(file.fieldname ==="image")
        {
            cb(null,  md5(Date.now()) + ext)
        }
    }
})

const  upload = multer ({
    storage: storage,
    fileFilter: (req, file, cb)=>{
        let ext= path.extname(file.originalname)
        if(
            ext == '.jpg' || ext == '.png' || ext == '.mp4' 
            || ext == '.ogg' || ext == '.avi' || ext == '.mov'
        ){
            cb(null, true)
        }else{
            res.status(500).json({msg: "Only jpg & png file supported"})
            cb(null, false)
        }
    },
    limits: {
        fileSize: 1024 * 1024 * 5 * 10
    }
})

module.exports= upload