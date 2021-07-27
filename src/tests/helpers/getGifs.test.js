import '@testing-library/jest-dom';
import { getGifs } from '../../helpers/getGifs';

describe('Test Helpers.getGits (Fetch)', () => {

    let categoria = 'Goku';

    test(' debe traer 10 elementos', async () => {
        let gifs = await getGifs(categoria);
        //console.log(gifs);
        expect(gifs.length).toBe(10);
    });

    test(' debe traer 0 elementos si no se envía categoría', async () => {
        let gifs = await getGifs('');
        //console.log(gifs);
        expect(gifs.length).toBe(0);
    });

})
