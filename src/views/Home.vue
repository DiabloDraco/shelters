<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const stats = ref([
  { label: 'Приютов на платформе', value: '50+', icon: '🏠' },
  { label: 'Успешных пожертвований', value: '1,000+', icon: '💝' },
  { label: 'Счастливых животных', value: '500+', icon: '🐾' },
])

const features = ref([
  {
    title: 'Прозрачность',
    description: 'Все пожертвования напрямую поступают в приюты, без посредников',
    icon: '🔍'
  },
  {
    title: 'Безопасность',
    description: 'Проверенные приюты и защищенные платежи',
    icon: '🛡️'
  },
  {
    title: 'Удобство',
    description: 'Простой процесс пожертвования в несколько кликов',
    icon: '👆'
  },
  {
    title: 'Отчетность',
    description: 'Регулярные отчеты о том, как используются ваши пожертвования',
    icon: '📊'
  }
])

const testimonials = ref([
  {
    text: 'Благодаря платформе мы смогли собрать средства на новое оборудование для ветеринарного кабинета',
    author: 'Анна Петрова',
    role: 'Директор приюта "Добрые лапки"',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80'
  },
  {
    text: 'Теперь я могу легко помогать разным приютам и видеть, как используются мои пожертвования',
    author: 'Михаил Иванов',
    role: 'Постоянный донор',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80'
  }
])
</script>

<template>
  <div>
    <!-- Hero Section -->
    <div class="relative bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-800 dark:to-blue-600">
      <div class="absolute inset-0 bg-pattern opacity-10"></div>
      <div class="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
        <div class="text-center">
          <h1 class="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
            Помогите приютам для животных
          </h1>
          <p class="mt-6 max-w-2xl mx-auto text-xl text-blue-100">
            Прямые пожертвования приютам для животных. Прозрачно, безопасно и без посредников.
          </p>
          <div class="mt-10 flex justify-center gap-4">
            <RouterLink
              to="/shelters"
              class="px-8 py-3 text-lg font-medium rounded-lg text-blue-600 bg-white hover:bg-blue-50 transition-colors"
            >
              Помочь приюту
            </RouterLink>
            <RouterLink
              to="/donations"
              class="px-8 py-3 text-lg font-medium rounded-lg text-white border-2 border-white hover:bg-white/10 transition-colors"
            >
              История помощи
            </RouterLink>
          </div>
        </div>
      </div>
    </div>

    <!-- Stats Section -->
    <div class="bg-white dark:bg-gray-800 py-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <dl class="grid grid-cols-1 gap-6 sm:grid-cols-3">
          <div
            v-for="stat in stats"
            :key="stat.label"
            class="bg-blue-50 dark:bg-gray-700 rounded-lg p-6 text-center transform hover:scale-105 transition-transform"
          >
            <dt class="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">
              {{ stat.icon }}
            </dt>
            <dd class="text-3xl font-extrabold text-gray-900 dark:text-white">
              {{ stat.value }}
            </dd>
            <dd class="mt-2 text-lg text-gray-500 dark:text-gray-300">
              {{ stat.label }}
            </dd>
          </div>
        </dl>
      </div>
    </div>

    <!-- Features Section -->
    <div class="py-16 bg-gray-50 dark:bg-gray-900">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h2 class="text-3xl font-extrabold text-gray-900 dark:text-white">
            Почему нам доверяют?
          </h2>
        </div>
        <div class="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div
            v-for="feature in features"
            :key="feature.title"
            class="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
          >
            <div class="text-3xl mb-4">{{ feature.icon }}</div>
            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">
              {{ feature.title }}
            </h3>
            <p class="text-gray-500 dark:text-gray-300">
              {{ feature.description }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Testimonials Section -->
    <div class="py-16 bg-white dark:bg-gray-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-extrabold text-gray-900 dark:text-white">
            Отзывы о платформе
          </h2>
        </div>
        <div class="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div
            v-for="testimonial in testimonials"
            :key="testimonial.author"
            class="bg-gray-50 dark:bg-gray-700 rounded-lg p-8"
          >
            <div class="flex items-center mb-6">
              <img
                :src="testimonial.image"
                :alt="testimonial.author"
                class="w-12 h-12 rounded-full object-cover"
              >
              <div class="ml-4">
                <div class="font-medium text-gray-900 dark:text-white">
                  {{ testimonial.author }}
                </div>
                <div class="text-gray-500 dark:text-gray-300">
                  {{ testimonial.role }}
                </div>
              </div>
            </div>
            <p class="text-gray-600 dark:text-gray-200 italic">
              "{{ testimonial.text }}"
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- CTA Section -->
    <div class="bg-blue-600 dark:bg-blue-800">
      <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h2 class="text-3xl font-extrabold text-white mb-4">
            Готовы помочь?
          </h2>
          <p class="text-xl text-blue-100 mb-8">
            Присоединяйтесь к сообществу неравнодушных людей
          </p>
          <RouterLink
            to="/shelters"
            class="inline-block px-8 py-3 text-lg font-medium rounded-lg bg-white text-blue-600 hover:bg-blue-50 transition-colors"
          >
            Выбрать приют
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.bg-pattern {
  background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FFFFFF' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}
</style>