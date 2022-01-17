import '../../helpers/getGifs';
import { getGifs } from '../../helpers/getGifs';

describe( 'Pruebas en getGifs Fetch', () => {

  // Probando la función getGifs, fíjate que la prueba la hemos de convertir a async !!!
  test( 'debe de traer elementos', async () => {
    console.log('ajkaajjkajajaajjajajajajajj');
    const gifs = await getGifs('One Punch');
    expect(gifs.length).toBe(10);
  });

});