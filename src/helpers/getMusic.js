export const getMusic = async(id) => {
    let url = `https://genius.p.rapidapi.com/songs/${id}`
    let req = new Request(url, {
        method: 'GET',
        headers: {
            'x-rapidapi-host': 'genius.p.rapidapi.com',
            'x-rapidapi-key': '805b9ef699mshc97054119ed1d0ep11da88jsn6f3ea07e3a2f'
        }
    })
    const resp = await fetch(req);
    const {response} = await resp.json()
    
    const music = {
        player: response.song.apple_music_player_url,
        full_title: response.song.full_title,
        url: response.song.header_image_thumbnail_url,
        link:response.song.url
        
    }
    // console.log(music)
    return music;
}