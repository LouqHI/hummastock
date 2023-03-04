import Produit from "~~/server/models/Produit.model";

export default defineEventHandler(
    async(event)=>{
        const body= await readBody(event);

        try {
            await Produit.create(body)
            return {message: `"Le produit ${body.nom} a été créé`};
        } catch(e){ 
            return e
        }
    }
)