import Table from "../components/Table"


const Characters = ({handleClose, characters, setCharacters, pagination, setPagination, filteredCharacters, setFilteredCharacters, page, setPage, message, setMessage, open, setOpen, character, setCharacter, }) => {
    
    return <>
        <Table handleClose={handleClose} characters={characters} setCharacters={setCharacters} pagination={pagination} setPagination={setPagination} page={page} setPage={setPage} message={message} setMessage={setMessage} open={open} setOpen={setOpen} character={character} setCharacter={setCharacter} filteredCharacters={filteredCharacters} setFilteredCharacters={setFilteredCharacters} url="character/?page="/>
    </>
}

export default Characters