<template>
  <section class="font-sans w-2/3 mx-auto">
    <div class="container">
      <div class="md-container" v-html="$md.render(mdStart)"></div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import mdStart from '~/contents/start.md?raw'
</script>

<style>
.md-container pre {
  background-color: #f5f5f5;
  border-radius: 0.5rem;
  padding: 1rem;
  @apply font-mono;
}

.md-container code {
  @apply font-mono;
  background-color: #f5f5f5;
  padding: 0.25rem 0;
}

.md-container li {
  margin: 1rem 0;
  line-height: 1.5;
}

.md-container table {
  width: 100%;
}

.md-container thead {
  background-color: #f5f5f5;
}

.md-container table, .md-container th, .md-container td {
  border: 1px solid black;
  border-collapse: collapse;
  padding: 0.5rem;
}

.md-container th {
  text-align: left;
}
</style>
