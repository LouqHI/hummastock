<script setup>
/**
 * TO DO
 *    - Tester le responsive
 *    - Fixer le logo => lorsqu'on swipe, il reste en haut et c'est juste la liste qui swipe
 */
const {data:produits}= await useFetch('/api/produits')
// console.log(produits)
const itemsRecherche = produits.value.map((p) => p.nom)
console.log(itemsRecherche)
</script>


<template>
  <div class="d-flex flex-column justify-center">
    <v-container fixed>
      <v-autocomplete
    :items= "itemsRecherche"
    item-text="itemsRecherche.title"
    label="Recherche ici"
    icon="mdi-magnify"
    clearable
    variant="solo"
    fixed
    >  </v-autocomplete>
    </v-container>


  <v-container class="d-flex flex-column justify-center pa-0">

  <v-list class="liste mb-10">
    <v-list-item v-for="produit in produits" :key="produit.id" >
      <v-card class="mx-auto mb-4"  max-width="400">
          <v-row>
            <v-col cols="8"  > 
              <v-card-title>{{ produit.nom }}</v-card-title>
              <v-card-subtitle>{{ produit.categorie }}</v-card-subtitle>
              <v-card-text><Icon name="map:postal-code" /> {{ produit.lieu_de_stockage }}</v-card-text>
            </v-col>
            <v-col cols="4"  v-if="produit.quantite > 3">
              <v-card-text class="quantite-color-green">{{ produit.quantite }}</v-card-text>
              <v-card-text class="pen">
                <NuxtLink :to="'/produits/'+ produit._id " style="color: black;">
                  <Icon name="material-symbols:edit-rounded"  />
              </NuxtLink>
            </v-card-text>
            </v-col>
            <v-col cols="4" v-else-if="produit.quantite === 0">
              <v-card-text class="quantite-color-red">{{ produit.quantite }}</v-card-text>
              <v-card-text class="pen">
                <NuxtLink :to="'/produits/'+ produit._id " style="color: black;">
                  <Icon name="material-symbols:edit-rounded" />
              </NuxtLink>
            </v-card-text>
            </v-col>
            <v-col cols="4" v-else="produit.quantite < 3">
              <v-card-text class="quantite-color-orange">{{ produit.quantite }}</v-card-text>
              <v-card-text class="pen">
                <NuxtLink :to="'/produits/'+ produit._id " style="color: black;">
                  <Icon name="material-symbols:edit-rounded" />
              </NuxtLink>
            </v-card-text>
            </v-col>
          </v-row>
      </v-card>
    </v-list-item>
  </v-list>  
  </v-container>
  </div>
</template>

<style>
.quantite-color-green, .quantite-color-orange, .quantite-color-red{
  color: white;
  text-align: center;
  border-radius: 10px;
}
.quantite-color-orange{
  background-color: orange;
}
.quantite-color-green{
  background-color: green;
}
.quantite-color-red{
  background-color: red;
}
/* .index{
  z-index: 100;
  background-color: white;
  top: 0px;
} */
/* .v-container{
  padding: 0 !important;
} */
.liste{
  /* margin-top: 5rem; */
  width: 100%;
}

.pen{
  margin-top: 1rem;
    text-align: center;
}
</style>
