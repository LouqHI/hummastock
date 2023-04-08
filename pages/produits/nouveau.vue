<script >
/**
 * TO DO:
 *  - Center le formulaire sur la page
 *  
*/
import moment from "moment";
import "moment/locale/fr";

export default {
  data() {
    return {
      valid:true,
      nom: "",
      categorie: "",
      quantite: null,
      lieu: "",
      dateCreation: "",
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
    async validate() {
      const today = new Date();
      const dateObj = moment(today).add(1, "day").format("LL");
      this.dateCreation = dateObj;

      if(!this.nomRule){
        console.log("Veuillez entrer un nom valid")
        return this.valid = false
      }

      await useFetch("/api/produits/create", {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        method: "post",
        body: {
          message: "POST réussi",
          nom: this.nom,
          categorie: this.categorie,
          statut: "true",
          quantite: this.quantite,
          lieu_de_stockage: this.lieu,
          date_creation: this.dateCreation,
        },
      });
      return navigateTo('/produits')
    },
  },
};
</script>

<template>
  <v-container style=" width: 100%; display: flex;">
    <v-sheet max-width="335" class="mx-auto sheetNew " >
      <v-form @submit.prevent="submit" class="w-100" v-model="valid" >
    <v-text-field v-model="nom" label="Nom" :rules="nomRule" type="text"></v-text-field>
    <v-select
        v-model="categorie"
        :items="items"
        label="Catégories"
        required
      ></v-select>

    <v-text-field v-model="quantite" label="Quantité" :rules="quantiteRule" type="number"></v-text-field>
    <v-select
        v-model="lieu"
        :items="itemslieu"
        label="Lieu de stockage"
        required
      ></v-select>
        <div class="text-center">
          <v-btn class=" me-4"  >
            <NuxtLink to="/produits" style="text-decoration: none; color: black;">
              Annuler 
          </NuxtLink> 
        </v-btn>
          <v-btn class=" me-4" type="submit" @click="validate" color="success" :disabled="!valid"> Créer </v-btn>
        </div>
    
  </v-form>
    </v-sheet>
  </v-container>
  
</template>

<style>
.sheetNew{
  display: flex;
  justify-content: center;
  width: 100%;
  align-items: center;
}
form{
  width: 100%;
}

</style>

