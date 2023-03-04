<template>
  <div>
    <Connexion />
  </div>
</template>


<script>
/*
import { storeToRefs } from "pinia";
import { useLoginStore } from "~/stores/login";*/
import Connexion from "../components/Connexion.client.vue";

export default {
  components: {
    Connexion,
  },
  mounted() {
    console.log("Mon app index");
    /*const loginStore = useLoginStore();
    const { user: authUser } = storeToRefs(loginStore);

    if (authUser != -1) {
      console.log("Partir vers les produits");
    }*/
  },
};
</script>