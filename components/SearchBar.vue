<script setup>

const {data:allProduits}= await useFetch('/api/produits')
console.log(toRaw(allProduits.value))

</script>

<template>
    <v-autocomplete
        :items= "allProduits"
        label="Tapes ta recherche ici"
        prepend-icon="search"
        width="50"
        clearable
        variant="solo"   >
    </v-autocomplete>
</template>