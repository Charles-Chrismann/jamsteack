import Fuse from 'fuse.js'
import { recipesMock } from '~/mocks/recipes.mock'

export const useSearchStore = defineStore('search', () => {
  const search = ref('')
  // TODO: Replace any with your Recipe type and change elements
  const elements = reactive<Array<any>>(recipesMock)
  const keys = ['title', 'ingredients', 'tags']

  const setElements = (newElements: any) => {
    elements.push(...newElements)
  }

  const fuse = computed(() => new Fuse(Array.from(elements), {
    keys,
    threshold: 0.2,
  }))

  const results = computed(() => {
    if (!search.value)
      return Array.from(elements)
    return [...fuse.value.search(search.value).map(r => r.item)]
  })

  return { search, results, setElements }
})
