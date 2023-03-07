<script>
/**
* TO DO
*      - Faire le formulaire
*      - Faire le POST vers /api/user/connexion
*      - Rediriger vers /produits si la réponse est succès
*      - Gérer les messages d'erreurs
*/
export default {
  name: "AuthView",
  data: () => ({
    valid: true,
    email: "",
    mailRules: [
      (v) => !!v || "Veuillez remplir ce champs",
      (v) =>
        /^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/.test(v) ||
        "Veuillez saisir un email valide",
    ],
    password: "",
    messageEmail: "",
    messagePassword: "",
    validForm: false,
  }),
  methods: {
    submit: function () {
      //Envoie message d'erreur si mail invalide
      if (this.email != "h.islamiya75@gmail.com") {
        this.messageEmail = "Ce mail n'est pas correct.";
      } else {
        this.messageEmail = "";
        this.validForm = true;
      }

      //Envoie message d'erreur si password invalide
      if (this.password != "5h@hâdA") {
        this.messagePassword = `Ce mot de passe n'est pas correct.`;
      } else {
        this.messagePassword = "";
        this.validForm = true;
      }

      //Si form valide, on envoie au back
      if (this.validForm == true) {
        /*
        this.$store
          .dispatch("connexion", {
            email: this.email,
            password: this.password,
          })
          .then(function () {*/
        return navigateTo("/produits");
        //});
      }
    },
  },
};
</script>

<template>
    <v-container class="home_auth">
      <img class="img" src="../static/logo.png" />
  
      <v-form
        ref="form"
        key="2"
        v-model="valid"
        lazy-validation
        class="d-flex align-content-center flex-column"
        method="POST"
      >
        <v-text-field
          v-model="email"
          :rules="mailRules"
          label="Entrez votre e-mail"
          required
          class="input"
          color="#042A5D"
        ></v-text-field>
  
        <v-text-field
          class="input"
          v-model="password"
          type="password"
          label="Entrez votre mot de passe"
          required
        ></v-text-field>
        <div class="error">
          {{ this.messageEmail }} <br />
          {{ this.messagePassword }}
        </div>
  
        <v-btn :disabled="!valid" class="v-btn" @click="submit">
          Connexion
        </v-btn>
      </v-form>
    </v-container>
  </template>   
  
  <style scoped>
  .home_auth {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;
    width: 100%;
  }
  form {
    width: 35rem;
    justify-content: center;
    align-items: center;
  }
  .input {
    width: 100%;
  }
  .img {
    height: 15rem;
    width: 13rem;
    margin-bottom: 2rem;
    max-height: 210px;
    max-width: 350px;
  }
  .v-btn {
    background-color: rgb(4, 42, 93);
    color: white;
  }
  .error {
    margin-bottom: 1rem;
  }
  
  @media only screen and (max-width: 600px) {
    form {
      width: 21rem;
    }
  }
  </style>