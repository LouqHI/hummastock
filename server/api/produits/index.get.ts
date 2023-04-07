import Produit from '../../models/Produit.model';

export default defineEventHandler(
    async (event)=> await Produit.find()
)