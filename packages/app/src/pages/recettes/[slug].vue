<script setup lang="ts">
const { findOne } = useStrapi4();

const route = useRoute()

const { data:recipe, pending } = useAsyncData(
  'recipe',
  () => findOne(`recipes/${route.params.slug}`)
)
</script>

<template>
  <div>
    <template v-if="pending">w8</template>
    <template v-if="recipe">
      <h1>{{ recipe.data.title }}</h1>
      <p>{{ recipe.data.description }}</p>
    </template>
  </div>
</template>