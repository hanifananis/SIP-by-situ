import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import UserRoute from "./routes/UserRoute.js"
// import CommentRoute from "./routes/CommentRoute.js"
// import ReplyRoute from "./routes/ReplyRoute.js"
import LoginRegisterRoute from "./routes/LoginRegisterRoute.js"
import PartaiInfoRoute from "./routes/PartaiInfoRoute.js"
import PaslonRoute from "./routes/PaslonRoute.js"
import ForumRoute from "./routes/ForumRoute.js"
import dotenv from 'dotenv'
dotenv.config()

const app = express()
var mongoOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}
if(process.env.MONGO_URI){
    mongoose.connect(process.env.MONGO_URI + '/' + process.env.MONGO_DBNAME,mongoOptions)
} else{
    mongoose.connect('mongodb://' + process.env.MONGO_HOST + ':' + process.env.MONGO_PORT + '/' + process.env.MONGO_DBNAME,mongoOptions)

}
const db = mongoose.connection
db.on('error', (error)=>console.log(error))
db.once('open', () => console.log ('MongoDB connected'))

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(UserRoute)
// app.use(CommentRoute)
// app.use(ReplyRoute)
app.use(LoginRegisterRoute)
app.use(PartaiInfoRoute)
app.use(PaslonRoute)
app.use(ForumRoute)

app.listen(5000, ()=> console.log('Server up and running on port 5000'))