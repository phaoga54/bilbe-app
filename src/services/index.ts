import API from "./api"

export const getVerse = async (name: string, chapter: number, from: number, to: number) => {
    const url = `https://bible-api.com/${name}+${chapter}:${from}-${to}`
    let response = await API.get(url)
    return response
}