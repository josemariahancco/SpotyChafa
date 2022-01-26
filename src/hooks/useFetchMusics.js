import { useEffect, useState } from "react";
import { getMusics } from "../helpers/getMusics";
export const useFetchMusics = (q) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    })
    useEffect(() => {
        getMusics(q)
            .then(musics => {
                setState({
                    data: musics,
                    loading: false
                })
            })
    }, [q])

    return state
}