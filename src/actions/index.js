/* Un action de Redux va a contener dos elementos:

type: para indicar la acción que se va a ejecutar.
payload: es la información que estamos mandando al reducer.
Dentro de los reducers usaremos un switch para separar la lógica por cada tipo
 de acción que tendremos en Redux. */

export const setFavorite = (payload) => ({
	type: 'SET_FAVORITE',
	payload,
});

export const deleteFavorite = (payload) => ({
	type: 'DELETE_FAVORITE',
	payload,
});