import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const SearchMusic = ({setSearchMusic}) => {
    
    const [inputValue, setInputValue] = useState('')

    const handleInputValue =  e => {
        setInputValue(e.target.value)
    }
    
    const handleSubmit = e => {
        e.preventDefault();
        if (inputValue.length > 2) {
            setSearchMusic(inputValue);
            // clear
            setInputValue('')
        }
    }

    return (
        <form>     
            <div className='input-group'>
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputValue}
                    className='search-input form-control text-center'
                    placeholder='Ingrese su búsqueda'
                />
                <span className='input-group-btn'>
                    <button type='submit' className='search-btn btn btn-primary' onClick={handleSubmit}>
                        <i className='fa fa-search'></i>
                    </button>
                </span>

            </div>
        </form>
    )
}

SearchMusic.propTypes = {
    setSearchMusic: PropTypes.func.isRequired
}
