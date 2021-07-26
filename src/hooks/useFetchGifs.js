/**
 * Custom Hook
 */

import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = (categoria) => {

    //Estado de renderización [useState]
    const [state, setState] = useState({
        data: [],
        loading: true
    });


    /**
     * Se ejecuta la renderización solo si existe un cambio
     */
    useEffect(() => {
        getGifs(categoria)
            .then(imgs => {
                console.log(imgs);
                setState({
                    data: imgs,
                    loading: false
                })
            })
    }, [categoria]);


    //el state es la información que se envía en el useState
    return state;
}