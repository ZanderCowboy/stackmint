<template>
  <div>
    <div class="hero">
      <h1>Stackmint</h1>
      <p>Mobile apps for better decisions and smart savings</p>
    </div>

    <div class="app-grid">
      <router-link to="/multichoice" class="app-card multichoice-card">
        <div class="card-icon">
          <img src="/multichoice-icon.png" alt="Multichoice" />
        </div>
        <span class="status">Live</span>
        <h2>Multichoice</h2>
        <p>Organize your options, compare ideas, and make quick decisions with less effort.</p>
      </router-link>

      <router-link to="/sprout" class="app-card sprout-card">
        <div class="card-icon">
          <img src="/sprout-icon.png" alt="Sprout" />
        </div>
        <span class="status coming-soon">Coming Soon</span>
        <h2>Sprout</h2>
        <p>Smart savings tracking to help you grow your money. Set goals and watch your savings flourish.</p>
      </router-link>
    </div>
  </div>
</template>

<script setup>
</script>
