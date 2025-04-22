<script setup>
import { ref, onMounted } from "vue";
import ImageSlider from "../components/ImageSlider.vue";
import moscow from "../assets/images/moscow.jpg";
import paris from "../assets/images/paris.avif";
import japan from "../assets/images/japan.avif";
import dubai from "../assets/images/dubai.avif";
import Newyork from "../assets/images/New york.avif";
import rome from "../assets/images/rome.avif";
import italy from "../assets/images/italy.avif";
import bali from "../assets/images/bali.avif";
import london from "../assets/images/london.avif";
import turkia from "../assets/images/turkia.avif";
import nature from "../assets/images/nature.avif";
import uae from "../assets/images/uae.avif";
import sarah from "../assets/images/sarah.avif";
import MESHA from "../assets/images/MESHA.avif";
import emma from "../assets/images/EMMA.avif";

const heroSlides = ref([
  {
    image: italy,
    title: "Discover Your Next Adventure",
    description: "Explore the world's most beautiful destinations",
    link: "/destinations",
    buttonText: "Explore Destinations",
  },
  {
    image: bali,
    title: "Create Unforgettable Memories",
    description: "Let us help you plan your perfect journey",
    link: "/contact",
    buttonText: "Start Planning",
  },
  {
    image: london,
    title: "Experience Local Culture",
    description: "Immerse yourself in authentic experiences",
    link: "/about",
    buttonText: "About Our Services",
  },
  {
    image: turkia,
    title: "Luxury Travel Experience",
    description: "Indulge in premium travel experiences",
    link: "/destinations",
    buttonText: "View Luxury Packages",
  },
  {
    image: nature,
    title: "Adventure Awaits",
    description: "Discover thrilling adventures around the world",
    link: "/destinations",
    buttonText: "Find Adventures",
  },
  {
    image: uae,
    title: "Beach Paradise",
    description: "Relax on the world's most beautiful beaches",
    link: "/destinations",
    buttonText: "Explore Beaches",
  },
]);

const featuredDestinations = ref([
  {
    id: 1,
    name: "Moscow, Russia",
    image: moscow,
    description:
      "Experience the grandeur of Red Square and the iconic St. Basil's Cathedral.",
    rating: 4.9,
    delay: 0,
  },
  {
    id: 2,
    name: "Paris, France",
    image: paris,
    description:
      "Discover the magic of the City of Light and its iconic landmarks.",
    rating: 4.9,
    delay: 0.2,
  },
  {
    id: 3,
    name: "Tokyo, Japan",
    image: japan,
    description:
      "Immerse yourself in the perfect blend of tradition and modernity.",
    rating: 4.8,
    delay: 0.4,
  },
  {
    id: 4,
    name: "Dubai, UAE",
    image: dubai,
    description: "Experience luxury and innovation in the heart of the desert.",
    rating: 4.9,
    delay: 0.6,
  },
  {
    id: 5,
    name: "New York, USA",
    image: Newyork,
    description: "Explore the city that never sleeps and its iconic skyline.",
    rating: 4.8,
    delay: 0.8,
  },
  {
    id: 6,
    name: "Rome, Italy",
    image: rome,
    description:
      "Discover the eternal city's rich history and stunning architecture.",
    rating: 4.9,
    delay: 1,
  },
]);

const services = ref([
  {
    icon: "fas fa-plane",
    title: "Flight Booking",
    description: "Find the best deals on flights to your dream destination.",
    delay: 0,
  },
  {
    icon: "fas fa-hotel",
    title: "Hotel Reservations",
    description:
      "Book comfortable accommodations that suit your style and budget.",
    delay: 0.2,
  },
  {
    icon: "fas fa-map-marked-alt",
    title: "Tour Packages",
    description: "Explore curated tour packages for unforgettable experiences.",
    delay: 0.4,
  },
]);

const testimonials = ref([
  {
    name: "Sarah Johnson",
    role: "Adventure Enthusiast",
    image: sarah,
    text: "The best travel experience I've ever had! Everything was perfectly organized.",
    rating: 5,
    delay: 0,
  },
  {
    name: "Michael Chen",
    role: "Photography Lover",
    image: MESHA,
    text: "Amazing destinations and professional service. Highly recommended!",
    rating: 5,
    delay: 0.2,
  },
  {
    name: "Emma Davis",
    role: "Cultural Explorer",
    image: emma,
    text: "They helped me discover hidden gems I would have never found on my own.",
    rating: 5,
    delay: 0.4,
  },
]);

