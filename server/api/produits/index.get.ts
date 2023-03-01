import {Schema, model} from "mongoose"

const ProduitSchema= new Schema({
    nom:{
        type:String
    },
    quantite:{
        type: Number
    },
})

export const Produit= model<any>('Produit',ProduitSchema);

export default defineEventHandler(
    async (event)=>{
        const produits = await Produit.find();
        return {
            produits
        }
    }
)