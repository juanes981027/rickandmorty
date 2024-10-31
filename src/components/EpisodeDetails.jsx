import { useEffect, useState } from "react"

const EpisodeDetails = ({ episode }) => {
    const [tableBody, setTableBody] = useState(false)
    const showMore = () => {
        setTableBody(!tableBody)
    }
    useEffect(() => {
        console.log(episode, 'printing it')
    })
    return <>
        <div className="card" style={{ width: '18rem' }}>
            <div className="card-body">
                <h5 className="card-title">{episode.name}</h5>
                <p>Air date {episode.air_date} </p>
                <p>Episode {episode.episode} </p>
                <p>Url {episode.url}</p>
                <p>Created {episode.created}</p>
                <table>
                    <thead>
                        <tr>
                            <th>
                                Characters
                                <span className="head-span" onClick={()=>showMore()}> Show more</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody className={tableBody ? 'show-character-table' : 'character-table'}>
                        {
                            episode.characters.map((character) =>
                                <tr>
                                    <td>
                                        {character}
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    </>
}

export default EpisodeDetails