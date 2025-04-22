<script setup>
defineProps({
  post: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="blog-card">
    <div class="blog-image">
      <img :src="post.image" :alt="post.title">
      <div class="blog-category">{{ post.category }}</div>
    </div>
    <div class="blog-content">
      <div class="blog-date">{{ post.date }}</div>
      <h3>{{ post.title }}</h3>
      <p>{{ post.excerpt }}</p>
      <a href="#" class="blog-link">Read More</a>
    </div>
  </div>
</template>

<style scoped>
.blog-card {
  background-color: var(--color-white);
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-md);
  height: 100%;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.blog-card:hover {
  transform: translateY(-10px);
  box-shadow: var(--shadow-lg);
}

.blog-image {
  position: relative;
  height: 200px;
  overflow: hidden;
}

.blog-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
}

.blog-card:hover .blog-image img {
  transform: scale(1.1);
}

.blog-category {
  position: absolute;
  top: 16px;
  left: 16px;
  background-color: var(--color-primary);
  color: var(--color-white);
  padding: 6px 12px;
  border-radius: var(--radius-full);
  font-weight: 500;
  font-size: 0.75rem;
  box-shadow: var(--shadow-sm);
}

.blog-content {
  padding: 24px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.blog-date {
  font-size: 0.875rem;
  color: var(--color-gray-dark);
  margin-bottom: 8px;
}

.blog-content h3 {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 12px;
  color: var(--color-dark);
  line-height: 1.4;
}

.blog-content p {
  color: var(--color-gray-dark);
  margin-bottom: 16px;
  line-height: 1.5;
  flex-grow: 1;
}

.blog-link {
  color: var(--color-primary);
  font-weight: 500;
  display: inline-block;
  position: relative;
  align-self: flex-start;
}

.blog-link::after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  bottom: -4px;
  left: 0;
  background-color: var(--color-primary);
  transition: width 0.3s ease;
}

.blog-link:hover::after {
  width: 100%;
}
</style>