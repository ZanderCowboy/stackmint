<template>
  <div id="app">
    <nav class="nav">
      <router-link to="/" class="logo-link">
        <span class="brand">Stackmint</span>
      </router-link>
      <div class="nav-links">
        <router-link to="/multichoice">Multichoice</router-link>
        <router-link to="/sprout">Sprout</router-link>
        <router-link to="/privacy">Privacy</router-link>
      </div>
    </nav>
    <main class="main">
      <router-view />
    </main>
    <footer class="footer">
      <p>&copy; 2026 Stackmint. <a href="mailto:hello@stackmint.app">hello@stackmint.app</a></p>
    </footer>
  </div>
</template>

<script setup>
</script>

<style scoped>
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.logo-link {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #fff;
}

.brand {
  font-size: 1.25rem;
  font-weight: 600;
  letter-spacing: -0.02em;
}

.nav-links {
  display: flex;
  gap: 2rem;
}

.nav-links a {
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  transition: color 0.2s;
  font-size: 0.95rem;
}

.nav-links a:hover,
.nav-links a.router-link-active {
  color: #5eead4;
}

.main {
  min-height: calc(100vh - 180px);
}

.footer {
  padding: 2rem;
  text-align: center;
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.875rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  margin-top: 4rem;
}

.footer a {
  color: #5eead4;
  text-decoration: none;
}

.footer a:hover {
  text-decoration: underline;
}
</style>
