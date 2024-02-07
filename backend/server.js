import express from 'express'
import cors from 'cors'
import convertRouter from './routes/convertImage.js';
const app = express();

app.use(express.json())
app.use(cors())

const PORT = 8000;

app.use("/api",convertRouter)
app.listen(PORT, ()=>{
    console.log(`listening on ${PORT}`);
})