import { useState } from 'react';
import { useFetchMusic } from '../hooks/useFetchMusic';
import { useFetchMusics } from '../hooks/useFetchMusics'
import { ItemMusicSearch } from './ItemMusicSearch';
import { ItemMyMusic } from './ItemMyMusic';
import { MyMusicGrid } from './MyMusicGrid';

export const MusicSearchGrid = ({searchMusic}) => {
    
    const { data: musics, loading } = useFetchMusics(searchMusic);
    // const { data: music } = useFetchMusic(searchMusic);

    const [myMusic, setMyMusic] = useState([])
    const [counter, setCounter] = useState(0)
    // console.log(myMusic)

    return (
        <>
            {/* <h3 className='animate__animated animate__fadeIn'>{category}</h3> */}
            <div className='row'>
                <div className='col media resultados' >
                    {loading && <p className='animate__animated animate__flash'>Loading...</p>}
                    {
                        musics.map((music) => (
                            <ItemMusicSearch 
                                key={music.id}
                                {...music}
                                myMusic={myMusic}
                                setMyMusic= {setMyMusic}
                            />
                        ))
                    }
                </div>
                <div className='col media '>
                    {/* {loading && <p className='animate__animated animate__flash'>Loading...</p>} */}
                    {
                        myMusic.map((music) => (
                            <MyMusicGrid 
                                key={music}
                                id={music}
                            />
                        ))
                    }


                </div>
            </div>
        </>
    )
}
