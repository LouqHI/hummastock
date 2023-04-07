<script setup>
    const route = useRoute();

    const { data: produit } = await useFetch(`/api/produits/${route.params.id}`);
    console.log(produit)

    function modification(){
      
        useFetch(`http://localhost:3000/api/produits/${route.params.id}`, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        method: "put",
        body: {
          message: "PUT réussi",
          nom: this.nom,
          categorie: this.categorie,
          statut: "true",
          quantite: this.quantite,
          lieu_de_stockage: this.lieu,
          date_creation: this.dateCreation,
        },
      });
      return navigateTo('/produits')
    
    }
</script>

<template>
    <v-container>
          <div class="d-flex align-center justify-center mb-5">
        <v-img
        max-width="150"
        aspect-ratio="1/1 " 
        cover
        src="/logo-prd.png"
        alt="Logo HUMMACTION"
        ></v-img>
      </div>
  
      <v-sheet max-width="400" class="mx-auto" v-for="item in produit" :key="produit._id">
        
        <form @submit.prevent="submit">
            {{ item }}

      <v-text-field v-model="nom" :label="item.nom" :rules="nomRule"></v-text-field>
      <v-select
          v-model="categorie"
          :items="items"
          :label="item.categorie"
          required
        ></v-select>
  
      <v-text-field v-model="quantite" :label="item.quantite" :rules="quantiteRule"></v-text-field>
      <v-select
          v-model="lieu"
          :items="itemslieu"
          :label="item.lieu_de_stockage"
          required
        ></v-select>
          <div class="text-center">
            <v-btn class=" me-4" type="submit" @click="modification" color="success"> submit </v-btn>
          </div>
      
    </form>
      </v-sheet>
    </v-container>
    
  </template>

