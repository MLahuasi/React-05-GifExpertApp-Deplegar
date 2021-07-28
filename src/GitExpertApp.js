import React, { useState } from 'react';
import { AddCategoria } from './components/AddCategoria';
import { GifGrid } from './components/GifGrid';

const GitExpertApp = ( { defaultCategorias = [] } ) => {
     //Cargar categorías para que sean renderizadas por React
    //const [categorias, setCategorias] = useState(['Dragon Ball']);
    const [categorias, setCategorias] = useState(defaultCategorias);
    return (
        <>
            <h1>GitExpertApp</h1>
            <AddCategoria setCategorias={setCategorias} />
            <hr />
            <ol>
                {
                    /**
                     * Llamar a Hook GifGrid
                     */
                    categorias.map(categoria => (
                        <GifGrid
                            key={categoria}
                            categoria={categoria}
                        />))
                }
            </ol>

        </>
    );
}

export default GitExpertApp;


