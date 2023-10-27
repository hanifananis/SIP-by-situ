import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import UserRoute from "./routes/UserRoute.js"
import CommentRoute from "./routes/CommentRoute.js"
import LoginRegisterRoute from "./routes/LoginRegisterRoute.js"
import PartaiInfoRoute from "./routes/PartaiInfoRoute.js"

const app = express()

mongoose.connect('mongodb://localhost:27017/sip_db',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
const db = mongoose.connection
db.on('error', (error)=>console.log(error))
db.once('open', () => console.log ('MongoDB connected'))

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(UserRoute)
app.use(CommentRoute)
app.use(LoginRegisterRoute)
app.use(PartaiInfoRoute)

app.listen(5000, ()=> console.log('Server up and running on port 5000'))