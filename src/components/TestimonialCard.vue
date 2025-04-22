<script setup>
defineProps({
  testimonial: {
    type: Object,
    required: true
  }
})

// Function to generate stars based on rating
const generateStars = (rating) => {
  return '★'.repeat(Math.floor(rating)) + '☆'.repeat(5 - Math.floor(rating))
}
</script>

<template>
  <div class="testimonial-card">
    <div class="testimonial-quote">"</div>
    <p class="testimonial-content">{{ testimonial.content }}</p>
    <div class="testimonial-rating">
      <span class="stars" v-html="generateStars(testimonial.rating)"></span>
    </div>
    <div class="testimonial-author">
      <div class="author-image">
        <img :src="testimonial.image" :alt="testimonial.name">
      </div>
      <div class="author-info">
        <h4>{{ testimonial.name }}</h4>
        <p>{{ testimonial.location }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.testimonial-card {
  background-color: var(--color-white);
  border-radius: var(--radius-lg);
  padding: 48px 32px 32px;
  text-align: center;
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  box-shadow: var(--shadow-md);
}

.testimonial-quote {
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 5rem;
  line-height: 0;
  color: var(--color-primary-light);
  opacity: 0.2;
}

.testimonial-content {
  font-size: 1.25rem;
  line-height: 1.6;
  margin-bottom: 24px;
  color: var(--color-dark);
  font-style: italic;
}

.testimonial-rating {
  margin-bottom: 24px;
}

.stars {
  color: var(--color-accent);
  font-size: 1.25rem;
  letter-spacing: 2px;
}

.testimonial-author {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
}

.author-image {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  overflow: hidden;
  border: 3px solid var(--color-primary-light);
}

.author-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.author-info h4 {
  font-weight: 600;
  margin-bottom: 4px;
  color: var(--color-dark);
}

.author-info p {
  color: var(--color-gray-dark);
  font-size: 0.875rem;
}

@media (max-width: 768px) {
  .testimonial-card {
    padding: 40px 24px 24px;
  }
  
  .testimonial-content {
    font-size: 1.125rem;
  }
}
</style>