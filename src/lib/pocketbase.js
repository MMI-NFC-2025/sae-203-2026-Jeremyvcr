import PocketBase from 'pocketbase';

const runtimeEnv = typeof process !== 'undefined' ? process.env : {};
const fallbackProdUrl = 'https://sae206.vicaire.optimiseus.fr';

const pbUrl =
  runtimeEnv.POCKETBASE_URL ||
  runtimeEnv.PUBLIC_POCKETBASE_URL ||
  import.meta.env.POCKETBASE_URL ||
  import.meta.env.PUBLIC_POCKETBASE_URL ||
  (import.meta.env.DEV ? 'https://sae206.vicaire.optimiseus.fr' : fallbackProdUrl);

export const pb = new PocketBase(pbUrl);

/**
 * Construit l'URL d'un fichier stocké dans PocketBase.
 * @param {object} record - L'enregistrement PocketBase (doit avoir id et collectionId).
 * @param {string} filename - Le nom du fichier (valeur du champ file).
 * @returns {string|null}
 */
export function getImageUrl(record, filename) {
  if (!filename) return null;
  return `${pb.baseUrl}/api/files/${record.collectionId}/${record.id}/${filename}`;
}