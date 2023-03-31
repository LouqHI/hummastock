import Produit from "~~/server/models/Produit.model";

// export default defineEventHandler(
//     async (event)=>{
//         const body = await readBody(event)
//         const produit= Produit.updateOne({},{...body, _id: event.params.id})
//         console.log(produit)

//     }
// )

/**
 * 
 * exports.updateProduit = (req, res, next) => {
    Produit.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
        .then(() => res.status(200).json({ message: 'Objet modifié !' }))
        .catch(error => res.status(400).json({ error }));
}
 */