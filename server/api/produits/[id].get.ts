import Produit from "~~/server/models/Produit.model";

export default defineEventHandler(
    async (event)=>{
        const body = await readBody(event);
        const produit = await Produit.findById(body._id)
        return {produit}
    }
)