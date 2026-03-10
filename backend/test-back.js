import {
  getArtistsByDate,
  getScenesByName,
  getArtistsAlphabetical,
  getArtistById,
  getSceneById,
  getArtistsBySceneId,
  getArtistsBySceneName
} from './backend.mjs';

async function test() {
  try {
    console.log('--- Artistes triés par date ---');
    console.log(await getArtistsByDate());

    console.log('--- Scènes triées par nom ---');
    console.log(await getScenesByName());

    console.log('--- Artistes triés alphabétiquement ---');
    console.log(await getArtistsAlphabetical());

    const artistId = 'eb4sgy4bjnlh7fy'; // remplace si besoin
    const sceneId = 'z5x154i0yz7i3p1';  // remplace si besoin
    const sceneName = 'Scène 1';

    console.log('--- Artiste par ID ---');
    console.log(await getArtistById(artistId));

    console.log('--- Scène par ID ---');
    console.log(await getSceneById(sceneId));

    console.log('--- Artistes par ID de scène ---');
    console.log(await getArtistsBySceneId(sceneId));

    console.log('--- Artistes par nom de scène ---');
    console.log(await getArtistsBySceneName(sceneName));

  } catch (error) {
    console.error('Erreur :', error);
  }
}

test();