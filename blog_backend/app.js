let express = require("express")
let app = express()
let cors = require("cors")
let hpp = require("hpp")
let helmt = require("helmet")
let ratelimit = require("express-rate-limit")
let connectToDB = require("./config/connectToDB")
require("dotenv").config()
const { notFound, errorHandling } = require("./medelweres/error")

connectToDB()


app.use(express.json())
app.use(hpp())
app.use(helmt())
app.use(ratelimit({
    windowMs:10 * 60 * 1000, //10m,
    max:200
}))
app.use(cors())


// routs__________

app.use("/userAuth", require("./routs/userRout/userAuth"))
app.use("/usermethod", require("./routs/userRout/usermethod"))
app.use("/postRouts", require("./routs/postRout"))
app.use("/CommentRouts", require("./routs/commentRout"))
app.use("/CatigoryRouts", require("./routs/catigoryRout"))

app.use(notFound)
app.use(errorHandling)

let port = process.env.port || 3000
app.listen(port, () => {
    console.log("i am listen");
})




