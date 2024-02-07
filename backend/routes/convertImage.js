import express from 'express'
import multer from 'multer'
import sharp from 'sharp';


const router = express.Router();

const storage = multer.memoryStorage()
const upload = multer({storage: storage,limits:{fileSize:10*1024*1024}})
let type = "jpeg";

const convertImage = (inputBuffer,format)=>{
    return sharp(inputBuffer)
        .resize(400,300)
        .toFormat(format)
        .toBuffer();
}

router.post('/type',(req,res)=>{
    const {imgType} = req.body
    type = imgType
    res.send(type)
})
router.post('/convert',upload.single('image'),async(req, res) => {
    const uploadedFile = req.file;

    const convertedImage = await convertImage(uploadedFile.buffer,type)
    res.contentType = `image/${type}`
    res.status(200).json({convertedImage})
})

export default router