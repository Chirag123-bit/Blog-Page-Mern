const express = require("express")
const app = express()
require("dotenv").config();
app.use(express.json())

require("./database/connection")

const userRouter = require("./routes/userRoute") // Import
app.use("/api/user", userRouter) // Call


app.listen(process.env.PORT, () => {
    console.log(`Server Started On Port ${process.env.PORT}`)
})