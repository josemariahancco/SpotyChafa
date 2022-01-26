export const getMusics = async(q) => {
    let url = `https://genius.p.rapidapi.com/search?q=${q}`
    let req = new Request(url, {
        method: 'GET',
        headers: {
            'x-rapidapi-host': 'genius.p.rapidapi.com',
            'x-rapidapi-key': '20cf07f2b0msha4dc7af8796408ep1135d5jsnbac247e5e7b5'
        }
    })
    const resp = await fetch(req);
    const {response} = await resp.json()
    
    const musics = response.hits.map(music => {
        return {
            id: music.result.id,
            title: music.result.full_title,
            url: music.result.header_image_thumbnail_url,
            
        }
    })

    return musics;
}