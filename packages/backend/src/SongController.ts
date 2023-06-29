import { Request, Response } from 'express';
import { songs } from './constants';

const SongController = {
  getSongs(_: Request, res: Response){
    return res.status(200).json({ songs });
  },
  getSong(req: Request, res: Response){
    const song = songs.find((song) => song.id === Number(req.params.id));
    return res.status(200).json({ song });
  },
};

export default SongController;