<script setup>
    const route = useRoute();
    const id = route.params.id

</script>

<template>
    <div>Produit : {{ id }} </div>
</template>

