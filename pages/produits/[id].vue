<script >

export default {
  data() {
    return {
      valid:true,
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
      
      quantiteRule:[
        v => !!v || 'La quantité est requise',
        v => /^[0-9]+$/.test(v) || 'Veuillez entrer des chiffres entre 0-9',
      ],
      nomRule:[
        v => !!v || 'Le nom est requis',
        v => /^[^&!|()?{}"+=\\/_-]*$/.test(v) || 'Les caractères spéciaux ne sont pas autorisés',
      ]
    };
  },
  methods: {
    async modification() {
      const route = useRoute();
      if(!this.nomRule){
        console.log("Veuillez entrer un nom valid")
        return this.valid = false
      }

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
    <v-sheet max-width="400" class="mx-auto sheet" >
      <v-form @submit.prevent="submit"  v-model="valid">
    <v-text-field v-model="nom" :label="produit.nom" :rules="nomRule" type="text"></v-text-field>
    <v-select
        v-model="categorie"
        :items="items"
        :label="produit.categorie"
        required
      ></v-select>

    <v-text-field v-model="quantite" :label="produit.quantite.toString()" :rules="quantiteRule" type="number"></v-text-field>
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
          <v-btn class=" me-4 btn" type="submit"  @click="modification" :disabled="!valid"> Modifier </v-btn>
        </div>
    
  </v-form>
    </v-sheet>
  </v-container>
  
</template>

<style>
.sheet{
  margin-top: 1rem;
}
.btn{
  background-color: rgb(4, 42, 93);
  color: white;
}
</style>
