<template>
  <div>
    <div class="hero">
      <h1>Stackmint Studio</h1>
      <p>Mobile apps for learning and saving</p>
    </div>

    <div class="app-grid">
      <router-link to="/multichoice" class="app-card">
        <span class="status">Live</span>
        <h2>Multichoice</h2>
        <p>Test your knowledge with multiple-choice questions. Challenge yourself and track your progress.</p>
      </router-link>

      <router-link to="/sprout" class="app-card">
        <span class="status coming-soon">Coming Soon</span>
        <h2>Sprout</h2>
        <p>Smart savings tracking to help you grow your money. Set goals and watch your savings flourish.</p>
      </router-link>
    </div>
  </div>
</template>

<script setup>
</script>
