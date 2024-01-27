import md from 'markdown-it'

export default defineNuxtPlugin(() => {
  return {
    provide: {
      md: md()
    }
  }
})
