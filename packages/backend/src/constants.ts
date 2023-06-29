import { Song } from './types';

export const songNames: Song['name'][] = [
  'Bliss',
  'Lullaby',
  'Serenity',
].sort();

export const songs = songNames.reduce((result, songName, index) => {
  const basePath = `/songs/${songName}`;
  const song: Song = {
    id: ++index,
    name: songName,
    coverPath: `${basePath}/cover.jpg`,
    audioPath: `${basePath}/audio.mp3`,
  };

  result.push(song);

  return result;
}, [] as Song[]);

export default {
  songNames,
  songs,
};