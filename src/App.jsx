import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Characters from './views/Characters'
import Episodes from './views/Episodes'
import Locations from './views/Locations'
import { useState } from 'react'
import Home from './views/Home'

function App()
{
  const [characters, setCharacters] = useState([])
  const [filteredCharacters, setFilteredCharacters] = useState([])
  const [pagination, setPagination] = useState({})
  const [page, setPage] = useState()
  const [message, setMessage] = useState(true)
  const [open, setOpen] = useState(false);
  const [character, setCharacter] = useState()
  const [episode, setEpisode] = useState()
  const [episodes, setEpisodes] = useState()

  const handleClose = () =>
  {
    setOpen(false);
  };

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="main-container">
          <Routes>
            <Route element={<Home />} path='/' />
            <Route element={<Characters handleClose={handleClose} characters={characters} setCharacters={setCharacters} filteredCharacters={filteredCharacters} setFilteredCharacters={setFilteredCharacters} pagination={pagination} setPagination={setPagination} page={page} setPage={setPage} message={message} setMessage={setMessage} open={open} setOpen={setOpen} character={character} setCharacter={setCharacter} baseUrl={'https://rickandmortyapi.com/api/'} />} path='/characters' />
            <Route element={<Episodes handleClose={handleClose} episodes={episodes} setEpisodes={setEpisodes} filteredCharacters={filteredCharacters} setFilteredCharacters={setFilteredCharacters} pagination={pagination} setPagination={setPagination} page={page} setPage={setPage} message={message} setMessage={setMessage} open={open} setOpen={setOpen} episode={episode} setEpisode={setEpisode} />} path='/episodes' />
            <Route element={<Locations handleClose={handleClose} characters={characters} setCharacters={setCharacters} filteredCharacters={filteredCharacters} setFilteredCharacters={setFilteredCharacters} pagination={pagination} setPagination={setPagination} page={page} setPage={setPage} message={message} setMessage={setMessage} open={open} setOpen={setOpen} character={character} setCharacter={setCharacter} />} path='/locations' />
          </Routes>
        </div>

      </BrowserRouter>

    </>
  )
}

export default App
