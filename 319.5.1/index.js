import express from 'express';
import mongoose from 'mongoose';
import 'dotenv/config';

const app = express();
const PORT = process.env.PORT || 8080;

await mongoose.connect(process.env.MONGO_URI)

import router from './routes/usersRoutes.js' 
app.use('/users', router)

app.get('/', (req, res)=>{
    res.send("CONNECTED!")
})


app.listen(PORT, function (req, res) {
	console.log(`Listening to server in port: ${PORT}. http://localhost:${PORT}`);
});
