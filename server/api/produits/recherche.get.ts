import Produit from '../../models/Produit.model';
export default defineEventHandler(
    (event)=>  {
        const allProduits= async()=> await Produit.find();
        const recherche= getQuery(event)
        const nom=recherche.nom;
       return {nom:recherche.nom}
    }
)