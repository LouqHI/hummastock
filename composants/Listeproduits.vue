<script>
/**
 * TO DO
 *    - Faire le refactor de cette balise avec script setup
 *    - Récupérer les produits sur /api/produits
 *    - Afficher les produits
 *    - Tester le responsive
 */
import SvgIcon from "@jamescoyle/vue-icon";
import { mdiMapMarker, mdiPencil, mdiPlusCircle } from "@mdi/js";

export default {
  components: {
    SvgIcon,
  },
  data() {
    return {
      pathMap: mdiMapMarker,
      pathPencil: mdiPencil,
      pathPlus: mdiPlusCircle,
    };
  },
  methods: {
    ajouterProduit() {
      return navigateTo("/produits/nouveau");
    },
  },
};
</script>

<template>
  <v-container class="produits">
    <svg-icon
      type="mdi"
      :path="pathPlus"
      @click="ajouterProduit"
      x-large
      class="add"
    ></svg-icon>
    <v-container class="container_cards">
      <v-card elevation="1" v-for="produit in produits" class="cards">
        <v-container class="column-text">
          <v-card-title>NOM</v-card-title>
          <v-card-subtitle>Catégorie</v-card-subtitle>
          <v-card-text>
            <svg-icon type="mdi" :path="pathMap"></svg-icon>Lieu</v-card-text
          >
        </v-container>
        <v-container class="column-icons">
          <v-card-title
            class="text-quantite"
            v-if="produit.quantite >= 3"
            style="background-color: green"
            >5</v-card-title
          >
          <v-card-title
            class="text-quantite"
            v-else-if="produit.quantite === 0"
            style="background-color: red"
            >0</v-card-title
          >
          <v-card-title
            class="text-quantite"
            v-else-if="produit.quantite <= 3"
            style="background-color: orange"
            >2</v-card-title
          >

          <svg-icon type="mdi" :path="pathPencil"></svg-icon>
        </v-container>
      </v-card>
    </v-container>
  </v-container>
</template>





<style scoped>
.v-container {
  width: 100%;
}
@media only screen and (min-width: 1280px) {
  .v-container {
    max-width: 100%;
  }
}
.column-icons {
  width: 17%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 0 0px 9px 0;
}
.column-text {
  width: 80%;
  display: flex;
  padding: 0;
  flex-direction: column;
}
.produits {
  position: absolute;
  top: 13rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100% !important;
  padding: 0;
}
.v-btn {
  background-color: #3949ab;
}

.cards {
  margin-bottom: 2rem;
  width: 89vw;
  display: flex;
  box-shadow: none;
  border: 1px solid gray;
  height: 17.5vh;
}
.v-card-text {
  display: flex;
  align-items: center;
  padding: 10px;
}
svg {
  margin-right: 6px;
}
.text-quantite {
  border: 1px solid white;
  text-align: center;
  width: 17vw;
  border-radius: 6px;
  height: 5vh;
  padding: 2px;
  color: white;
}
.add {
  margin-left: 1rem;
  height: 3rem;
  width: 2rem;
}
</style>