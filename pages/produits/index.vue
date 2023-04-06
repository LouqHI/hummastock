<script setup>
/**
 * TO DO
 *    - Tester le responsive
 */

const { data: produits } = await useFetch("/api/produits");
//const objet = ()=>console.log(produits)
</script>

<template>
  <v-container>
    <NuxtLink to="/produits" class="d-flex align-center justify-center mb-5 position-fixed background-white w-100  index">
      <v-img
      max-width="150"
      aspect-ratio="1/1 "
      cover
      src="/logo-prd.png"
      alt="Logo HUMMACTION"
      ></v-img>
    </NuxtLink>
    
      <v-list class="liste">
        <v-list-item v-for="produit in produits.produits" :key="produit.id" >
          <v-card class="mx-auto mb-4"  max-width="400">
            <v-container fluid class="pa-0">
              <v-row>
                <v-col cols="9"  > 
                  <v-card-title>{{ produit.nom }}</v-card-title>
                  <v-card-subtitle>{{ produit.categorie }}</v-card-subtitle>
                  <v-card-text><Icon name="map:postal-code" /> {{ produit.lieu_de_stockage }}</v-card-text>
                </v-col>
                <v-col cols="3"  v-if="produit.quantite > 3">
                  <v-card-text class="quantite-color-green">{{ produit.quantite }}</v-card-text>
                </v-col>
                <v-col cols="3" v-else-if="produit.quantite === 0">
                  <v-card-text class="quantite-color-red">{{ produit.quantite }}</v-card-text>
                </v-col>
                <v-col cols="3" v-else="produit.quantite < 3">
                  <v-card-text class="quantite-color-orange">{{ produit.quantite }}</v-card-text>
                </v-col>
              </v-row>
            </v-container>
          
          </v-card>
        </v-list-item>
      </v-list>
      
  </v-container>
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
.index{
  z-index: 100;
  background-color: white;
  top: 0px;
}
.v-container{
  padding: 0 !important;
}
.liste{
  margin-top: 10rem;
}
</style>