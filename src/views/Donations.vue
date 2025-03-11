<script setup lang="ts">
import { ref } from 'vue'

const donations = ref([
  {
    id: 1,
    shelter: 'Добрые лапки',
    amount: 1000,
    date: '2024-02-20',
    status: 'completed'
  },
  {
    id: 2,
    shelter: 'Пушистый друг',
    amount: 500,
    date: '2024-02-19',
    status: 'completed'
  }
])
</script>

<template>
  <div class="py-8">
    <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-8">История пожертвований</h1>
    
    <div class="bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden">
      <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
        <thead class="bg-gray-50 dark:bg-gray-900">
          <tr>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
              Дата
            </th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
              Приют
            </th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
              Сумма
            </th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
              Статус
            </th>
          </tr>
        </thead>
        <tbody class="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
          <tr v-for="donation in donations" :key="donation.id">
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
              {{ new Date(donation.date).toLocaleDateString('ru-RU') }}
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
              {{ donation.shelter }}
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
              {{ donation.amount }} ₽
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                {{ donation.status }}
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>