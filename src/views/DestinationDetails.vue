<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const destinationId = ref(route.params.id);
const destination = ref(null);
const isLoading = ref(true);
const isVisible = ref(false);

// Mock data for destinations
const destinationsData = [
  {
    id: 1,
    name: "Bali, Indonesia",
    description:
      "Tropical paradise with beautiful beaches, rich culture, and stunning landscapes.",
    image: "/images/destinations/bali.jpg",
    highlights: [
      "Visit ancient temples",
      "Relax on pristine beaches",
      "Experience local culture",
      "Enjoy water sports",
    ],
    bestTime: "April to October",
    price: "From $1,200",
  },
  {
    id: 2,
    name: "Paris, France",
    description:
      "The City of Light offers iconic landmarks, world-class museums, and exquisite cuisine.",
    image: "/images/destinations/paris.jpg",
    highlights: [
      "Visit the Eiffel Tower",
      "Explore the Louvre Museum",
      "Stroll along the Seine",
      "Enjoy French cuisine",
    ],
    bestTime: "April to June, September to October",
    price: "From $1,500",
  },
  {
    id: 3,
    name: "Tokyo, Japan",
    description: "A fascinating blend of ultra-modern and traditional culture.",
    image: "/images/destinations/tokyo.jpg",
    highlights: [
      "Explore historic temples",
      "Experience modern technology",
      "Enjoy Japanese cuisine",
      "Visit Mount Fuji",
    ],
    bestTime: "March to May, September to November",
    price: "From $1,800",
  },
];

onMounted(() => {
  // Simulate API call
  setTimeout(() => {
    destination.value = destinationsData.find(
      (d) => d.id === parseInt(destinationId.value)
    ) || {
      id: destinationId.value,
      name: "Destination Not Found",
      description: "This destination could not be found.",
      image: "/images/destinations/default.jpg",
      highlights: [],
      bestTime: "N/A",
      price: "N/A",
    };
    isLoading.value = false;

    // Trigger animations
    setTimeout(() => {
      isVisible.value = true;
    }, 100);
  }, 500);
});
</script>

<template>
  <div class="destination-details">
    <div v-if="isLoading" class="loading-state">
      <div class="spinner"></div>
      <p>Loading destination details...</p>
    </div>

    <div v-else class="destination-content" :class="{ visible: isVisible }">
      <div
        class="hero-section"
        :style="{ backgroundImage: `url(${destination.image})` }"
      >
        <div class="hero-overlay">
          <h1>{{ destination.name }}</h1>
          <p class="price">{{ destination.price }}</p>
        </div>
      </div>

      <div class="container">
        <div class="destination-info">
          <div class="description">
            <h2>About {{ destination.name }}</h2>
            <p>{{ destination.description }}</p>
          </div>

          <div class="highlights">
            <h2>Highlights</h2>
            <ul>
              <li
                v-for="(highlight, index) in destination.highlights"
                :key="index"
              >
                <i class="fas fa-check"></i>
                {{ highlight }}
              </li>
            </ul>
          </div>

          <div class="best-time">
            <h2>Best Time to Visit</h2>
            <p>{{ destination.bestTime }}</p>
          </div>

          <div class="booking-cta">
            <router-link to="/book" class="btn btn-primary">
              Book Now
              <i class="fas fa-arrow-right"></i>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.destination-details {
  padding-top: 80px;

  .loading-state {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    padding: 2rem;
    text-align: center;

    .spinner {
      width: 40px;
      height: 40px;
      border: 4px solid #e9ecef;
      border-top: 4px solid #007bff;
      border-radius: 50%;
      animation: spin 1s linear infinite;
      margin-bottom: 1rem;
    }

    p {
      color: #6c757d;
      font-size: 1.1rem;
    }
  }

  .destination-content {
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.6s ease;

    &.visible {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .hero-section {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: white;

    .hero-overlay {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.5);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 2rem;
      height: 60vh;
      h1 {
        font-size: 3.5rem;
        margin-bottom: 1rem;
        text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
      }

      .price {
        font-size: 1.5rem;
        font-weight: 700;
      }
    }
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 4rem 2rem;
  }

  .destination-info {
    display: grid;
    grid-template-columns: 1fr;
    gap: 3rem;

    @media (min-width: 768px) {
      grid-template-columns: 2fr 1fr;
    }

    .description {
      grid-column: 1 / -1;

      h2 {
        margin-bottom: 1.5rem;
        color: #212529;
      }

      p {
        font-size: 1.1rem;
        line-height: 1.8;
        color: #212529;
      }
    }

    .highlights {
      h2 {
        margin-bottom: 1.5rem;
        color: #212529;
      }

      ul {
        list-style: none;
        padding: 0;

        li {
          display: flex;
          align-items: center;
          margin-bottom: 1rem;
          font-size: 1.1rem;

          i {
            color: #28a745;
            margin-right: 1rem;
          }
        }
      }
    }

    .best-time {
      h2 {
        margin-bottom: 1.5rem;
        color: #212529;
      }

      p {
        font-size: 1.1rem;
        color: #212529;
      }
    }

    .booking-cta {
      grid-column: 1 / -1;
      text-align: center;
      margin-top: 2rem;

      .btn {
        padding: 1rem 2rem;
        font-size: 1.2rem;
        background-color: #007bff;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        transition: background-color 0.3s;

        &:hover {
          background-color: #0056b3;
        }

        i {
          margin-left: 0.5rem;
        }
      }
    }
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
