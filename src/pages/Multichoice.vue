<template>
  <div class="multichoice-page">
    <div class="bg-shape bg-shape-left" aria-hidden="true"></div>
    <div class="bg-shape bg-shape-right" aria-hidden="true"></div>

    <div class="page-content">
      <section class="hero" aria-labelledby="hero-title">
        <div class="hero-copy">
          <p class="eyebrow">MultiChoice App</p>
          <h1 id="hero-title">One Place For Your Everyday Decisions</h1>
          <p class="description">
            MultiChoice helps you organize your options, compare ideas, and make quick
            decisions with less effort. It is simple, fast, and designed for everyday use.
          </p>

          <a 
            class="play-button"
            href="https://play.google.com/store/apps/details?id=co.za.zanderkotze.multichoice" 
            target="_blank"
            rel="noopener noreferrer" 
            aria-label="Get MultiChoice on Google Play"
          >
            <img 
              src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
              alt="Get it on Google Play"
            >
          </a>

          <p class="meta">Available on Google Play.</p>
        </div>

        <figure class="hero-image-wrap" aria-label="App previews">
          <div class="phone-shot shot-back">
            <img src="/vertical_light.png" alt="MultiChoice light mode preview" class="preview-mobile">
          </div>
          <div class="phone-shot shot-front">
            <img src="/horizontal_dark.png" alt="MultiChoice dark mode board preview" class="preview-board">
          </div>
        </figure>
      </section>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.multichoice-page {
  --bg: #0a1324;
  --surface: #111c31;
  --text: #e9f1ff;
  --muted: #b7c6dc;
  --brand: #9fc1f3;
  --accent: #f4a259;
  --ring: rgba(159, 193, 243, 0.32);
  
  background: radial-gradient(circle at 24% 10%, #1a2a48 0%, var(--bg) 42%, #060d1b 100%);
  color: var(--text);
  min-height: calc(100vh - 180px);
  position: relative;
  overflow: hidden;
  margin: 0 -2rem;
  padding: 0 2rem;
}

.page-content {
  width: min(1100px, 100%);
  margin: 0 auto;
  min-height: calc(100vh - 180px);
  display: flex;
  align-items: center;
}

.hero {
  width: 100%;
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 2.5rem;
  align-items: center;
  padding: 2rem 0;
}

.eyebrow {
  margin: 0;
  font-size: 0.85rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  font-weight: 700;
  color: var(--brand);
}

.hero h1 {
  margin: 0.5rem 0 0;
  font-size: clamp(2rem, 5.2vw, 3.5rem);
  line-height: 1.08;
  max-width: 18ch;
  color: var(--text);
}

.description {
  margin: 1.2rem 0 0;
  font-size: clamp(1rem, 1.45vw, 1.2rem);
  line-height: 1.6;
  color: var(--muted);
  max-width: 58ch;
}

.play-button {
  display: inline-flex;
  margin-top: 1.3rem;
  border: 0;
  border-radius: 0;
  box-shadow: none;
  background: transparent;
  transition: transform 180ms ease;
  cursor: pointer;
}

.play-button:focus-visible {
  outline: 3px solid var(--ring);
  outline-offset: 4px;
}

.play-button:hover {
  transform: translateY(-2px);
}

.play-button img {
  height: 72px;
  width: auto;
  display: block;
  filter: drop-shadow(0 8px 16px rgba(6, 12, 23, 0.35));
  transition: filter 180ms ease;
}

.play-button:hover img {
  filter: drop-shadow(0 12px 20px rgba(6, 12, 23, 0.4));
}

.meta {
  margin: 0.8rem 0 0;
  font-size: 0.88rem;
  color: var(--muted);
}

.hero-image-wrap {
  margin: 0;
  padding: 0;
  position: relative;
  min-height: 560px;
  overflow: visible;
}

.phone-shot {
  position: absolute;
  border-radius: 0;
  overflow: hidden;
  background: transparent;
  border: 0;
  box-shadow: none;
}

.phone-shot img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: top center;
  border-radius: 0;
}

.shot-back {
  width: 52%;
  height: 92%;
  left: -2%;
  top: 2%;
  transform: rotate(-9deg);
  z-index: 1;
}

.shot-front {
  width: 64%;
  height: 94%;
  right: -6%;
  top: 5%;
  transform: rotate(8deg);
  z-index: 2;
}

.bg-shape {
  position: absolute;
  border-radius: 999px;
  z-index: 0;
  filter: blur(0.4px);
  pointer-events: none;
}

.bg-shape-left {
  width: 260px;
  height: 260px;
  left: -100px;
  top: 12%;
  background: radial-gradient(circle, rgba(244, 162, 89, 0.2) 0%, rgba(244, 162, 89, 0) 72%);
}

.bg-shape-right {
  width: 340px;
  height: 340px;
  right: -120px;
  bottom: 10%;
  background: radial-gradient(circle, rgba(125, 166, 223, 0.2) 0%, rgba(125, 166, 223, 0) 72%);
}

.hero-copy {
  opacity: 0;
  transform: translateY(16px);
  animation: riseIn 560ms ease forwards;
}

.hero-image-wrap {
  opacity: 0;
  transform: translateY(16px);
  animation: riseIn 620ms ease 80ms forwards;
}

@keyframes riseIn {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 920px) {
  .hero {
    grid-template-columns: 1fr;
    gap: 1.4rem;
    padding: 1.5rem 0 2.5rem;
  }

  .hero-copy {
    order: 2;
  }

  .hero-image-wrap {
    order: 1;
    min-height: 520px;
  }

  .shot-back {
    width: 70%;
    height: 88%;
    left: -4%;
    top: 4%;
    transform: rotate(-6deg);
  }

  .shot-front {
    width: 78%;
    height: 90%;
    right: -6%;
    top: 10%;
    transform: rotate(6deg);
  }

  .play-button img {
    height: 66px;
  }
}

@media (max-width: 640px) {
  .multichoice-page {
    margin: 0 -1rem;
    padding: 0 1rem;
  }
}
</style>
