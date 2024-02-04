import Fuse from 'fuse.js'
import { useAsyncData } from '../../.nuxt/imports'

export const useSearchStore = defineStore('search', () => {
  const { find } = useStrapi()

  const { data:recipes, pending, error } = useAsyncData('recipes',
  () => find('recipes', {
    populate: '*'
  })
  )

  const query = ref('')
  const queryTags = ref<string[]>([])
  // TODO: Replace any with your Recipe type and change elements
  const elements = reactive<Array<any>>(recipes.value?.data || [])
  const keys = ['title', 'ingredients', 'tags']

  const setElements = (newElements: any) => {
    elements.push(...newElements)
  }

  const fuse = computed(() => new Fuse(Array.from(elements), {
    keys,
    threshold: 0.2,
  }))

  const results = computed(() => {
    if (!query.value)
      return Array.from(elements)
    return [...fuse.value.search(query.value).map(r => r.item)]
  })

  const sortedByTags = computed(() => {
    if(!queryTags.value.length) return results.value
    return results.value.filter(recipe => recipe.tags.some(tag => queryTags.value.includes(tag.slug)))
  })

  const resetTags = () => queryTags.value = []

  return { query, results, setElements, sortedByTags, resetTags, queryTags }
})
