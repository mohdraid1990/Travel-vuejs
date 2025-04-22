<script setup>
import { ref, onMounted } from 'vue';
import gsap from 'gsap';

const props = defineProps({
  service: {
    type: Object,
    required: true
  }
});

const cardRef = ref(null);

onMounted(() => {
  // Add hover animation
  if (cardRef.value) {
    const iconEl = cardRef.value.querySelector('.service-icon');
    
    cardRef.value.addEventListener('mouseenter', () => {
      gsap.to(iconEl, {
        y: -10,
        scale: 1.1,
        rotation: 5,
        duration: 0.3,
        ease: 'back.out'
      });
    });
    
    cardRef.value.addEventListener('mouseleave', () => {
      gsap.to(iconEl, {
        y: 0,
        scale: 1,
        rotation: 0,
        duration: 0.3,
        ease: 'back.out'
      });
    });
  }
});
</script>

<template>
  <div class="service-card" ref="cardRef">
    <div class="service-icon">{{ service.icon }}</div>
    <h3>{{ service.title }}</h3>
    <p>{{ service.description }}</p>
    <a href="#" class="service-link">Learn More</a>
  </div>
</template>

<style scoped>
.service-card {
  background-color: var(--color-white);
  border-radius: var(--radius-lg);
  padding: 32px 24px;
  text-align: center;
  box-shadow: var(--shadow-md);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.service-card:hover {
  transform: translateY(-10px);
  box-shadow: var(--shadow-lg);
}

.service-icon {
  font-size: 3rem;
  margin-bottom: 16px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: var(--color-light);
  color: var(--color-primary);
}

.service-card h3 {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 12px;
  color: var(--color-dark);
}

.service-card p {
  color: var(--color-gray-dark);
  margin-bottom: 16px;
  line-height: 1.5;
}

.service-link {
  display: inline-block;
  color: var(--color-primary);
  font-weight: 500;
  position: relative;
}

.service-link::after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  bottom: -4px;
  left: 0;
  background-color: var(--color-primary);
  transition: width 0.3s ease;
}

.service-link:hover::after {
  width: 100%;
}
</style>