const isVisible = ref(false);

onMounted(() => {
  setTimeout(() => {
    isVisible.value = true;
  }, 100);
});
</script>

<template>
  <div class="home">
    <section class="hero-slider">
      <ImageSlider :slides="heroSlides" />
    </section>

    <section class="services-section section">
      <div class="container">
        <h2 class="section-title text-center animate-fade-in">Our Services</h2>
        <div class="services-grid">
          <div
            v-for="(service, index) in services"
            :key="index"
            class="service-card card animate-scale-in"
            :style="{ animationDelay: `${service.delay}s` }"
          >
            <div class="service-icon">
              <i :class="service.icon"></i>
            </div>
            <h3 class="service-title">{{ service.title }}</h3>
            <p class="service-description">{{ service.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="featured-destinations section bg-light">
      <div class="container">
        <h2 class="section-title text-center animate-fade-in">
          Featured Destinations
        </h2>
        <div class="destinations-grid">
          <div
            v-for="(destination, index) in featuredDestinations"
            :key="destination.id"
            class="destination-card card animate-scale-in"
            :style="{ animationDelay: `${destination.delay}s` }"
          >
            <div class="card-image">
              <img
                :src="destination.image"
                :alt="`${destination.name} travel destination`"
              />
              <div class="card-overlay">
                <span class="card-rating">
                  <i class="fas fa-star"></i>
                  {{ destination.rating }}
                </span>
              </div>
            </div>
            <div class="card-content">
              <h3 class="card-title">{{ destination.name }}</h3>
              <p class="card-description">{{ destination.description }}</p>
              <router-link
                :to="{
                  path: '/book',
                  query: {
                    destination: destination.name,
                    image: destination.image,
                  },
                }"
                class="btn btn-text"
                :aria-label="`Book ${destination.name} vacation package`"
              >
                View {{ destination.name.split(",")[0] }} Packages
                <i class="fas fa-arrow-right"></i>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="testimonials-section section">
      <div class="container">
        <h2 class="section-title text-center animate-fade-in">
          What Our Travelers Say
        </h2>
        <div class="testimonials-grid">
          <div
            v-for="(testimonial, index) in testimonials"
            :key="index"
            class="testimonial-card card animate-scale-in"
            :style="{ animationDelay: `${testimonial.delay}s` }"
          >
            <div class="testimonial-image">
              <img
                :src="testimonial.image"
                :alt="`${testimonial.name} testimonial`"
              />
            </div>
            <div class="testimonial-content">
              <div class="testimonial-rating">
                <i
                  v-for="star in testimonial.rating"
                  :key="star"
                  class="fas fa-star"
                ></i>
              </div>
              <p class="testimonial-text">{{ testimonial.text }}</p>
              <div class="testimonial-author">
                <h4 class="testimonial-name">{{ testimonial.name }}</h4>
                <p class="testimonial-role">{{ testimonial.role }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="cta-section section bg-primary text-light">
      <div class="container">
        <h2 class="section-title text-center animate-fade-in">
          Ready to Start Your Journey?
        </h2>
        <p
          class="section-subtitle text-center animate-fade-in"
          style="animation-delay: 0.2s"
        >
          Let us help you plan your perfect trip
        </p>
        <div class="cta-buttons animate-fade-in" style="animation-delay: 0.4s">
          <router-link to="/contact" class="btn btn-light"
            >Contact Our Travel Experts</router-link
          >
          <router-link to="/destinations" class="btn btn-outline-light"
            >Browse All Destinations</router-link
          >
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/styles/main.scss";

@keyframes slideUpFade {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.home {
  .hero-slider {
    position: relative;
    overflow: hidden;

    &::before {
      content: "";
      position: absolute;
      inset: 0;
      background: linear-gradient(
        135deg,
        rgba(37, 118, 171, 0.4),
        rgba(2, 0, 36, 0.6)
      );
      z-index: 1;
    }

    :deep(.slider-container) {
      position: relative;
      z-index: 1;
    }

    :deep(.slide) {
      overflow: hidden;

      &::before {
        content: "";
        position: absolute;
        inset: 0;
        background: linear-gradient(
          135deg,
          rgba(37, 118, 171, 0.3),
          rgba(2, 0, 36, 0.4)
        );
        z-index: 1;
      }

      img {
        transform: scale(1.1);
        transition: transform 1.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        filter: brightness(0.9) contrast(1.1);
      }

      &:hover img {
        transform: scale(1.2);
      }
    }

    :deep(.slide-content) {
      position: relative;
      z-index: 2;
      text-align: center;
      max-width: 800px;
      margin: 0 auto;
      padding: 2rem;
      opacity: 0;
      transform: translateY(30px);
      animation: slideUpFade 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
      animation-delay: 0.5s;

      h2 {
        font-family: $font-secondary;
        font-size: 4rem;
        padding-top: 120px;
        font-weight: 700;
        color: $white;
        margin-bottom: 1.5rem;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
        background: linear-gradient(135deg, #ffffff, #e0e0e0);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;

        &::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 100px;
          height: 3px;
          background: linear-gradient(90deg, #2576ab, #4fa1d8);
          border-radius: 3px;
        }
      }

      p {
        font-size: 1.5rem;
        color: rgba(255, 255, 255, 0.95);
        margin-bottom: 2rem;
        text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
      }

      .btn {
        padding: 1rem 2.5rem;
        font-size: 1.2rem;
        font-weight: 600;
        text-transform: uppercase;
        background: linear-gradient(135deg, #2576ab, #020024);
        border: none;
        color: $white;
        border-radius: 50px;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);

        &:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
        }
      }
    }

    :deep(.slider-controls) {
      position: absolute;
      bottom: 2rem;
      left: 50%;
      transform: translateX(-50%);
      z-index: 3;
      display: flex;
      gap: 1rem;

      .slider-dot {
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.5);
        cursor: pointer;
        transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);

        &.active {
          background: $white;
          transform: scale(1.2);
        }
      }
    }
  }

  .section {
    padding: $spacing-xxl 0;
    position: relative;

    @include responsive(md) {
      padding: $spacing-xl 0;
    }
  }

  .section-title {
    font-family: "Playfair Display", serif;
    font-size: 3.5rem;
    text-align: center;
    margin-bottom: $spacing-xl;
    opacity: 0;
    animation: fadeIn 0.8s ease forwards;
    background: linear-gradient(135deg, #2576ab, #020024);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 100px;
      height: 3px;
      background: linear-gradient(90deg, #2576ab, #4fa1d8);
      border-radius: 3px;
    }

    @include responsive(md) {
      font-size: 2.5rem;
    }
  }

  .section-subtitle {
    font-size: 1.6rem;
    text-align: center;
    margin-bottom: $spacing-xl;
    color: $text-dark;
    opacity: 0;
    animation: fadeIn 0.8s ease forwards;

    @include responsive(md) {
      font-size: 1.2rem;
    }
  }

  .services-grid,
  .destinations-grid,
  .testimonials-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: $spacing-xl;

    @include responsive(md) {
      gap: $spacing-lg;
    }
  }

  .service-card {
    text-align: center;
    padding: $spacing-xl;
    background: rgba(255, 255, 255, 0.9);
    border-radius: 20px;
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);

    &:hover {
      transform: translateY(-10px) scale(1.02);
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
    }

    .service-icon {
      width: 90px;
      height: 90px;
      margin: 0 auto $spacing-md;
      background: linear-gradient(
        135deg,
        rgba(37, 118, 171, 0.1),
        rgba(2, 0, 36, 0.1)
      );
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);

      i {
        font-size: 2.2rem;
        color: #2576ab;
      }
    }

    .service-title {
      font-size: 1.6rem;
      margin-bottom: $spacing-sm;
      color: #020024;
      font-weight: 600;
    }

    .service-description {
      color: $text-light;
      line-height: 1.6;
    }
  }

  .destination-card {
    overflow: hidden;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    border-radius: 20px;
    background: $white;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);

    &:hover {
      transform: translateY(-10px) scale(1.02);
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);

      .card-image img {
        transform: scale(1.1);
      }
      .card-title {
        color: #2576ab;
      }
      .card-overlay {
        transform: translateY(0);
        opacity: 1;
      }
    }

    .card-image {
      position: relative;
      height: 350px;
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        filter: brightness(0.9) contrast(1.1);
      }
    }

    .card-overlay {
      position: absolute;
      inset: 0;
      background: linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent);
      display: flex;
      align-items: flex-end;
      padding: $spacing-lg;
      transform: translateY(20px);
      opacity: 0;
      transition: all 0.4s ease;
    }

    .card-rating {
      position: absolute;
      top: 20px;
      right: 20px;
      background: rgba(255, 255, 255, 0.95);
      padding: $spacing-sm $spacing-md;
      border-radius: $border-radius-full;
      font-weight: 600;
      color: #2576ab;
      display: flex;
      align-items: center;
      gap: $spacing-xs;

      i {
        color: #ffd700;
        font-size: 1.2rem;
      }
    }

    .card-content {
      padding: $spacing-xl;
    }

    .card-title {
      font-size: 2rem;
      margin-bottom: $spacing-sm;
      color: #020024;
      font-weight: 700;
      font-family: "Playfair Display", serif;
    }

    .card-description {
      color: $text-light;
      margin-bottom: $spacing-lg;
      line-height: 1.8;
    }

    .btn-text {
      color: #2576ab;
      font-weight: 600;
      display: flex;
      align-items: center;
      gap: $spacing-sm;
      padding: 1rem 2rem;
      border-radius: 50px;
      background: rgba(37, 118, 171, 0.1);

      &:hover {
        color: #020024;
        background: rgba(37, 118, 171, 0.2);
        transform: translateX(5px);
      }
    }
  }

  .testimonial-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: $spacing-xl;
    background: rgba(255, 255, 255, 0.9);
    border-radius: 20px;
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);

    &:hover {
      transform: translateY(-10px) scale(1.02);
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
    }

    .testimonial-image {
      width: 120px;
      height: 120px;
      border-radius: 50%;
      overflow: hidden;
      margin-bottom: $spacing-lg;
      border: 4px solid #2576ab;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .testimonial-rating {
      color: #ffd700;
      margin-bottom: $spacing-md;

      i {
        margin: 0 2px;
      }
    }

    .testimonial-text {
      font-style: italic;
      color: $text-dark;
      margin-bottom: $spacing-lg;
      line-height: 1.6;
    }

    .testimonial-name {
      font-family: $font-secondary;
      font-size: 1.4rem;
      margin-bottom: $spacing-xs;
      color: #020024;
    }

    .testimonial-role {
      color: #2576ab;
      font-weight: 500;
    }
  }

  .cta-section {
    background: linear-gradient(135deg, #2576ab, #020024);

    .section-title {
      background: none;
      -webkit-text-fill-color: $white;

      &::after {
        background: linear-gradient(90deg, $white, rgba(255, 255, 255, 0.5));
      }
    }

    .section-subtitle {
      color: rgba(255, 255, 255, 0.9);
    }

    .cta-buttons {
      display: flex;
      gap: $spacing-lg;
      justify-content: center;
      margin-top: $spacing-xl;

      @include responsive(md) {
        flex-direction: column;
        align-items: center;
      }
    }
  }

  .btn {
    padding: $spacing-md $spacing-xl;
    border-radius: $border-radius-full;
    font-weight: 600;
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);

    &.btn-light {
      background: $white;
      color: #2576ab;

      &:hover {
        background: darken($white, 5%);
        transform: translateY(-2px);
      }
    }

    &.btn-outline-light {
      border: 2px solid $white;
      color: $white;

      &:hover {
        background: $white;
        color: #2576ab;
        transform: translateY(-2px);
      }
    }
  }

  @include responsive(md) {
    .hero-slider {
      :deep(.slide-content) {
        h2 {
          font-size: 3rem;
        }
        ::after{
              bottom: 8% !important;

        }
        p {
          font-size: 1.2rem;
        }
        .btn {
         padding: 10px !important;
    font-size: 0.8rem !important;
        }
      }
    }
  }
}


</style>
