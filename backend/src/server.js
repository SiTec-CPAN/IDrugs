import express from "express";
import cors from "cors";
import routes from "./routes";
import "dotenv";
import mongoose from 'mongoose';

const app = express();
const PORT = process.env.PORT || 8001;
const CORS_ROUTES = "*";

mongoose.connect('mongodb://localhost/idrugs', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology:true
}).then(() => {
    console.log("Conectado ao servidor");
}).catch((err) => {
    console.log(`Erro: ${err}`);
})

app.use(express.json());
app.use(cors(CORS_ROUTES));
app.use(routes);

app.listen(PORT);
