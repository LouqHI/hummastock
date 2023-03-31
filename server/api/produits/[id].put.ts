
import Produit from '~~/server/models/Produit.model';

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const produitId= event.context?.params?.id;

  try {
    await Produit.findByIdAndUpdate(produitId,body);
    return {message: "Ce produit a été mis à jour"}
  } catch (e){
    throw createError({ statusCode: 400, statusMessage:"Impossible de mettre à jour le produit"})
  }
 
});



