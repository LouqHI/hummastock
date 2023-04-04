<script setup>
/**
 * TO FIX:
 *  - utiliser une balise NuxtLink à la place d'une div
 *  - utiliser le composant v-bottom-navigation à la place de la balise footer
 */
const addproduit = () => {
    return navigateTo('/produits/nouveau')
}
</script>

<template>
    <footer>
        <div><Icon name="ic:baseline-add-circle" class="plus" @click="addproduit"/></div>
    </footer>

</template>

<style>
footer{
    position: fixed;
    z-index: 100;
    height: 3.5rem;
    bottom: 0px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #042a5d;
}
.plus{
    font-size: 2.5rem;
    color: white;
}
</style>