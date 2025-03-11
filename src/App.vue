<script setup lang="ts">
import { RouterView } from "vue-router";
import Navigation from "./components/Navigation.vue";
import { useTheme } from "./composables/useTheme";

const { isDark } = useTheme();
</script>

<template>
  <div :class="{ dark: isDark }" class="min-h-screen bg-white dark:bg-gray-900">
    <Navigation />
    <main class="container mx-auto px-4 py-8">
      <RouterView />
    </main>
  </div>
</template>
