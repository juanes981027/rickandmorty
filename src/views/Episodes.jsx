import { useEffect, useState } from "react"
import { getEpisodeById, getInfo } from "../services/Get"
import EpisodeCard from "../components/EpisodeCard"
import DetailsDialog from "../components/DetailsDialog"
import EpisodeDetails from "../components/EpisodeDetails"

const Episodes = ({episode, setEpisode, handleClose, setPagination, page, setPage, message, setMessage, open, setOpen, character, setCharacter, url, filteredCharacters, setFilteredCharacters}) => {
    const [episodes, setEpisodes] = useState([])
    const [loading, setLoading] = useState(true)

    const handleClickOpen = async(id) => {
        setEpisode(await getEpisodeById(id))
        setOpen(true);
        
    };

    useEffect(()=>{
        const getEpisodes = async()=>{
            setLoading(true)
            let data = await getInfo(`episode?page=${page}`)
            console.log(data)
            setEpisodes(data.data.results)
            setLoading(false)
        }
        getEpisodes()
    },[])
    useEffect(()=>{console.log(episodes, 'printing episodes')},[episodes])
    useEffect(()=>{setPage(1)},[])

    return <>
    

    <table>
        <thead>
            <tr>
                <th>
                <h1>Episodes</h1>
                </th>
            </tr>
        </thead>
        <tbody>
            <tr className="row">
                {loading && <td>loading</td>}
                {episodes.map(episode=>
                    <td className="col-4" key={episode.id}>
                        {/* <EpisodeCard episode={episode} handleClickOpen={handleClickOpen}/> */}
                        <EpisodeDetails episode={episode}/>
                    </td>)}
                    
            </tr>
        </tbody>
    </table>
    {open && <DetailsDialog handleClickOpen={handleClickOpen} character={episode} handleClose={handleClose} setOpen={setOpen} open={open}/>}
    </>


}

export default Episodes