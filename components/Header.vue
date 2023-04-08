<script setup>

const {data:allProduits}= await useFetch('/api/produits', ['nom'])
//console.log(toRaw(allProduits.value))
</script>

<template>
    <v-container class="mb-10">
        <v-layout >
            <v-app-bar :elevation="3">
                    <NuxtLink to="/produits" class="mx-auto">
                        <v-img
                        class="mx-auto"
                        width="50"
                        max-width="80"
                        aspect-ratio="1/1"
                        cover
                        src="/logo-prd.png"
                        alt="Logo HUMMACTION"
                        ></v-img>
                    </NuxtLink>
            </v-app-bar>
        </v-layout>
    </v-container>

</template>


