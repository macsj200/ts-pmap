import pMap from "p-map";
import { Swapi } from "./swapi"

const main = async () => {
  const swapi = new Swapi();
  // const filmData = await swapi.getFilm(1);
  const filmIds = [1, 2, 3, 4, 5, 6]; // Films 1-6
  const filmTitles = await pMap(filmIds, async (filmId) => {
    const filmData = await swapi.getFilm(filmId);
    return filmData.title;
  }, {});
  console.log(filmTitles);
}

main().catch((err) => console.error('Error', err)).then(() => console.log('Finished'));