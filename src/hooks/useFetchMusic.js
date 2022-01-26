import { useEffect, useState } from "react";
import { getMusic } from "../helpers/getMusic";
export const useFetchMusic = (id) => {
    const [state, setState] = useState({
        data: []
    })
    useEffect(() => {
        getMusic(id)
            .then(music => {
                setState({
                    data: music
                })
            })
    }, [id])

    return state
}