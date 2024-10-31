import { useEffect, useState } from "react"
import { getCharacterById, getInfo } from "../services/Get"
import DetailsDialog from "../components/DetailsDialog"
import Card from "../components/Card"
import PositionButtons from "../components/PositionButtons"

const Table = ({ handleClose, characters, setCharacters, pagination, setPagination, page, setPage, message, setMessage, open, setOpen, character, setCharacter, url, filteredCharacters, setFilteredCharacters }) => {

    let info

    let getCharacters = async (url) => {
        setMessage(true)
        try {
            info = await getInfo(`${url}${page}`)
            console.log(`character/?page=${page}`, 'printing info')
            setCharacters(info.data.results)
            setFilteredCharacters(info.data.results)
            setPagination(info.data.info)

        }
        catch (err) {
            console.log(err)
        }
        setMessage(false)


    }
    const searchCharacter = (name) => {
        let result = []
        filteredCharacters
            .map((character) => character.name.toLowerCase()
                .includes(name.toLowerCase()) ? result = [...result, character] : result)
        setCharacters(result)
    }


    const handleClickOpen = async (id) => {
        setCharacter(await getCharacterById(id))
        setOpen(true);

    };

    const changePage = (position) => {
        switch (position) {
            case "next":
                (page > 0 && page <= pagination.pages) ? setPage(page + 1) & localStorage.setItem('page', page + 1) : page

                break
            case "previous":
                page > 1 ? setPage(page - 1) & localStorage.setItem('page', page - 1) : page

                break
        }
    }

    useEffect(() => {

        let lastPage = parseInt(localStorage.getItem('page'))
        lastPage > 1 ? setPage(lastPage) : setPage(1)
        getCharacters(url)

    }, [page])



    return <>

        <table>
            <thead>
                <tr>
                    <th>
                        <h1>Characters</h1>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="d-flex justify-content-between">
                        <div className="pages">
                            <PositionButtons changePage={changePage} page={page} />
                        </div>
                        <div className="search">
                            <input type="text" className="search-input" name="" onChange={(e) => searchCharacter(e.target.value) & console.log(e, e.target.value)} id="" /><button className="btn btn-primary search-button" >Search</button>
                        </div>
                    </td>
                </tr>
                <tr className="row">
                    {message && <td>Loading...</td>}

                    {characters.map((character) =>
                        <td className="col-4 my-2" key={character.id}>
                            <Card character={character} handleClickOpen={handleClickOpen} />

                        </td>
                    )}
                </tr>
                <tr>
                    <td>
                        <PositionButtons changePage={changePage} page={page} />
                    </td>
                </tr>
            </tbody>
        </table>
        {open && <DetailsDialog handleClickOpen={handleClickOpen} character={character} handleClose={handleClose} setOpen={setOpen} open={open} />}
    </>
}

export default Table