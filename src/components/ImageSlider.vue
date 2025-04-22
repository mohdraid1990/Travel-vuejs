<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const props = defineProps({
  slides: {
    type: Array,
    required: true,
  },
  autoplay: {
    type: Boolean,
    default: true,
  },
  interval: {
    type: Number,
    default: 5000,
  },
});

const currentSlide = ref(0);
const isTransitioning = ref(false);
let autoplayInterval;

const nextSlide = () => {
  if (isTransitioning.value) return;

  isTransitioning.value = true;
  currentSlide.value = (currentSlide.value + 1) % props.slides.length;

  setTimeout(() => {
    isTransitioning.value = false;
  }, 500);
};

const prevSlide = () => {
  if (isTransitioning.value) return;

  isTransitioning.value = true;
  currentSlide.value =
    (currentSlide.value - 1 + props.slides.length) % props.slides.length;

  setTimeout(() => {
    isTransitioning.value = false;
  }, 500);
};

const goToSlide = (index) => {
  if (isTransitioning.value) return;

  isTransitioning.value = true;
  currentSlide.value = index;

  setTimeout(() => {
    isTransitioning.value = false;
  }, 500);
};

onMounted(() => {
  if (props.autoplay) {
    autoplayInterval = setInterval(nextSlide, props.interval);
  }
});

onUnmounted(() => {
  if (autoplayInterval) {
    clearInterval(autoplayInterval);
  }
});
</script>

<template>
  <div class="slider-container">
    <div class="slider">
      <div
        v-for="(slide, index) in slides"
        :key="index"
        class="slide"
        :class="{ active: index === currentSlide }"
        :style="{
          backgroundImage: `url(${slide.image})`,
          zIndex: index === currentSlide ? 1 : 0,
        }"
      >
        <div class="slide-content">
          <h2 class="slide-title">{{ slide.title }}</h2>
          <p class="slide-description">{{ slide.description }}</p>
          <router-link
            v-if="slide.link"
            :to="slide.link"
            class="btn btn-primary"
          >
            {{ slide.buttonText || "Learn More" }}
          </router-link>
        </div>
      </div>
    </div>

    <div class="slider-indicators">
      <button
        v-for="(slide, index) in slides"
        :key="index"
        class="indicator"
        :class="{ active: index === currentSlide }"
        @click="goToSlide(index)"
        :aria-label="`Go to slide ${index + 1}`"
      ></button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/styles/main.scss";

.slider-container {
  position: relative;
  width: 100%;
  height: 600px;
  overflow: hidden;
  border-radius: $border-radius-lg;
  box-shadow: $shadow-lg;

  @include responsive(md) {
    height: 400px;
  }
}

.slider {
  position: relative;
  width: 100%;
  height: 100%;
}

.slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  opacity: 0;
  transform: scale(1.1);
  transition: all 0.5s ease;
  z-index: 0;

  &.active {
    opacity: 1;
    transform: scale(1);
    z-index: 1;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.2),
      rgba(0, 0, 0, 0.6)
    );
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }
}

.slide-content {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: $spacing-xl;
  color: $white;
  text-align: center;
  transform: translateY(20px);
  opacity: 0;
  transition: all 0.5s ease 0.3s;
  z-index: 2;

  .active & {
    transform: translateY(0);
    opacity: 1;
  }
}

.slide-title {
  font-family: $font-secondary;
  font-size: 1.5rem !important;
  font-weight: 700;
  margin-bottom: $spacing-md;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);

  @include responsive(md) {
    font-size: 2rem;
  }
}

.slide-description {
  font-size: 0.7rem !important;
  max-width: 700px;
  margin: 0 auto $spacing-lg;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);

  @include responsive(md) {
    font-size: 1rem;
  }
}

.slider-indicators {
  position: absolute;
  bottom: $spacing-md;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: $spacing-sm;
  z-index: 3;
}

.indicator {
  width: 12px;
  height: 12px;
  border-radius: $border-radius-full;
  background: rgba($white, 0.5);
  border: 2px solid $white;
  cursor: pointer;
  transition: all $transition-normal;

  &:hover {
    background: rgba($white, 0.8);
    transform: scale(1.2);
  }

  &.active {
    background: $white;
    transform: scale(1.2);
  }
}
</style>
