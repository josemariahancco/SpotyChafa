import React, { useState } from 'react'

export const ItemMyMusic = ({full_title, player, url, link }) => {
    const [selected, setSelected] = useState(null)
    const [letra, setLetra] = useState(null);
    const handleToggle = (title) => {
        if (selected === title) {
            return setSelected(null)
        }
        setSelected(title)
    }
    const handleletra = (url) => {
        if (letra === url) {
            return setLetra(null)
        }
        setLetra(url)
    }
    

    return (
        <div className='card resultados'>
            
            <div className='card-header puntero' id={full_title} onClick={() => handleToggle(full_title)}>
                <img src={url} width={50}></img> <span >{full_title}</span>
                
            </div>
            
            <div id={full_title} className={selected === full_title?'contenido mostrar':'contenido'} aria-labelledby={full_title} data-parent='#accordion'>
                <iframe src={player}></iframe>
                <div className='card'>
            
                    <div className='card-header puntero letra' id={url} onClick={() => handleletra(url)}>
                        <h6 ><center>LETRA <small>{full_title}</small></center></h6>
                    </div>
                    <div id={url} className={letra === url?'contenido mostrar':'contenido'} aria-labelledby={url} data-parent='#accordion'>
                       <a href={link} target="_blank" >{full_title} </a>
                    </div>       

                </div>
            </div>
            
            

        </div>
    )
}
