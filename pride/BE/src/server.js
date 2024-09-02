import express from 'express';
import { dbConfig } from "./config/db.js"
import cors from 'cors'
import { router } from './routes/index.js';
const app = express();
const PORT = 8000;
app.use(
    cors({
        origin: "*",
    })
);

app.options("*", cors());

app.use(express.json());

app.listen(PORT, ()=>{
    console.log("listining to", PORT);
});

app.use("/api", router);

dbConfig();