<script setup>
import { ref, onMounted } from 'vue'
import gsap from 'gsap'

const currentSlide = ref(0)
const totalSlides = 3

const slides = [
  {
    title: 'Discover the World\'s Beauty',
    subtitle: 'Extraordinary destinations, unforgettable experiences',
    image: 'https://images.unsplash.com/photo-1503220317375-aaad61436b1b',
    cta: 'Start Exploring'
  },
  {
    title: 'Adventure Awaits',
    subtitle: 'Create memories that last a lifetime',
    image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470',
    cta: 'Find Adventures'
  },
  {
    title: 'Luxury Travel Experiences',
    subtitle: 'Indulge in the finest accommodations and services',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945',
    cta: 'Luxury Packages'
  }
]

const goToSlide = (index) => {
  currentSlide.value = index
}

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % totalSlides
}

onMounted(() => {
  // Auto-advance slides
  const slideInterval = setInterval(nextSlide, 7000)
  
  // Hero animations
  gsap.from('.hero-content h1', {
    y: 50,
    opacity: 0,
    duration: 1,
    delay: 0.2
  })
  
  gsap.from('.hero-content p', {
    y: 50,
    opacity: 0,
    duration: 1,
    delay: 0.4
  })
  
  gsap.from('.hero-search', {
    y: 50,
    opacity: 0,
    duration: 1,
    delay: 0.6
  })
  
  // Cleanup on unmount
  return () => clearInterval(slideInterval)
})
</script>

<template>
  <section class="hero-section">
    <div 
      v-for="(slide, index) in slides" 
      :key="index"
      :class="['hero-slide', { 'active': index === currentSlide }]"
      :style="{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${slide.image})` }"
    >
      <div class="container">
        <div class="hero-content">
          <h1>{{ slide.title }}</h1>
          <p>{{ slide.subtitle }}</p>
          <a href="#destinations" class="btn-primary">{{ slide.cta }}</a>
        </div>
      </div>
    </div>
    
    <div class="slide-indicators">
      <button 
        v-for="index in totalSlides" 
        :key="index"
        :class="['indicator', { 'active': index - 1 === currentSlide }]"
        @click="goToSlide(index - 1)"
        :aria-label="`Go to slide ${index}`"
      ></button>
    </div>
    
    <div class="hero-search">
      <div class="container">
        <form class="search-form">
          <div class="search-group">
            <label for="destination">Where to?</label>
            <input type="text" id="destination" placeholder="Destination">
          </div>
          
          <div class="search-group">
            <label for="dates">When?</label>
            <input type="text" id="dates" placeholder="Check in - Check out">
          </div>
          
          <div class="search-group">
            <label for="travelers">Who?</label>
            <select id="travelers">
              <option value="1">1 Adult</option>
              <option value="2">2 Adults</option>
              <option value="3">3 Adults</option>
              <option value="4">4 Adults</option>
              <option value="family">Family</option>
            </select>
          </div>
          
          <button type="submit" class="search-btn">Search</button>
        </form>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-section {
  position: relative;
  height: 100vh;
  min-height: 600px;
  width: 100%;
  overflow: hidden;
}

.hero-slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  opacity: 0;
  transition: opacity 1.5s ease;
  z-index: 1;
}

.hero-slide.active {
  opacity: 1;
  z-index: 2;
}

.hero-content {
  color: var(--color-white);
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
  padding: 0 16px;
  transform: translateY(-80px);
}

.hero-content h1 {
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 16px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.hero-content p {
  font-size: 1.5rem;
  margin-bottom: 32px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.slide-indicators {
  position: absolute;
  bottom: 200px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 12px;
  z-index: 3;
}

.indicator {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.4);
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
}

.indicator.active {
  background-color: var(--color-white);
  transform: scale(1.2);
}

.hero-search {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  padding: 24px 0;
  box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.1);
  z-index: 10;
}

.search-form {
  display: flex;
  gap: 16px;
}

.search-group {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.search-group label {
  font-size: 0.875rem;
  font-weight: 500;
  margin-bottom: 8px;
  color: var(--color-dark);
}

.search-group input,
.search-group select {
  padding: 12px 16px;
  border: 1px solid var(--color-gray);
  border-radius: var(--radius-md);
  font-size: 1rem;
  transition: all 0.3s ease;
}

.search-group input:focus,
.search-group select:focus {
  outline: none;
  border-color: var(--color-primary);
  box-shadow: 0 0 0 2px rgba(42, 157, 143, 0.2);
}

.search-btn {
  align-self: flex-end;
  background-color: var(--color-primary);
  color: var(--color-white);
  font-weight: 500;
  padding: 12px 32px;
  border: none;
  border-radius: var(--radius-md);
  cursor: pointer;
  transition: all 0.3s ease;
}

.search-btn:hover {
  background-color: var(--color-primary-dark);
  transform: translateY(-2px);
}

@media (max-width: 992px) {
  .hero-content h1 {
    font-size: 2.75rem;
  }
  
  .hero-content p {
    font-size: 1.25rem;
  }
  
  .search-form {
    flex-wrap: wrap;
  }
  
  .search-group {
    min-width: calc(50% - 8px);
  }
  
  .search-btn {
    min-width: 100%;
    margin-top: 16px;
  }
}

@media (max-width: 768px) {
  .hero-content {
    transform: translateY(-40px);
  }
  
  .hero-content h1 {
    font-size: 2.25rem;
  }
  
  .hero-content p {
    font-size: 1.125rem;
  }
  
  .slide-indicators {
    bottom: 180px;
  }
  
  .search-group {
    min-width: 100%;
  }
}

@media (max-width: 480px) {
  .hero-content h1 {
    font-size: 2rem;
  }
  
  .slide-indicators {
    bottom: 160px;
  }
}
</style>