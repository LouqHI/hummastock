import Produit from '../../models/Produit.model';

export default defineEventHandler(
    async (event)=>{
        const produits = await Produit.find();
        return {
            produits
        }
    }
)