<script lang="ts" setup>
const search = useSearchStore()
</script>

<template>
  <div class="container">
    <div class="my-4">
      <h1>Exemple de recherche avec Fuse.js</h1>
      <input v-model="search.search" placeholder="Chercher une recette" type="text">
      <pre v-if="search.results">{{ search.results }}</pre>
    </div>
  </div>
</template>
