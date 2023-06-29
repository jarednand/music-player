import { Router } from 'express';
import SongMiddleware from './SongMiddleware';
import SongController from './SongController';

const SongRouter = Router();

SongRouter.get('/songs', SongController.getSongs);
SongRouter.get('/songs/:id', SongMiddleware.validateGetSong, SongController.getSong);

export default SongRouter;