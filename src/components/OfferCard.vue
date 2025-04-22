<script setup>
defineProps({
  offer: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="offer-card">
    <div class="offer-image">
      <img :src="offer.image" :alt="offer.title">
      <div class="offer-badge">{{ offer.discount }}</div>
    </div>
    <div class="offer-content">
      <h3>{{ offer.title }}</h3>
      <p>{{ offer.description }}</p>
      <div class="offer-expiry">
        <span class="expiry-label">Valid until:</span>
        <span class="expiry-date">{{ offer.expiry }}</span>
      </div>
      <button class="btn-secondary">View Offer</button>
    </div>
  </div>
</template>

<style scoped>
.offer-card {
  background-color: var(--color-white);
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-md);
  height: 100%;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.offer-card:hover {
  transform: translateY(-10px);
  box-shadow: var(--shadow-lg);
}

.offer-image {
  position: relative;
  height: 200px;
  overflow: hidden;
}

.offer-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
}

.offer-card:hover .offer-image img {
  transform: scale(1.1);
}

.offer-badge {
  position: absolute;
  top: 16px;
  left: 16px;
  background-color: var(--color-secondary);
  color: var(--color-white);
  padding: 6px 12px;
  border-radius: var(--radius-full);
  font-weight: 700;
  font-size: 0.875rem;
  box-shadow: var(--shadow-sm);
}

.offer-content {
  padding: 24px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.offer-content h3 {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 8px;
  color: var(--color-dark);
}

.offer-content p {
  color: var(--color-gray-dark);
  margin-bottom: 16px;
  line-height: 1.5;
  flex-grow: 1;
}

.offer-expiry {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
  margin-bottom: 16px;
  padding: 8px 12px;
  background-color: var(--color-light);
  border-radius: var(--radius-md);
}

.expiry-label {
  font-size: 0.875rem;
  color: var(--color-gray-dark);
}

.expiry-date {
  font-weight: 600;
  color: var(--color-dark);
}

.offer-content button {
  width: 100%;
  margin-top: auto;
}
</style>