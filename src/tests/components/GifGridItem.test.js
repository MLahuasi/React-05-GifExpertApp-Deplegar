import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';

import { GitGridItem }  from '../../components/GitGridItem';

describe('Test GitGridItem.js', () => {


    let id = 'aAbax5anloMNk6TSP9';
    let title = 'Dragon Ball GIF by TOEI Animation UK';
    let url = 'https://media4.giphy.com/media/aAbax5anloMNk6TSP9/giphy.gif?cid=85b515a5vue5x4b3l0v8zlb9ilfhqx9bx707skt72x36dyn5&rid=giphy.gif&ct=g';

    let obj = {
        id,
        title,
        url
    };

    let wrapper = shallow(<GitGridItem id={id} title={title} url={url} />);
    //Es igual a:
    //let wrapper = shallow(<GitGridItem {...obj} />);

    test('Debe mostrar el componente correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe tener un parráfo con el título', () => {
        const p = wrapper.find('p');  //Busca Parrafo
        expect( p.text().trim()).toBe( title ); //Compara texto de párrafo con el título enviado
    });

    test('Debe el src del imagen igual al url que se envía como parámetro, de igual manera con alt', () => {
        const img = wrapper.find('img');
        //console.log( img.html() );  //Retorna el html de image

        //console.log( img.props() );   //Retorna las propiedades de image, por ejemplo src y alt

        const { src, alt } = img.props();
        // console.log('src', src);
        // console.log('alt', alt);

        expect( src ).toBe( url );
        expect( alt ).toBe( title );
    })

    test('Debe tener la clase css animate__bounce', () => {
        const div = wrapper.find('div');
        const { className } = div.props();
        console.log(className);

        expect(className).not.toMatch(/ animate__fadeIn/);
        expect(className).toMatch(/ animate__bounce/);      //ToMatch valida si un string contiene una expresión regular
        //Ejemplo Clase
        expect(className.includes('animate__bounce')).toBe(true);

    })

});




