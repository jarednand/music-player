import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppContext } from './contexts';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import SongsPage from './components/pages/songs';
import SongPage from './components/pages/song';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

const App = () => {
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Container className="my-4">
      <Row>
        <h1 className="mb-4">Music Player</h1>
      </Row>
      <AppContext.Provider value={{
        isError,
        setIsError,
        isLoading,
        setIsLoading,
      }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Row><SongsPage /></Row>} />
            <Route path="/songs/:id" element={<Row><SongPage /></Row>} />
          </Routes>
        </BrowserRouter>
      </AppContext.Provider>
    </Container>
  );
};

export default App;