import PocketBase from 'pocketbase';

const pbUrl = import.meta.env.POCKETBASE_URL || 'https://sae206.vicaire.optimiseus.fr';
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