<script lang="ts" setup>
const { find } = useStrapi4()
const search = useSearchStore()

const { data: tags } = useAsyncData(
  'tags',
  () => find<{ data: any[] }>('tags')
)

function addTag(tag) {
  if (!search.queryTags.includes(tag)) search.queryTags.push(tag)
  else search.queryTags = search.queryTags.filter(t => t !== tag)
console.log(search.queryTags.includes(tag))
}

</script>

<template>
  <div class="container">
    <div class="flex flex-col items-center gap-y-4">
      <!-- <h1>Démarrage Nuxt Strapi</h1>
      <div class="flex gap-x-4">
        <NuxtLink to="/start">
          Documentation
        </NuxtLink>
        <NuxtLink to="/exemple-recherche">
          Exemple de recherche
        </NuxtLink>

      </div> -->
      <p>Big flemme de faire du css</p>
    </div>
    <div>
      <input id="search" type="search" v-model="search.query">
      <div>
        <p>tags</p>
        <div class="flex gap-2 flex-wrap">
          <button
            v-for="tag in tags?.data" :key="tag.id"
            :class="{ 'bg-gray-900 text-white': search.queryTags.includes(tag.slug) }"
            :title="tag.name"
            class="py-1 px-2 bg-gray-200 text-gray-900 border-none cursor-pointer"
            @click="addTag(tag.slug)"
          >
            {{ tag.name }}
          </button>
        </div>
        <button @click="search.resetTags">
          reset tags
        </button>
      </div>
    </div>
    <div v-if="search.sortedByTags.length">
      <ul>
        <li v-for="recipe in search.sortedByTags" :key="recipe.id">
          <!-- <NuxtImg :src="recipe.img.url" /> -->
          <!-- {{ JSON.stringify(recipe.img) }} -->
          <NuxtLink :to="`/recettes/${recipe.slug}`">{{ recipe.title }}</NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<style>
pre,
code {
  font-family: Menlo, Monaco, "Courier New", monospace;
}

pre {
  padding: .5rem;
  line-height: 1.25;
  white-space: break-spaces;
  word-break: break-all;
}

@media print {
  *,
  *:before,
  *:after {
    background: transparent !important;
    color: #000 !important;
    box-shadow: none !important;
    text-shadow: none !important;
  }

  a,
  a:visited {
    text-decoration: underline;
  }

  a[href]:after {
    content: " (" attr(href) ")";
  }

  abbr[title]:after {
    content: " (" attr(title) ")";
  }

  a[href^="#"]:after,
  a[href^="javascript:"]:after {
    content: "";
  }

  pre,
  blockquote {
    border: 1px solid #999;
    page-break-inside: avoid;
  }

  thead {
    display: table-header-group;
  }

  tr,
  img {
    page-break-inside: avoid;
  }

  img {
    max-width: 100% !important;
  }

  p,
  h2,
  h3 {
    orphans: 3;
    widows: 3;
  }

  h2,
  h3 {
    page-break-after: avoid;
  }
}

a,
a:visited {
  color: #01ff70;
}

a:hover,
a:focus,
a:active {
  color: #2ecc40;
}

.retro-no-decoration {
  text-decoration: none;
}

html {
  font-size: 12px;
}

@media screen and (min-width: 32rem) and (max-width: 48rem) {
  html {
    font-size: 15px;
  }
}

@media screen and (min-width: 48rem) {
  html {
    font-size: 16px;
  }
}

body {
  line-height: 1.85;
}

p,
.retro-p {
  font-size: 1rem;
  margin-bottom: 1.3rem;
}

h1,
.retro-h1,
h2,
.retro-h2,
h3,
.retro-h3,
h4,
.retro-h4 {
  margin: 1.414rem 0 .5rem;
  font-weight: inherit;
  line-height: 1.42;
}

h1,
.retro-h1 {
  margin-top: 0;
  font-size: 3.998rem;
}

h2,
.retro-h2 {
  font-size: 2.827rem;
}

h3,
.retro-h3 {
  font-size: 1.999rem;
}

h4,
.retro-h4 {
  font-size: 1.414rem;
}

h5,
.retro-h5 {
  font-size: 1.121rem;
}

h6,
.retro-h6 {
  font-size: .88rem;
}

small,
.retro-small {
  font-size: .707em;
}

/* https://github.com/mrmrs/fluidity */

img,
canvas,
iframe,
video,
svg,
select,
textarea {
  max-width: 100%;
}

html,
body {
  background-color: #222;
  min-height: 100%;
}

html {
  font-size: 18px;
}

body {
  color: #fafafa;
  font-family: "Courier New";
  line-height: 1.45;
  margin: 6rem auto 1rem;
  max-width: 48rem;
  padding: .25rem;
}

pre {
  background-color: #333;
}

blockquote {
  border-left: 3px solid #01ff70;
  padding-left: 1rem;
}
</style>