import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

export const insertImage = () => toast.success("Image-Inserted",{
    hideProgressBar: false,
    autoClose: 2000,
    closeButton:false,
    theme:"dark",
    position:toast.POSITION.TOP_LEFT
});

export const selectImgType = () => toast.info("Select Image You want",{
    hideProgressBar: false,
    autoClose: 2000,
    closeButton:false,
    theme:"dark",
    position:toast.POSITION.TOP_LEFT
});