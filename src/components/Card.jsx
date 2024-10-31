import { Button } from "@mui/material"

let Card = ({handleClickOpen, character}) => {

    return <>
    <div className="card"  style={{width: '18rem'}}>
        <img className="card-img-top" src={character.image} alt="Card image cap"/>
        <div className="card-body">
            <h5 className="card-title">{character.name}</h5>
            <Button className="details-button" variant="outlined" onClick={()=>handleClickOpen(character.id)}>
                Details
            </Button>
        </div>
        </div>
    </>
}

export default Card