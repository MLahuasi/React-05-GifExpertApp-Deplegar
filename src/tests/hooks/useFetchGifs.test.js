import { renderHook } from '@testing-library/react-hooks'
import { useFetchGifs } from '../../hooks/useFetchGifs';

describe('Test useFetchGifs Hook', () => {

    test('Debe retornar el estado inicial ', async() => {
        //Usando pk para test de Hooks
        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('Goku'));

        //En useFetchGifs están definidos data, loading
        const { data, loading } = result.current;

        //Espera hasta que exista un cambio de estado, en este caso data y loading tienen el valor antes de cambio de estado
        await waitForNextUpdate();

        expect(data).toEqual([]);
        expect(loading).toBe(true);
    });

    test('Debe retornar un arreglo de imgs y el loading en false', async() => {
        //Usando pk para test de Hooks
        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('Goku'));

        //Espera hasta que exista un cambio de estado, para cargar data y loading
        await waitForNextUpdate();

        const { data, loading } = result.current;

        expect(data.length ).toEqual(10);
        expect(loading).toBe(false);

    });



})
