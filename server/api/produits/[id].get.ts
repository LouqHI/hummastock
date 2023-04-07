import Produit from "~~/server/models/Produit.model";

async function getProduit(id: string) {
     const produit = await Produit.findById(id);
     return produit;
}

export default defineEventHandler(
    async (event) => {
        // @ts-ignore
    return getProduit(event.context.params.id);
})

