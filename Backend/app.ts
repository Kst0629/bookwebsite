import express from 'express';
import connectDB from "./config/db";

const app = express();

connectDB();

app.get('/', (req: express.Request, res: express.Response) => res.send('Hello world!'));  

const port = process.env.PORT || 8082;

app.listen(port, () => console.log('Server running on port ${port}'));