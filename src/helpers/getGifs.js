export const getGifs = async( category ) => {
    
  const url = `https://api.giphy.com/v1/gifs/search?api_key=NYxAsZ4LEvi22y3GNVFx97KMA9PLvHK8&q=${encodeURI(category)}&limit=10`;
  
  const resp = await fetch( url );

  const respuestaJSon = await resp.json();
  const { data } = respuestaJSon;

  const gifs = data.map( img => {
    return{
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url
    }
  });

  return gifs;    
}