<script>
import moment from "moment";
import "moment/locale/fr";

export default {
  data() {
    return {
      nom: "",
      categorie: "",
      quantite: "",
      lieu: "",
      dateCreation: "",
    };
  },
  methods: {
    async validate() {
      const today = new Date();
      const dateObj = moment(today).add(1, "day").format("LL");
      this.dateCreation = dateObj;

      await useFetch("http://localhost:3000/api/produits/create", {
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
    },
  },
};
</script>

<template>
  <form @submit.prevent="submit">
    <v-text-field v-model="nom" label="Nom"></v-text-field>

    <v-text-field v-model="categorie" label="Categorie"></v-text-field>

    <v-text-field v-model="quantite" label="Quantité"></v-text-field>
    <v-text-field v-model="lieu" label="Lieu de stockage"></v-text-field>

    <v-btn class="me-4" type="submit" @click="validate"> submit </v-btn>
  </form>
</template>

<style></style>