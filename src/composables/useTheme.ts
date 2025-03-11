import { ref, watch } from 'vue'
import { usePreferredDark } from '@vueuse/core'

export function useTheme() {
  const isDark = ref(usePreferredDark().value)

  watch(isDark, (value) => {
    document.documentElement.classList.toggle('dark', value)
  }, { immediate: true })

  return {
    isDark,
    toggleTheme: () => isDark.value = !isDark.value
  }
}