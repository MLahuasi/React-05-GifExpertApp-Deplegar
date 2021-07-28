import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategoria = ({ setCategorias }) => {

    const [inputValue, setInputValue] = useState(''); //Si no se envia un parámetro en useState se presenta un error en consola ya que useState es undefined

    const handleInputChange = ( e ) => {
        setInputValue(e.target.value); //Escribe en la caja de texto

        console.log('handleInputChange llamado...');
    };

    const handleSubmit = (e) => {
        e.preventDefault(); //Previene el refresh de la página

        console.log('handleSubmit llamado...', inputValue);

        if( inputValue.trim().length > 2 ){
            setCategorias(cats => [inputValue, ...cats ]);
            setInputValue('');
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <p> { inputValue }</p>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>
    )
}

AddCategoria.propTypes = {
    setCategorias: PropTypes.func.isRequired
}