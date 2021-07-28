import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { AddCategoria } from "../../components/AddCategoria";


describe('Test AddCategoria', () => {

    // const setCategorias = () => {};
    console.log('Se configura setCategorias (jest.fn)):');
    const setCategorias = jest.fn();
    console.log('setCategorias');
    console.log('Se inicializa AddCategoría');
    let wrapper = shallow(<AddCategoria setCategorias={setCategorias}/>);

    /**
     * Ejecutar antes de todo
     */
    beforeEach(() => {
        console.log('Ejecutar antes de Todo');
        console.log('Se limpia los Mocks de jest');
        jest.clearAllMocks();   //Limpiar pruebas
        console.log('Inicializar AddCategoría');
        wrapper = shallow(<AddCategoria setCategorias={setCategorias} />);
    });

    /**
     * Hacer una captura de pantalla
     */
    test('debe mostrarse correctamente ', () => {
        console.log('***** TEST 1 *****');
        console.log('Se realiza captura de pantalla');
        expect(wrapper).toMatchSnapshot();
    });

    /**
     * Evaluar evento handleInputChange
     */
    test('debe cambiar la caja de texto ', () => {
        console.log('***** TEST 2 *****');
        const input = wrapper.find('input');
        const value = 'Hola Mundo';
        console.log('Se llena en el input el valor Hola Mundo');
                       //Evento// // e = [e.target.value]//
        input.simulate('change',  { target: {value} });
        console.log('Se verifica si input tiene el valor Hola Mundo');
        expect(wrapper.find('p').text().trim()).toBe(value);

    });

    /**
     * Validar que no se ejecute el submmit si no se ingreso en la
     * caja de texto al menos 2 caracteres
     */
    test('NO debe postear la información submmit', () => {
        console.log('***** TEST 3 *****');
        const form = wrapper.find('form');
        console.log('Se ejecuta intenta realizar un submmit sin ingresar una categoría');
        form.simulate('submit', { preventDefault(){} });
        expect( setCategorias ).not.toHaveBeenCalled();
    });


    /**
     * Validar que se ejecute el submmit si se ingresó en la
     * caja de texto de más de 2 caracteres
     */
    test('SI debe postera la información submmit', () => {
        console.log('***** TEST 4 *****');
        let input = wrapper.find('input');
        const value = 'Nueva Categoría';
        console.log('Se llena el input con una nueva categoría');
        input.simulate('change', { target: { value } });

        console.log('Se ejecuta un submmit con una categoría asignada');
        const form = wrapper.find('form');
        form.simulate('submit', { preventDefault() { } });
        expect(setCategorias).toHaveBeenCalled();

        console.log('Se valida que la caja de texto se limpió después del submmit');
        input = wrapper.find('input');
        expect(input.prop('value')).toBe('');

    })


});
