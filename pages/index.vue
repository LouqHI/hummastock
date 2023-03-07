<script setup>
/**
 * TO DO
 *    - Créer les redirections : 
 *            - check du token de connexion sinon redirection vers /user/connexion
 *            - si token présent => redirection vers /produits
 *            - laisser le template vide car cette page sert uniquement de point d'entrée + redirection
 */

import ListeproduitsVue from "../composants/Listeproduits.vue";
// export default {
//   components: {
//     ListeproduitsVue,
//   },
// };
</script>

<template>
  <div>
    <h1>Page Home</h1>
    <ListeproduitsVue />
  </div>
</template>


