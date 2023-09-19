import express from "express"
import http from "http"
import cors from "cors"
import pg from "pg"

const app = express()
app.use(cors())
const { Pool } = pg
const pool = new Pool({
  connectionString:
    "postgres://default:6VJSaD9QHwrW@ep-green-pond-38424529-pooler.us-east-1.postgres.vercel-storage.com:5432/verceldb" +
    "?sslmode=require",
})

const server = http.createServer(app)

app.use(express.json())

app.get("/user", async (req, res) => {
  try {
    const data = await pool.query(`SELECT * FROM employees`)
    return res.status(200).json(data)
  } catch (error) {
    return res.status(500).json({ error })
  }
})

server.listen(8000, () => {
  console.log("Connected")
})
