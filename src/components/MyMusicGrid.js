import React, { useState, useEffect } from 'react'
import { useFetchMusic } from '../hooks/useFetchMusic';
import { ItemMyMusic } from './ItemMyMusic';

export const MyMusicGrid = ({id, indice}) => {

    const { data: music } = useFetchMusic(id);

    return (
        <>
            {/* <h3 className='animate__animated animate__fadeIn'>{category}</h3> */}
            {/* {loading && <p className='animate__animated animate__flash'>Loading...</p>} */}
            <div className='acordion'>
                <ItemMyMusic 
                    key={id}
                    {...music}
                    indice={indice}
                />
            </div>
        </>
    )
}
