<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const shelters = ref([
  {
    id: 1,
    name: 'Добрые лапки',
    city: 'Москва',
    type: ['cats', 'dogs'],
    image: 'https://images.unsplash.com/photo-1593871075120-982e042088d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    description: 'Приют для кошек и собак с большой территорией и опытными специалистами.',
    contacts: {
      phone: '+7 (999) 123-45-67',
      email: 'info@dobrie-lapki.ru'
    }
  },
  {
    id: 2,
    name: 'Пушистый друг',
    city: 'Санкт-Петербург',
    type: ['cats'],
    image: 'https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    description: 'Специализированный приют для кошек с домашней атмосферой.',
    contacts: {
      phone: '+7 (999) 765-43-21',
      email: 'info@pushistiy-drug.ru'
    }
  }
])

const cities = ref(['Все города', 'Москва', 'Санкт-Петербург'])
const types = ref(['Все животные', 'Кошки', 'Собаки'])
const selectedCity = ref('Все города')
const selectedType = ref('Все животные')

const filteredShelters = computed(() => {
  return shelters.value.filter(shelter => {
    const cityMatch = selectedCity.value === 'Все города' || shelter.city === selectedCity.value
    const typeMatch = selectedType.value === 'Все животные' || 
      (selectedType.value === 'Кошки' && shelter.type.includes('cats')) ||
      (selectedType.value === 'Собаки' && shelter.type.includes('dogs'))
    return cityMatch && typeMatch
  })
})

const navigateToShelter = (shelterId: number) => {
  router.push(`/shelters/${shelterId}`)
}
</script>

<template>
  <div class="py-8">
    <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-8">Приюты</h1>
    
    <!-- Filters -->
    <div class="mb-8 flex gap-4">
      <select
        v-model="selectedCity"
        class="rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
      >
        <option v-for="city in cities" :key="city">{{ city }}</option>
      </select>
      
      <select
        v-model="selectedType"
        class="rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
      >
        <option v-for="type in types" :key="type">{{ type }}</option>
      </select>
    </div>

    <!-- Shelters Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="shelter in filteredShelters"
        :key="shelter.id"
        class="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden cursor-pointer transform hover:scale-105 transition-transform"
        @click="navigateToShelter(shelter.id)"
      >
        <img :src="shelter.image" :alt="shelter.name" class="w-full h-48 object-cover">
        <div class="p-6">
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            {{ shelter.name }}
          </h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4">{{ shelter.description }}</p>
          <div class="text-sm text-gray-500 dark:text-gray-400">
            <p class="mb-1">🏠 {{ shelter.city }}</p>
            <p class="mb-1">📞 {{ shelter.contacts.phone }}</p>
            <p>📧 {{ shelter.contacts.email }}</p>
          </div>
          <button class="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md">
            Помочь приюту
          </button>
        </div>
      </div>
    </div>
  </div>
</template>