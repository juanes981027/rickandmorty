import { useEffect } from "react"

const DetailsCard = ({character}) => {
    useEffect(()=>{
        console.log(character, 'printing it')
    })
    return <>
    <div className="card"  style={{width: '18rem'}}>
        <img className="card-img-top" src={character.image} alt="Card image cap"/>
        <div className="card-body">
            <h5 className="card-title">{character.name}</h5>
            <p>status {character.status} </p>
            <p>species {character.species} </p>
            <p>gender {character.gender}</p>
            <p>origin {character.origin.name}</p>
        </div>
        </div>
    </>
}

export default DetailsCard