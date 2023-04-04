import Produit from '../../models/Produit.model';

export default async function handler({ query }: { query: { q?: string } }) {
  const searchTerm = query.q ?? '';
  const produits = await Produit.find({ nom: { $regex: searchTerm, $options: 'i' } });
  return produits;
}
