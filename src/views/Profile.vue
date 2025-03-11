<script setup lang="ts">
import { ref } from 'vue'

const user = ref({
  name: 'Иван Иванов',
  email: 'ivan@example.com',
  role: 'donor',
  totalDonations: 1500,
  joinedDate: '2024-01-15'
})

const isEditing = ref(false)
const editedUser = ref({ ...user.value })

const saveChanges = () => {
  user.value = { ...editedUser.value }
  isEditing.value = false
}
</script>

<template>
  <div class="py-8">
    <div class="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
      <div class="px-6 py-8">
        <div class="flex justify-between items-center mb-6">
          <h1 class="text-3xl font-bold text-gray-900 dark:text-white">Профиль</h1>
          <button
            @click="isEditing = !isEditing"
            class="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md"
          >
            {{ isEditing ? 'Отменить' : 'Редактировать' }}
          </button>
        </div>

        <div class="space-y-6">
          <div v-if="!isEditing">
            <div class="grid grid-cols-1 gap-6">
              <div>
                <h3 class="text-sm font-medium text-gray-500 dark:text-gray-400">Имя</h3>
                <p class="mt-1 text-lg text-gray-900 dark:text-white">{{ user.name }}</p>
              </div>
              <div>
                <h3 class="text-sm font-medium text-gray-500 dark:text-gray-400">Email</h3>
                <p class="mt-1 text-lg text-gray-900 dark:text-white">{{ user.email }}</p>
              </div>
              <div>
                <h3 class="text-sm font-medium text-gray-500 dark:text-gray-400">Роль</h3>
                <p class="mt-1 text-lg text-gray-900 dark:text-white capitalize">{{ user.role }}</p>
              </div>
              <div>
                <h3 class="text-sm font-medium text-gray-500 dark:text-gray-400">Всего пожертвований</h3>
                <p class="mt-1 text-lg text-gray-900 dark:text-white">{{ user.totalDonations }} ₽</p>
              </div>
              <div>
                <h3 class="text-sm font-medium text-gray-500 dark:text-gray-400">Дата регистрации</h3>
                <p class="mt-1 text-lg text-gray-900 dark:text-white">
                  {{ new Date(user.joinedDate).toLocaleDateString('ru-RU') }}
                </p>
              </div>
            </div>
          </div>

          <form v-else @submit.prevent="saveChanges" class="space-y-6">
            <div>
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Имя
              </label>
              <input
                type="text"
                v-model="editedUser.name"
                class="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
              >
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Email
              </label>
              <input
                type="email"
                v-model="editedUser.email"
                class="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
              >
            </div>
            <div>
              <button
                type="submit"
                class="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md"
              >
                Сохранить изменения
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>