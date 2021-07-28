import React from 'react';
import '@testing-library/jest-dom';
import { GifGrid } from '../../components/GifGrid';
import { shallow } from 'enzyme';

//Crear mock de useFetchGifs
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');


describe('Test GifGrid', () => {

    const categoria = 'MCU';


    /**
     * Inicializar Test
     */
    beforeEach(() => {
        jest.clearAllMocks();
    });


    test('Debe mostrar el control correctamente ', () => {
        //Invocar al mock
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });


        const wrapper = shallow(<GifGrid categoria={categoria} />);
        expect(wrapper).toMatchSnapshot();
    });

    test('Deben mostrase Items cuando se cragan las imágenes [useFetchGifs]', () => {

        const gifs = [
            {
            id: '1',
            title: 'ABC',
            url: 'https://localhost/imagen1.jpg'
            },
            {
                id: '2',
                title: 'DEF',
                url: 'https://localhost/imagen2.jpg'
            },
            {
                id: '3',
                title: 'GHI',
                url: 'https://localhost/imagen3.jpg'
            }
        ];

        //Invocar al mock
        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });

        const wrapper = shallow(<GifGrid categoria={categoria} />);
        expect( wrapper ).toMatchSnapshot();
    });

    test('Deben mostrase Items cuando se cragan las imágenes [useFetchGifs] SIN SnapShot', () => {

        const gifs = [
            {
                id: '4',
                title: 'JKL',
                url: 'https://localhost/imagen4.jpg'
            },
            {
                id: '5',
                title: 'MNO',
                url: 'https://localhost/imagen5.jpg'
            },
            {
                id: '6',
                title: 'PQR',
                url: 'https://localhost/imagen6.jpg'
            }
        ];

        //Invocar al mock
        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });

        const wrapper = shallow(<GifGrid categoria={categoria} />);

        expect(wrapper).toMatchSnapshot();
        expect( wrapper.find('p').exists() ).toBe(false);
        //Existen 3 elementos de tipo GitGridItem
        expect(wrapper.find('GitGridItem').length).toBe( gifs.length );
    });

})
