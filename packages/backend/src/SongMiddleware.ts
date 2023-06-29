import { param } from 'express-validator';

const SongMiddleware = {
  validateGetSong: [
    param('id')
      .notEmpty()
      .withMessage('Id is required.'),
  ],
};

export default SongMiddleware;