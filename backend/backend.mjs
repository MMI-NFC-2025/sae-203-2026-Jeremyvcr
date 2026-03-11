import PocketBase from 'pocketbase';

const pb = new PocketBase('https://sae206.vicaire.optimiseus.fr:4043');

// 1. Liste de tous les artistes triés par date de représentation
export async function getArtistsByDate() {
  return await pb.collection('performances').getFullList({
    sort: 'date_et_heure',
    expand: 'artistes,scene',
  });
}

// 2. Liste de toutes les scènes triées par nom
export async function getScenesByName() {
  return await pb.collection('scene').getFullList({
    sort: 'nom',
  });
}

// 3. Liste de tous les artistes triés par ordre alphabétique
export async function getArtistsAlphabetical() {
  return await pb.collection('artistes').getFullList({
    sort: 'nom',
  });
}

// 4. Infos d’un artiste par id
export async function getArtistById(id) {
  return await pb.collection('artistes').getOne(id);
}

// 5. Infos d’une scène par id
export async function getSceneById(id) {
  return await pb.collection('scene').getOne(id);
}

// 6. Tous les artistes d’une scène par id, triés par date
export async function getArtistsBySceneId(sceneId) {
  return await pb.collection('performances').getFullList({
    filter: `scene="${sceneId}"`,
    sort: 'date_et_heure',
    expand: 'artiste,scene',
  });
}

// 7. Tous les artistes d’une scène par nom, triés par date
export async function getArtistsBySceneName(sceneName) {
  const scene = await pb.collection('scene').getFirstListItem(`nom="${sceneName}"`);

  return await pb.collection('performances').getFullList({
    filter: `scene="${scene.id}"`,
    sort: 'date_et_heure',
    expand: 'artiste,scene',
  });
}

// 8. Ajouter ou modifier artiste ou scène
export async function saveItem(collectionName, data, id = null) {
  if (id) {
    return await pb.collection(collectionName).update(id, data);
} else{
  return await pb.collection(collectionName).create(data);
}}