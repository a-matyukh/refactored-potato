import express from "express"
import cors from "cors"
import { SuperUser, Admin } from "./db.js"
const jsonParser = express.json()
const app = express()

app.use(express.static(process.cwd() + "/dist"))
app.use(cors())
app.listen(3001, () => console.log("Сервер ожидает подключения..."))


// Routes
app.put("/api/registration", jsonParser, async (req, res) => {
    if(!req.body) return res.sendStatus(400)
    await SuperUser.registration(req.body)
    res.send(req.body)
})
app.patch("/api/edit", jsonParser, async (req, res) => {
    if(!req.body) return res.sendStatus(400)
    await Admin.edit({name: req.body.name}, {$set: {status: req.body.status}})
    res.send(req.body)
})