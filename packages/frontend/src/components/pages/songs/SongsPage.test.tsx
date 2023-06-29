import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';
import { Song } from '../../../types';
import SongsPage from './SongsPage';

describe('SongsPage', () => {
  const songs: Song[] = [
    {
      id: 1,
      name: 'A',
      coverPath: '/songs/A/cover.jpg',
      audioPath: '/songs/A/audio.mp3',
    },
    {
      id: 2,
      name: 'B',
      coverPath: '/songs/B/cover.jpg',
      audioPath: '/songs/B/audio.mp3',
    },
  ];
  
  beforeEach(() => {
    vi.spyOn(axios, 'get').mockResolvedValue({ data: { songs } });
  });

  it('renders correctly', async () => {
    render(
      <BrowserRouter>
        <SongsPage />
      </BrowserRouter>
    );

    await screen.findByText('Songs');

    expect(screen.getByAltText('A')).toHaveAttribute('src', '/songs/A/cover.jpg');
    expect(screen.getByText('A')).toBeInTheDocument();
    expect(screen.getByAltText('B')).toHaveAttribute('src', '/songs/B/cover.jpg');
    expect(screen.getByText('B')).toBeInTheDocument();
  });
});

