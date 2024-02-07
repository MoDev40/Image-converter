import React, { useEffect, useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { Label } from './ui/label'
import {Review} from './revoiew-modal/Review'
import Footer from './Footer'
import axios from 'axios'
import { insertImage, selectImgType } from '@/lib/toasts'
function Home() {

    const [selected,setSelected] = useState({
        PNG:false,
        JPG:false,
        GIF:false
    })

    const [imageType,setImageType] = useState("")

    const [image,setImage] = useState(null)
    
    const handleConvertImg = async(event) =>{
        event.preventDefault();
        if(selected.PNG|| selected.JPG|| selected.GIF){

            const formData = new FormData()
            formData.append('image',image)
            const data = await axios.post("http://localhost:8000/api/convert",formData);
            await axios.post("http://localhost:8000/api/type",{imgType:imageType});
            console.log(data.data);
            downloadImg(data.data.convertedImage)
        }else{
            selectImgType()
        }
    }

    const downloadImg = (imgData)=>{
        const blob = new Blob([imgData],{type: `image/${imageType}`});
        const url = URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = url;
        a.download = `converted-image.${imageType}`
        document.body.appendChild(a)
        a.click()
        document.body.removeChild(a)
        URL.revokeObjectURL(url) 

    }

    const handleImageInput = (event)=>{
        event.preventDefault();
        insertImage()
        setImage(event.target.files[0])
    }

  return (
    <div className='flex flex-col '>
        <div>
            <p  className='capitalize text-center text-xl my-6 p-8'>Convert Your image no need login just feel free</p>
        </div>
        <Card className="p-10 bg-gradient-to-tb from-[#fdfbfb] to-[#ebedee] text-gray-800">
            <CardHeader>
                <CardTitle>
                    <Label className="capitalize">Select Image You want</Label>
                </CardTitle>
                <CardDescription className="space-x-4 p-2">
                    <Button onClick={()=>{setSelected({...selected,PNG:true,JPG:false,GIF:false}) ,setImageType("png")}} className={`${selected.PNG ? "bg-black text-white" :"bg-[#d7d3d3] text-gray-800 hover:text-white"}`}>PNG</Button>
                    <Button onClick={()=>{setSelected({...selected,JPG:true,PNG:false,GIF:false}),setImageType("jpeg")}} className={`${selected.JPG ? "bg-black text-white" :"bg-[#d7d3d3] text-gray-800 hover:text-white"}`}>JPEG</Button>
                    <Button onClick={()=>{setSelected({...selected,GIF:true,JPG:false,PNG:false}),setImageType("gif")}} className={`${selected.GIF ? "bg-black text-white" :"bg-[#d7d3d3] text-gray-800 hover:text-white"}`}>GIF</Button>
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form action="#" className='flex flex-col space-y-4 lg:space-y-0 lg:flex-row  lg:p-8 lg:space-x-3'>
                    <Input  type="file" onChange={handleImageInput} accept="image/*"/>
                    <Review image={image}/>
                    <Button onClick={handleConvertImg}>Convert</Button>
                </form>
            </CardContent>
        </Card>
        <Footer/>
    </div>
  )
}

export default Home