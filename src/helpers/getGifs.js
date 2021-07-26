/**
 * Retorna los Gits encontrados por categoría
 * @param {*} categoria
 * @returns Listado de Gits encontrados por categoría
 */
export const getGifs = async ( categoria ) => {


    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(categoria)}&limit=10&api_key=mlMy4TveF58ggED6NTgzPtrH1aPJYtBF`
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    });

    return gifs;

};