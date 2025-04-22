<script setup>
import { ref } from 'vue'

const props = defineProps({
  item: {
    type: Object,
    required: true
  }
})

const showLightbox = ref(false)

const openLightbox = () => {
  showLightbox.value = true
  document.body.style.overflow = 'hidden'
}

const closeLightbox = () => {
  showLightbox.value = false
  document.body.style.overflow = ''
}
</script>

<template>
  <div class="gallery-item">
    <div class="gallery-image" @click="openLightbox">
      <img :src="item.image" :alt="item.caption">
      <div class="gallery-overlay">
        <div class="location">{{ item.location }}</div>
        <div class="caption">{{ item.caption }}</div>
        <div class="zoom-icon">🔍</div>
      </div>
    </div>
    
    <!-- Lightbox -->
    <div v-if="showLightbox" class="lightbox" @click.self="closeLightbox">
      <button class="close-btn" @click="closeLightbox">×</button>
      <div class="lightbox-content">
        <img :src="item.image" :alt="item.caption">
        <div class="lightbox-caption">
          <h3>{{ item.location }}</h3>
          <p>{{ item.caption }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.gallery-item {
  height: 100%;
}

.gallery-image {
  border-radius: var(--radius-md);
  overflow: hidden;
  position: relative;
  height: 280px;
  cursor: pointer;
  box-shadow: var(--shadow-sm);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.gallery-image:hover {
  transform: scale(1.02);
  box-shadow: var(--shadow-md);
}

.gallery-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
}

.gallery-image:hover img {
  transform: scale(1.1);
}

.gallery-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 16px;
  background: linear-gradient(0deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 100%);
  color: var(--color-white);
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.gallery-image:hover .gallery-overlay {
  opacity: 1;
  transform: translateY(0);
}

.location {
  font-weight: 600;
  margin-bottom: 4px;
}

.caption {
  font-size: 0.875rem;
  opacity: 0.9;
}

.zoom-icon {
  position: absolute;
  top: 16px;
  right: 16px;
  font-size: 1.5rem;
  opacity: 0.8;
}

/* Lightbox */
.lightbox {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
  padding: 24px;
}

.close-btn {
  position: absolute;
  top: 24px;
  right: 24px;
  background: none;
  border: none;
  color: var(--color-white);
  font-size: 2.5rem;
  cursor: pointer;
  z-index: 2001;
  box-shadow: none;
  padding: 0;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.close-btn:hover {
  color: var(--color-gray-light);
  background: none;
  box-shadow: none;
  transform: none;
}

.lightbox-content {
  max-width: 90%;
  max-height: 90%;
  position: relative;
}

.lightbox-content img {
  max-width: 100%;
  max-height: 80vh;
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-lg);
}

.lightbox-caption {
  margin-top: 16px;
  text-align: center;
  color: var(--color-white);
}

.lightbox-caption h3 {
  font-size: 1.25rem;
  margin-bottom: 8px;
}

.lightbox-caption p {
  opacity: 0.8;
}

@media (max-width: 768px) {
  .gallery-image {
    height: 220px;
  }
}
</style>