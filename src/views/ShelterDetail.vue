<script setup lang="ts">
import { ref,computed } from 'vue'

const shelter = ref({
  id: 1,
  name: 'Добрые лапки',
  description: 'Приют для кошек и собак с большой территорией и опытными специалистами.',
  city: 'Москва',
  image: 'https://images.unsplash.com/photo-1593871075120-982e042088d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
  contacts: {
    phone: '+7 (999) 123-45-67',
    email: 'info@dobrie-lapki.ru',
    address: 'ул. Примерная, д. 123'
  },
  stats: {
    animals: 145,
    volunteers: 25,
    yearsActive: 5
  }
})

const expenses = ref([
  {
    id: 1,
    title: 'Закупка корма на февраль',
    amount: 75000,
    date: '2024-02-15',
    category: 'Питание',
    video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    description: 'Закупили сухой и влажный корм для кошек и собак на месяц'
  },
  {
    id: 2,
    title: 'Ветеринарные услуги',
    amount: 45000,
    date: '2024-02-10',
    category: 'Медицина',
    video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    description: 'Вакцинация и плановый осмотр животных'
  },
  {
    id: 3,
    title: 'Ремонт вольеров',
    amount: 120000,
    date: '2024-02-05',
    category: 'Инфраструктура',
    video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    description: 'Замена покрытия и утепление вольеров'
  }
])

const categories = ref([
  'Все расходы',
  'Питание',
  'Медицина',
  'Инфраструктура'
])

const selectedCategory = ref('Все расходы')

const filteredExpenses = computed(() => {
  if (selectedCategory.value === 'Все расходы') {
    return expenses.value
  }
  return expenses.value.filter(expense => expense.category === selectedCategory.value)
})

const totalDonations = computed(() => {
  return expenses.value.reduce((sum, expense) => sum + expense.amount, 0)
})
</script>

<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <!-- Shelter Header -->
    <div class="relative h-96 rounded-xl overflow-hidden mb-8">
      <img
        :src="shelter.image"
        :alt="shelter.name"
        class="w-full h-full object-cover"
      >
      <div class="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent"></div>
      <div class="absolute bottom-0 left-0 right-0 p-8">
        <h1 class="text-4xl font-bold text-white mb-2">{{ shelter.name }}</h1>
        <p class="text-xl text-white/90 mb-4">{{ shelter.description }}</p>
        <div class="flex items-center gap-4 text-white/80">
          <span>📍 {{ shelter.contacts.address }}</span>
          <span>📞 {{ shelter.contacts.phone }}</span>
          <span>📧 {{ shelter.contacts.email }}</span>
        </div>
      </div>
    </div>

    <!-- Shelter Stats -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
      <div class="bg-white dark:bg-gray-800 rounded-lg p-6 text-center shadow-md">
        <div class="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
          {{ shelter.stats.animals }}
        </div>
        <div class="text-gray-600 dark:text-gray-300">Животных под опекой</div>
      </div>
      <div class="bg-white dark:bg-gray-800 rounded-lg p-6 text-center shadow-md">
        <div class="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
          {{ shelter.stats.volunteers }}
        </div>
        <div class="text-gray-600 dark:text-gray-300">Волонтёров</div>
      </div>
      <div class="bg-white dark:bg-gray-800 rounded-lg p-6 text-center shadow-md">
        <div class="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
          {{ (totalDonations / 1000).toFixed(0) }}K ₽
        </div>
        <div class="text-gray-600 dark:text-gray-300">Собрано в этом месяце</div>
      </div>
    </div>

    <!-- Expenses Section -->
    <div class="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
      <div class="p-6">
        <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          Отчёты о расходах
        </h2>

        <!-- Category Filter -->
        <div class="flex gap-2 mb-6 overflow-x-auto pb-2">
          <button
            v-for="category in categories"
            :key="category"
            @click="selectedCategory = category"
            :class="[
              'px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap',
              selectedCategory === category
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
            ]"
          >
            {{ category }}
          </button>
        </div>

        <!-- Expenses List -->
        <div class="space-y-6">
          <div
            v-for="expense in filteredExpenses"
            :key="expense.id"
            class="bg-gray-50 dark:bg-gray-700 rounded-lg overflow-hidden"
          >
            <div class="p-6">
              <div class="flex justify-between items-start mb-4">
                <div>
                  <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {{ expense.title }}
                  </h3>
                  <p class="text-gray-600 dark:text-gray-300 mb-2">
                    {{ expense.description }}
                  </p>
                  <div class="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                    <span>📅 {{ new Date(expense.date).toLocaleDateString('ru-RU') }}</span>
                    <span>💰 {{ expense.amount.toLocaleString('ru-RU') }} ₽</span>
                    <span>🏷️ {{ expense.category }}</span>
                  </div>
                </div>
              </div>
              
              <!-- Video Report -->
              <div class="aspect-w-16 aspect-h-9 mt-4">
                <iframe
                  :src="expense.video"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                  class="w-full h-full rounded-lg"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Donation CTA -->
    <div class="mt-12 text-center">
      <button class="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg text-lg transition-colors">
        Сделать пожертвование
      </button>
    </div>
  </div>
</template>