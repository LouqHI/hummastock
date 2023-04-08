import Produit from "~~/server/models/Produit.model";

export default defineEventHandler(
    async (event) => await Produit.find()
    
)