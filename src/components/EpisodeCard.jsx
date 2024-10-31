import { Button } from "@mui/material"

let EpisodeCard = ({ handleClickOpen, episode }) => {

    return <>
        <div className="card" style={{ width: '18rem' }}>
            <div className="card-body">
                <h5 className="card-title">{episode.name}</h5>
                <Button className="details-button" variant="outlined" onClick={() => handleClickOpen(episode.id)}>
                    Details
                </Button>
            </div>
        </div>
    </>
}

export default EpisodeCard