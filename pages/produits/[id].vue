<script >

export default {
  data() {
    return {
      nom: "",
      categorie: "",
      quantite: null,
      lieu: "",
      items: [
        'Féculents',
        'Légumes',
        'Utilitaires',
        'Boissons',
        'Gâteaux',
        'Viandes',
        'Hygiène',
        'Fruits'
      ],
      itemslieu:[
        'Blanc-Mesnil',
        'Bagnolet'
      ],
    };
  },
  methods: {
    async modification() {
      const route = useRoute();
      await useFetch(`/api/produits/${route.params.id}`, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        method: "put",
        body: {
          message: "Produit modifié",
          nom: this.nom,
          categorie: this.categorie,
          statut: "true",
          quantite: this.quantite,
          lieu_de_stockage: this.lieu,
        },
      });
      return navigateTo('/produits')
    },
  },
};
</script>

<script setup>
const route = useRoute();
const { data: produit } = await useFetch(`/api/produits/${route.params.id}`);
</script>

<template>
  <v-container>
    <v-sheet max-width="400" class="mx-auto sheet">
      <form @submit.prevent="submit">
    <v-text-field v-model="nom" :label="produit.nom"></v-text-field>
    <v-select
        v-model="categorie"
        :items="items"
        :label="produit.categorie"
        required
      ></v-select>

    <v-text-field v-model="quantite" :label="produit.quantite.toString()" ></v-text-field>
    <v-select
        v-model="lieu"
        :items="itemslieu"
        :label="produit.lieu_de_stockage"
        required
      ></v-select>
        <div class="text-center">
          <v-btn class=" me-4"  >
            <NuxtLink to="/produits" style="text-decoration: none; color: black;">
              Annuler 
          </NuxtLink> 
        </v-btn>
          <v-btn class=" me-4" type="submit" color="success" @click="modification"> Modifier </v-btn>
        </div>
    
  </form>
    </v-sheet>
  </v-container>
  
</template>

<style>
.sheet{
  margin-top: 5rem;
}
</style>
