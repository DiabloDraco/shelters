<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { useTheme } from '../composables/useTheme'
import { MoonIcon, SunIcon, Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'

const { isDark, toggleTheme } = useTheme()
const isMenuOpen = ref(false)

const navigation = [
  { name: 'Главная', path: '/' },
  { name: 'Приюты', path: '/shelters' },
  { name: 'Пожертвования', path: '/donations' },
  { name: 'Профиль', path: '/profile' },
]
</script>

<template>
  <nav class="bg-white dark:bg-gray-800 shadow-lg">
    <div class="container mx-auto px-4">
      <div class="flex justify-between h-16">
        <div class="flex">
          <div class="flex-shrink-0 flex items-center">
            <RouterLink to="/" class="text-xl font-bold text-blue-600 dark:text-blue-400">
              ShelterCare
            </RouterLink>
          </div>
          <div class="hidden sm:ml-6 sm:flex sm:space-x-8">
            <RouterLink
              v-for="item in navigation"
              :key="item.name"
              :to="item.path"
              class="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400"
              active-class="border-b-2 border-blue-600 dark:border-blue-400"
            >
              {{ item.name }}
            </RouterLink>
          </div>
        </div>
        
        <div class="flex items-center">
          <button
            @click="toggleTheme"
            class="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <MoonIcon v-if="!isDark" class="h-6 w-6" />
            <SunIcon v-else class="h-6 w-6" />
          </button>
          
          <!-- Mobile menu button -->
          <div class="sm:hidden ml-3">
            <button
              @click="isMenuOpen = !isMenuOpen"
              class="p-2 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <Bars3Icon v-if="!isMenuOpen" class="h-6 w-6" />
              <XMarkIcon v-else class="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
      
      <!-- Mobile menu -->
      <div
        v-show="isMenuOpen"
        class="sm:hidden"
      >
        <div class="pt-2 pb-3 space-y-1">
          <RouterLink
            v-for="item in navigation"
            :key="item.name"
            :to="item.path"
            class="block px-3 py-2 rounded-md text-base font-medium text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700"
            active-class="bg-blue-50 dark:bg-gray-700 text-blue-600 dark:text-blue-400"
            @click="isMenuOpen = false"
          >
            {{ item.name }}
          </RouterLink>
        </div>
      </div>
    </div>
  </nav>
</template>