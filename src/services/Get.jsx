import axios from "axios"

export const getInfo = async(page) => {
    let info
    try{
        const baseUrl = 'https://rickandmortyapi.com/api/'
        info = await axios.get(`${baseUrl}${page}`)
    }
    catch(err){
        console.log(err, 'printing error')
    }
    return info

}

export const getCharacterById = async(id) => {
    const baseUrl = `https://rickandmortyapi.com/api/character/${id}`
    let info = await axios.get(`${baseUrl}`)
    return info
}

export const getEpisodeById = async(id) => {
    const baseUrl = `https://rickandmortyapi.com/api/episode/${id}`
    let info = await axios.get(`${baseUrl}`)
    return info
}


export const getLocations = () => {

}

export const getEpisodes = () => {

}