
import Produit from '~~/server/models/Produit.model';

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const produitId= event.context?.params?.id;

  try {
    await Produit.findByIdAndUpdate(produitId,body);
    return {message: "Ce produit a été mis à jour"}
  } catch (e){
    throw createError({ statusCode: 500, statusMessage:"Impossible de mettre à jour le produit"})
  }
 
});



/**
 *  const urlSearchParams = new URLSearchParams(event.url.split('?')[1]);
  const id = urlSearchParams.get('id');
  const produit = await Produit.findOneAndUpdate({ _id: id }, body, { new: true });
  console.log(produit);
  return { body: produit };
 */
/**
 * 
 * exports.updateProduit = (req, res, next) => {
    Produit.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
        .then(() => res.status(200).json({ message: 'Objet modifié !' }))
        .catch(error => res.status(400).json({ error }));
}
 */