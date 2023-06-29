import express from 'express';
import cors from 'cors';
import SongRouter from 'SongRouter';

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use('/api', SongRouter);

const appName = '@music-player/backend';
const port = 8100;

app.listen(port, () => console.log(`Server listening on port: ${port} for app: ${appName}`));