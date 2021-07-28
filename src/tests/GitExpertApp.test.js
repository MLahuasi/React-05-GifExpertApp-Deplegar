import React from 'react';
import '@testing-library/jest-dom';

import { shallow } from 'enzyme';
import GitExpertApp from '../GitExpertApp'

describe('Test GitExpertApp', () => {

    let wrapper = shallow(<GitExpertApp />)

    test('Debe realizar una captura ', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe mostrar una lista de categorias', () => {
        const lista = ['metallica', 'iron maiden','megadeth'];

        let wrapper = shallow(<GitExpertApp defaultCategorias={lista}/>)
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(lista.length);
    });

})
