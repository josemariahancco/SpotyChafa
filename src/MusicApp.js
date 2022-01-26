import React, { useState } from "react";
import { SearchMusic } from "./components/SearchMusic";
import { MusicSearchGrid } from "./components/MusicSearchGrid";
export const MusicApp = () => {

    const [searchMusic, setSearchMusic] = useState('')

    return (
        <div className="container-fluid col-xs-10 col-xs-offset-1 col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 text-center mt-5">
            <img src="https://indiehoy.com/wp-content/uploads/2017/05/pirate-bay-640x429.jpg" height={100}></img><h2>SpottyChafo</h2>
            
            <SearchMusic setSearchMusic= {setSearchMusic}/>

            <hr/> 

            <MusicSearchGrid
                searchMusic={searchMusic}
            />
        </div>
    )
}