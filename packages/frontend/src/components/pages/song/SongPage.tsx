import { useEffect, useState, useContext } from 'react';
import { AppContext } from '../../../contexts';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Song } from '../../../types';
import Page from '../../reusable/page';
import Stack from 'react-bootstrap/Stack';

function SongPage(){
  const [song, setSong] = useState<Song | undefined>(undefined);
  const { id } = useParams();
  const { setIsError, setIsLoading } = useContext(AppContext);

  useEffect(() => {
    if (id){
      const getSong = async() => {
        setIsLoading(true);

        try {
          const response = await axios.get(`http://localhost:8100/api/songs/${id}`);
          setSong(response.data.song);
        } catch (error){
          setIsError(true);
        } finally {
          setIsLoading(false);
        }
      };

      getSong();
    }
  }, [id]);

  if (!song){
    return null;
  }

  return (
    <Page title={song.name} backRoute="/">
      <Stack gap={3}>
        <div>
          <img
            src={song.coverPath}
            alt={song.name}
            className="cover"
          />
        </div>
        <audio controls>
          <source
            src={song.audioPath}
            type="audio/mpeg"
            data-testid="audio-player"
          />
        </audio>
      </Stack>
    </Page>
  );
}

export default SongPage;