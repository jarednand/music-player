import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import Router from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';
import { Song } from '../../../types';
import SongPage from './SongPage';

describe('SongPage', () => {
  const song: Song = {
    id: 1,
    name: 'A',
    coverPath: '/songs/A/cover.jpg',
    audioPath: '/songs/A/audio.mp3',
  };
  
  beforeEach(() => {
    vi.spyOn(Router, 'useParams').mockReturnValue({ id: '1' });
    vi.spyOn(axios, 'get').mockResolvedValue({ data: { song } });
  });

  it('renders correctly', async () => {
    render(
      <BrowserRouter>
        <SongPage />
      </BrowserRouter>
    );

    await screen.findByText('A');

    expect(screen.getByText('Back')).toHaveAttribute('href', '/');
    expect(screen.getByAltText('A')).toHaveAttribute('src', '/songs/A/cover.jpg');
    expect(screen.getByTestId('audio-player')).toHaveAttribute('src', '/songs/A/audio.mp3');
  });
});

