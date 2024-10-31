import axios from "axios"

const baseUrl = 'https://rickandmortyapi.com/api/'
export const getInfo = async (page) =>
{
    let info
    try
    {
        info = await axios.get(`${baseUrl}${page}`)
    }
    catch (err)
    {
        console.log(err, 'printing error')
    }
    return info

}

export const getCharacterById = async (id) =>
{
    const baseUrl = `https://rickandmortyapi.com/api/character/${id}`
    let info = await axios.get(`${baseUrl}`)
    return info
}

export const getEpisodeById = async (id) =>
{
    const baseUrl = `https://rickandmortyapi.com/api/episode/${id}`
    let info = await axios.get(`${baseUrl}`)
    return info
}


export const getLocations = () =>
{

}

export const getEpisodes = () =>
{

}