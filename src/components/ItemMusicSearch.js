import React from 'react'

export const ItemMusicSearch = ({id, title, url, myMusic, setMyMusic}) => {
    // console.log(id)
    const handleAdd = (id, e) => {
        e.preventDefault();
        if (myMusic.includes(id)) return 
            
        setMyMusic(myMusics => [id, ...myMusics])
        
    }
    
    return (
        <div className='animate__animated animate__bounce'>
            
            <div className='container row mb-2 mio p-2'>

                <div className='col'>
                    <img src={url} alt={title} width='64px'/>
                </div>
                <div className='col-8'>
                    <h5 className='mt-0'>{title}</h5>
                    
                </div>
                <div className='col'>
                    <button className='btn btn-success' onClick={(e) => handleAdd(id, e)}>add</button>
                </div>

            </div>
            <hr/>
        </div>
    )
}
