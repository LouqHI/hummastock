

<template>
  <v-container class="produits">
    <v-container class="container_cards">
      <v-card elevation="1" class="cards" v-for="produit in produits">
        <v-container class="column-text">
          <v-card-title>{{ produit.nom }}</v-card-title>
          <v-card-subtitle>{{ produit.categorie }}</v-card-subtitle>
          <v-card-text>{{ produit.lieu }}</v-card-text>
        </v-container>
      </v-card>
    </v-container>
  </v-container>
</template>
<script setup>
const { data: produits } = await useFetch("/api/produits");
</script>