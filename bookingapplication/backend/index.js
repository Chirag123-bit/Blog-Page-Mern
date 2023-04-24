const express = require("express")
const app = express()
const cookieParser = require("cookie-parser")
require("dotenv").config();
app.use(express.json())
app.use(cookieParser())

require("./database/connection")

const userRouter = require("./routes/userRoute") // Import
app.use("/api/user", userRouter) // Call


app.listen(process.env.PORT, () => {
    console.log(`Server Started On Port ${process.env.PORT}`)
})