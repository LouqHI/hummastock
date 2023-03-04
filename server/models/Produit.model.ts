import {Schema, model} from "mongoose"


interface IProduit{
    nom:string;
    categorie: string;
    statut: string;
    quantite: number;
    lieu_de_stockage: string,
    date_creation:Date,
    derniere_modif:Date
}

const ProduitSchema= new Schema({
    nom:{
        type:String
    },
    categorie:{
        type:String
    },
    statut:{
        type:Boolean
    },
    quantite:{
        type: Number
    },
    lieu_de_stockage:{
        type:String
    },
    date_creation:{
        type:Date
    },
    derniere_modif:{
        type:Date
    }
})
const Produit= model<IProduit>('Produit',ProduitSchema);
export default Produit