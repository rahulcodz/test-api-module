import express from "express"
import http from "http"
import cors from "cors"

const app = express()
app.use(cors())

const server = http.createServer(app)

app.get("/user", async (req, res) => {
  //   const rows = await sql`SELECT * FROM employees;`
  res.json("rows")
})

server.listen(8000, () => {
  console.log("Connected")
})
