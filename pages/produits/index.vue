<script setup>
/**
 * TO DO
 *    - Faire le refactor de cette balise avec script setup
 *    - Récupérer les produits sur /api/produits
 *    - Afficher les produits
 *    - Tester le responsive
 */

const { data: produits } = await useFetch("/api/produits");
const objet = ()=>console.log(produits)
</script>

<template>
  <v-container>
      <v-list>
        <v-list-item v-for="produit in produits.produits" :key="produit.id">
          <v-card class="mx-auto"  max-width="400">
          <v-card-title>{{ produit.nom }}</v-card-title>
          <v-card-subtitle>{{ produit.categorie }}</v-card-subtitle>
          <v-card-text>{{ produit.quantite }}</v-card-text>
          <v-card-text>{{ produit.lieu_de_stockage }}</v-card-text>
          </v-card>
        </v-list-item>
      </v-list>
      
  </v-container>
</template>
