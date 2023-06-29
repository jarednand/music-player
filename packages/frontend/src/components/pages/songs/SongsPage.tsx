import { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../../../contexts';
import axios from 'axios';
import { Song } from '../../../types';
import Page from '../../reusable/page';
import Stack from 'react-bootstrap/Stack';

function SongsPage(){
  const [songs, setSongs] = useState<Song[]>([]);
  const { setIsError, setIsLoading } = useContext(AppContext);
  const navigate = useNavigate();

  useEffect(() => {
    async function getSongs(){
      setIsLoading(true);
      
      try {
        const response = await axios.get('http://localhost:8100/api/songs');
        setSongs(response.data.songs);
      } catch (error){
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    getSongs();
  }, []);

  return (
    <Page title="Songs">
      <Stack gap={3}>
        {songs.map((song) => (
          <div
            className="cursor-pointer"
            key={song.id}
            onClick={() => navigate(`/songs/${song.id}`)}
          >
            <img
              src={song.coverPath}
              alt={song.name}
              className="cover me-3"
            />
            <span><b>{song.name}</b></span>
          </div>
        ))}
      </Stack>
    </Page>
  );
}

export default SongsPage;