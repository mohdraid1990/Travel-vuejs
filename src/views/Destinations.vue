<script setup>
import { ref, computed, onMounted } from "vue";
import DestinationCard from "../components/DestinationCard.vue";
import { useRouter } from "vue-router";

const router = useRouter();

const isVisible = ref(false);
const activeFilter = ref("all");
const activeCategory = ref("all");
const activePriceRange = ref("all");
const searchQuery = ref("");

const categories = ref([
  { id: "all", name: "All Categories" },
  { id: "beach", name: "Beach Destinations" },
  { id: "mountain", name: "Mountain Escapes" },
  { id: "city", name: "City Breaks" },
  { id: "cultural", name: "Cultural Experiences" },
  { id: "adventure", name: "Adventure Travel" },
  { id: "luxury", name: "Luxury Getaways" },
]);

const priceRanges = ref([
  { id: "all", name: "All Prices" },
  { id: "budget", name: "Budget ($0 - $1500)" },
  { id: "moderate", name: "Moderate ($1500 - $2500)" },
  { id: "luxury", name: "Luxury ($2500+)" },
]);
import bali from "../assets/images/bali-1.avif";
import Santorini from "../assets/images/Santorini.avif";
import Kyoto from "../assets/images/Kyoto, Japan.avif";
import swiss from "../assets/images/Swiss.avif";
import USA from "../assets/images/USA.avif";
import CostaRica from "../assets/images/Costa-Rica.avif";
import Maldives from "../assets/images/Maldives.avif";
import Marrakech from "../assets/images/Marrakech.avif";
import Amalfi from "../assets/images/Amalfi.avif";
import Fushimi from "../assets/images/Fushimi.avif";
import Kinkaku from "../assets/images/Kinkaku-ji (Golden Pavilion).avif";
import Mount from "../assets/images/Mount.avif";
import Monkey from "../assets/images/Monkey.avif";
import Oia from "../assets/images/Oia.avif";
import Santorini0 from "../assets/images/Santorini-0.avif";
import Mount0 from "../assets/images/Mount-0.avif";
import Lake from "../assets/images/Lake.avif";
import Statue from "../assets/images/Statue.avif";
import Times from "../assets/images/Times Square.avif";
import Central from "../assets/images/Central Park.avif";
import Arenal from "../assets/images/Arenal Volcano.avif";
import Monteverde from "../assets/images/Monteverde Cloud Forest.avif";
import Jemaa from "../assets/images/Jemaa el-Fna.avif";
import Koutoubia from "../assets/images/Koutoubia Mosque.avif";
import Underwater from "../assets/images/Underwater Sea.avif";
import Positano from "../assets/images/Positano.avif";
import Amalfi0 from "../assets/images/Amalfi0.avif";
import Spa from "../assets/images/Spa at Conrad Maldives.avif";

const destinations = ref([
  {
    id: 1,
    name: "Bali, Indonesia",
    image: bali,
    description:
      "Explore tropical beaches, rice terraces, and ancient temples.",
    category: "beach",
    rating: 4.8,
    price: 1299,
    duration: "7 days",
    isPopular: true,
    isNew: false,
    isTrending: true,
    isBudget: false,
    highlights: ["Beaches", "Temples", "Rice Terraces", "Culture"],
    bestTime: "April to October",
    included: ["Flights", "Hotel", "Transfers", "Guided Tours"],
    location: "Southeast Asia",
    landmarks: [
      {
        name: "Mount Bali",
        image: Mount,
      },
      {
        name: "Ubud Monkey Forest",
        image: Monkey,
      },
    ],
  },
  {
    id: 2,
    name: "Santorini, Greece",
    image: Santorini,
    description: "Experience whitewashed buildings with stunning Aegean views.",
    category: "beach",
    rating: 4.9,
    price: 1499,
    duration: "5 days",
    isPopular: true,
    isNew: false,
    isTrending: true,
    isBudget: false,
    highlights: ["Sunsets", "Wine Tasting", "Beaches", "Architecture"],
    bestTime: "May to September",
    included: ["Flights", "Hotel", "Transfers", "Wine Tour"],
    location: "Europe",
    landmarks: [
      {
        name: "Oia",
        image: Oia,
      },
      {
        name: "Santorini Caldera",
        image: Santorini0,
      },
    ],
  },
  {
    id: 3,
    name: "Kyoto, Japan",
    image: Kyoto,
    description: "Discover traditional temples, gardens, and geisha culture.",
    category: "cultural",
    rating: 4.7,
    price: 1899,
    duration: "6 days",
    isPopular: true,
    isNew: false,
    isTrending: true,
    isBudget: false,
    highlights: ["Temples", "Gardens", "Tea Ceremony", "Traditional Culture"],
    bestTime: "March to May, October to November",
    included: ["Flights", "Hotel", "Transfers", "Cultural Experiences"],
    location: "Asia",
    landmarks: [
      {
        name: "Fushimi Inari Shrine",
        image: Fushimi,
      },
      {
        name: "Kinkaku-ji (Golden Pavilion)",
        image: Kinkaku,
      },
    ],
  },
  {
    id: 4,
    name: "Swiss Alps",
    image: swiss,
    description:
      "Experience the majestic beauty of the Swiss Alps with stunning mountain views.",
    category: "mountain",
    rating: 4.9,
    price: 2199,
    duration: "8 days",
    isPopular: true,
    isNew: true,
    isTrending: false,
    isBudget: false,
    highlights: ["Hiking", "Scenic Trains", "Lakes", "Mountain Views"],
    bestTime: "June to September",
    included: ["Flights", "Hotel", "Transfers", "Scenic Train Pass"],
    location: "Europe",
    landmarks: [
      {
        name: "Mount Eiger",
        image: Mount0,
      },
      {
        name: "Lake Geneva",
        image: Lake,
      },
    ],
  },
  {
    id: 5,
    name: "New York City, USA",
    image: USA,
    description: "Explore the vibrant energy of the city that never sleeps.",
    category: "city",
    rating: 4.6,
    price: 1599,
    duration: "5 days",
    isPopular: true,
    isNew: false,
    isTrending: true,
    isBudget: false,
    highlights: ["Shopping", "Museums", "Broadway Shows", "Central Park"],
    bestTime: "April to June, September to November",
    included: ["Flights", "Hotel", "Transfers", "City Pass"],
    location: "North America",
    landmarks: [
      {
        name: "Statue of Liberty",
        image: Statue,
      },
      {
        name: "Times Square",
        image: Times,
      },
      {
        name: "Central Park",
        image: Central,
      },
    ],
  },
  {
    id: 6,
    name: "Costa Rica",
    image: CostaRica,
    description:
      "Adventure awaits in this tropical paradise with rainforests and beaches.",
    category: "adventure",
    rating: 4.8,
    price: 1399,
    duration: "7 days",
    isPopular: true,
    isNew: true,
    isTrending: true,
    isBudget: true,
    highlights: ["Rainforests", "Beaches", "Wildlife", "Adventure Activities"],
    bestTime: "December to April",
    included: ["Flights", "Hotel", "Transfers", "Adventure Activities"],
    location: "Central America",
    landmarks: [
      {
        name: "Arenal Volcano",
        image: Arenal,
      },
      {
        name: "Monteverde Cloud Forest",
        image: Monteverde,
      },
    ],
  },
  {
    id: 7,
    name: "Maldives",
    image: Maldives,
    description: "Luxury overwater bungalows in crystal clear waters.",
    category: "luxury",
    rating: 4.9,
    price: 2499,
    duration: "7 days",
    isPopular: true,
    isNew: false,
    isTrending: true,
    isBudget: false,
    highlights: ["Overwater Bungalows", "Beaches", "Snorkeling", "Spa"],
    bestTime: "November to April",
    included: ["Flights", "Luxury Resort", "Transfers", "Water Activities"],
    location: "Asia",
    landmarks: [
      {
        name: "Underwater Sea",
        image: Underwater,
      },
      {
        name: "Spa at Conrad Maldives",
        image: Spa,
      },
    ],
  },
  {
    id: 8,
    name: "Marrakech, Morocco",
    image: Marrakech,
    description:
      "Immerse yourself in the vibrant culture and markets of Morocco.",
    category: "cultural",
    rating: 4.7,
    price: 1199,
    duration: "5 days",
    isPopular: true,
    isNew: true,
    isTrending: true,
    isBudget: true,
    highlights: ["Souks", "Gardens", "Palaces", "Desert Tours"],
    bestTime: "March to May, September to November",
    included: ["Flights", "Riad", "Transfers", "Desert Experience"],
    location: "Africa",
    landmarks: [
      {
        name: "Jemaa el-Fna",
        image: Jemaa,
      },
      {
        name: "Koutoubia Mosque",
        image: Koutoubia,
      },
    ],
  },
  {
    id: 9,
    name: "Amalfi Coast, Italy",
    image: Amalfi,
    description:
      "Stunning coastline with charming towns and delicious cuisine.",
    category: "beach",
    rating: 4.8,
    price: 1799,
    duration: "7 days",
    isPopular: true,
    isNew: false,
    isTrending: true,
    isBudget: false,
    highlights: ["Coastal Views", "Food", "Towns", "Boat Tours"],
    bestTime: "April to October",
    included: ["Flights", "Hotel", "Transfers", "Boat Tour"],
    location: "Europe",
    landmarks: [
      {
        name: "Positano",
        image: Positano,
      },
      {
        name: "Amalfi",
        image: Amalfi0,
      },
    ],
  },
]);

const filteredDestinations = computed(() => {
  let result = destinations.value;

  // Apply category filter
  if (activeCategory.value !== "all") {
    result = result.filter((dest) => dest.category === activeCategory.value);
  }

  // Apply region filter
  if (activeFilter.value !== "all") {
    result = result.filter((dest) => {
      switch (activeFilter.value) {
        case "asia":
          return dest.location === "Asia";
        case "europe":
          return dest.location === "Europe";
        case "america":
          return (
            dest.location === "North America" ||
            dest.location === "Central America"
          );
        case "africa":
          return dest.location === "Africa";
        default:
          return true;
      }
    });
  }

  // Apply price range filter
  if (activePriceRange.value !== "all") {
    result = result.filter((dest) => {
      switch (activePriceRange.value) {
        case "budget":
          return dest.price <= 1500;
        case "moderate":
          return dest.price > 1500 && dest.price <= 2500;
        case "luxury":
          return dest.price > 2500;
        default:
          return true;
      }
    });
  }

  // Apply search query
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase();
    result = result.filter(
      (dest) =>
        dest.name.toLowerCase().includes(query) ||
        dest.description.toLowerCase().includes(query) ||
        dest.location.toLowerCase().includes(query) ||
        dest.highlights.some((highlight) =>
          highlight.toLowerCase().includes(query)
        )
    );
  }

  return result;
});

const setFilter = (filterId) => {
  activeFilter.value = filterId;
};

const setCategory = (categoryId) => {
  activeCategory.value = categoryId;
};

const selectedDestination = ref(null);
const showLandmarks = ref(false);

const handleDestinationClick = (destination) => {
  selectedDestination.value = destination;
  showLandmarks.value = true;
};

const navigateToBook = () => {
  router.push({
    path: "/book",
    query: {
      destination: selectedDestination.value.name,
      description: selectedDestination.value.description,
      price: selectedDestination.value.price,
      duration: selectedDestination.value.duration,
      location: selectedDestination.value.location,
      landmarks: JSON.stringify(selectedDestination.value.landmarks),
      image: selectedDestination.value.image,
      selectedLandmark: JSON.stringify(selectedDestination.value.landmarks[0]),
    },
  });
};

onMounted(() => {
  setTimeout(() => {
    isVisible.value = true;
  }, 100);
});
</script>

<template>
  <div class="destinations-page">
    <!-- Hero Section -->
    <section class="hero-section" :class="{ 'section-visible': isVisible }">
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <h1>Explore Amazing Destinations</h1>
        <p>
          Discover the world's most beautiful places and create unforgettable
          memories
        </p>
        <div class="search-box">
          <input
            type="text"
            placeholder="Search destinations..."
            v-model="searchQuery"
          />
          <button class="search-btn">
            <i class="fas fa-search"></i>
          </button>
        </div>
      </div>
    </section>

    <!-- Filters Section -->
    <section class="filters-section" :class="{ 'filters-visible': isVisible }">
      <div class="container">
        <div class="filters-wrapper">
          <div class="filter-group">
            <label>Region</label>
            <select v-model="activeFilter" class="filter-select">
              <option value="all">All Regions</option>
              <option value="asia">Asia</option>
              <option value="europe">Europe</option>
              <option value="america">America</option>
              <option value="africa">Africa</option>
            </select>
          </div>
          <div class="filter-group">
            <label>Category</label>
            <select v-model="activeCategory" class="filter-select">
              <option value="all">All Categories</option>
              <option
                v-for="category in categories"
                :key="category.id"
                :value="category.id"
              >
                {{ category.name }}
              </option>
            </select>
          </div>
          <div class="filter-group">
            <label>Price Range</label>
            <select v-model="activePriceRange" class="filter-select">
              <option
                v-for="range in priceRanges"
                :key="range.id"
                :value="range.id"
              >
                {{ range.name }}
              </option>
            </select>
          </div>
        </div>
      </div>
    </section>

    <!-- Destinations Grid -->
    <section class="destinations-grid">
      <div class="container">
        <div class="grid-wrapper">
          <div
            v-for="destination in filteredDestinations"
            :key="destination.id"
            class="destination-card"
            :class="{ 'card-visible': isVisible }"
          >
            <div class="card-image">
              <img :src="destination.image" :alt="destination.name" />
              <div class="card-overlay">
                <span class="location">
                  <i class="fas fa-map-marker-alt"></i>
                  {{ destination.location }}
                </span>
                <span class="price">From ${{ destination.price }}</span>
              </div>
            </div>
            <div class="card-content">
              <h3>{{ destination.name }}</h3>
              <p>{{ destination.description }}</p>
              <div class="card-footer">
                <div class="rating">
                  <i class="fas fa-star"></i>
                  <span>{{ destination.rating }}</span>
                </div>
                <button
                  class="explore-btn"
                  @click="handleDestinationClick(destination)"
                >
                  Explore
                  <i class="fas fa-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Landmarks Modal -->
    <div v-if="showLandmarks && selectedDestination" class="landmarks-modal">
      <div class="landmarks-content">
        <h2>{{ selectedDestination.name }} Landmarks</h2>
        <div class="landmarks-grid">
          <div
            v-for="landmark in selectedDestination.landmarks"
            :key="landmark.name"
            class="landmark-card"
          >
            <img :src="landmark.image" :alt="landmark.name" />
            <h3>{{ landmark.name }}</h3>
          </div>
        </div>
        <div class="modal-buttons">
          <button class="book-now-btn" @click="navigateToBook">Book Now</button>
          <button class="close-btn" @click="showLandmarks = false">
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/styles/main.scss";

.destinations-page {
  min-height: 100vh;
  background-color: #f8f9fa;

  .hero-section {
    position: relative;
    height: 60vh;
    min-height: 400px;
    overflow: hidden;
    background: linear-gradient(135deg, #020024 0%, #2576ab 100%);

    @media (max-width: 1024px) {
      height: 50vh;
      min-height: 350px;
    }

    @media (max-width: 768px) {
      height: 40vh;
      min-height: 300px;
    }

    @media (max-width: 480px) {
      height: 35vh;
      min-height: 250px;
    }

    .hero-content {
      position: relative;
      z-index: 2;
      max-width: 1400px;
      margin: 0 auto;
      padding: 0 20px;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      color: #fff;

      h1 {
        font-size: 3.8rem;
        font-weight: 700;
        margin-bottom: 1.5rem;
        line-height: 1.2;
        background: linear-gradient(135deg, #fff 0%, #e0e0e0 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        animation: fadeInUp 1s ease-out;
        font-family: "Playfair Display", serif;
        letter-spacing: -1px;
        text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);

        @media (max-width: 1024px) {
          font-size: 3.2rem;
        }

        @media (max-width: 768px) {
          font-size: 2.6rem;
        }

        @media (max-width: 480px) {
          font-size: 2.2rem;
        }
      }

      p {
        font-size: 1.4rem;
        max-width: 700px;
        margin: 0 auto;
        opacity: 0.95;
        animation: fadeInUp 1s ease-out 0.2s backwards;
        font-family: "Poppins", sans-serif;
        line-height: 1.6;
        font-weight: 400;
        text-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);

        @media (max-width: 768px) {
          font-size: 1.2rem;
        }

        @media (max-width: 480px) {
          font-size: 1.1rem;
        }
      }
    }
  }

  .destinations-content {
    padding: 6rem 0;
    background: #f8f9fa;

    @media (max-width: 1024px) {
      padding: 4rem 0;
    }

    @media (max-width: 768px) {
      padding: 3rem 0;
    }

    .filters {
      max-width: 1400px;
      margin: 0 auto 3rem;
      padding: 0 20px;
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;
      justify-content: center;

      @media (max-width: 768px) {
        flex-direction: column;
        align-items: stretch;
      }

      .filter-group {
        display: flex;
        gap: 1rem;
        align-items: center;

        @media (max-width: 768px) {
          flex-direction: column;
          align-items: stretch;
        }

        select {
          padding: 0.8rem 1.5rem;
          border: 1px solid #ddd;
          border-radius: 50px;
          background: #fff;
          color: #333;
          font-size: 1rem;
          cursor: pointer;
          transition: all 0.3s ease;
          min-width: 200px;

          &:focus {
            outline: none;
            border-color: #2576ab;
            box-shadow: 0 0 0 2px rgba(37, 118, 171, 0.1);
          }
        }
      }
    }

    .destinations-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
      padding: 0 20px;
      max-width: 1400px;
      margin: 0 auto;

      @media (max-width: 1024px) {
        max-width: 900px;
      }

      @media (max-width: 768px) {
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 1.5rem;
      }

      @media (max-width: 480px) {
        grid-template-columns: 1fr;
        gap: 1rem;
      }
    }

    .pagination {
      display: flex;
      justify-content: center;
      gap: 0.5rem;
      margin-top: 3rem;
      padding: 0 20px;

      button {
        padding: 0.5rem 1rem;
        border: 1px solid #ddd;
        border-radius: 50px;
        background: #fff;
        color: #333;
        font-size: 1rem;
        cursor: pointer;
        transition: all 0.3s ease;

        &:hover {
          background: #f0f0f0;
        }

        &.active {
          background: #2576ab;
          color: #fff;
          border-color: #2576ab;
        }

        &:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
      }
    }
  }
}

.destination-card {
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);

    .card-image {
      transform: scale(1.05);
    }

    .card-content {
      background: linear-gradient(
        to bottom,
        rgba(255, 255, 255, 0.95),
        rgba(255, 255, 255, 0.98)
      );
    }
  }

  .card-image {
    width: 100%;
    height: 250px;
    object-fit: cover;
    transition: transform 0.5s ease;
  }

  .card-content {
    padding: 20px;
    background: white;
    transition: background 0.3s ease;

    h3 {
      font-size: 1.25rem;
      font-weight: 600;
      margin-bottom: 10px;
      color: #1f2937;
    }

    p {
      color: #6b7280;
      line-height: 1.6;
      margin-bottom: 15px;
    }

    .destination-info {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 15px;
      padding: 10px;
      background: #f3f4f6;
      border-radius: 8px;

      .info-item {
        display: flex;
        align-items: center;
        gap: 5px;
        color: #4b5563;
        font-size: 0.9rem;

        i {
          color: #3b82f6;
        }
      }
    }
  }
}

.filters-section {
  background: rgba(255, 255, 255, 0.95);
  padding: 25px 0;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  margin-top: -50px;
  position: relative;
  z-index: 10;
  backdrop-filter: blur(10px);
  border-radius: 20px;
  margin-left: 20px;
  margin-right: 20px;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease 0.2s, transform 0.6s ease 0.2s;

  &.filters-visible {
    opacity: 1;
    transform: translateY(0);
  }
}

.filters-wrapper {
  display: flex;
  gap: 25px;
  justify-content: center;
  flex-wrap: wrap;
}

.filter-group {
  display: flex;
  flex-direction: column;
  gap: 10px;
  min-width: 200px;
}

.filter-group label {
  font-size: 1rem;
  color: #4b5563;
  font-weight: 600;
  font-family: "Poppins", sans-serif;
}

.filter-select {
  padding: 12px 25px;
  border: 2px solid #e5e7eb;
  border-radius: 12px;
  outline: none;
  cursor: pointer;
  transition: all 0.3s ease;
  background: white;
  font-size: 1rem;
  color: #1f2937;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236b7280'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 15px center;
  background-size: 15px;
  -webkit-appearance: none;
  -moz-appearance: none;
  font-family: "Poppins", sans-serif;

  &:hover {
    border-color: #2563eb;
  }

  &:focus {
    border-color: #2563eb;
    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
    outline: none;
  }

  &::-ms-expand {
    display: none;
  }
}

.destinations-grid {
  padding: 80px 0;
}

.grid-wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 35px;
  padding: 0 20px;
}

.destination-card {
  background: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: translateY(-10px) scale(1.02);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  }

  &.card-visible {
    opacity: 1;
    transform: translateY(0);
  }

  @for $i from 1 through 10 {
    &:nth-child(#{$i}) {
      transition-delay: #{0.1 * $i}s;
    }
  }
}

.card-image {
  position: relative;
  height: 280px;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to bottom, transparent 50%, rgba(0, 0, 0, 0.7));
    opacity: 0;
    transition: opacity 0.3s ease;
  }
}

.destination-card:hover .card-image::after {
  opacity: 1;
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  filter: brightness(0.95) contrast(1.05);
}

.destination-card:hover .card-image img {
  transform: scale(1.1);
}

.card-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 20px;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  transform: translateY(100%);
  transition: transform 0.3s ease;
}

.destination-card:hover .card-overlay {
  transform: translateY(0);
}

.location {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 1rem;
  font-weight: 500;

  i {
    color: #fbbf24;
  }
}

.price {
  font-weight: 700;
  font-size: 1.1rem;
  background: rgba(255, 255, 255, 0.2);
  padding: 5px 12px;
  border-radius: 20px;
  backdrop-filter: blur(5px);
}

.card-content {
  padding: 25px;
}

.card-content h3 {
  font-size: 1.5rem;
  margin-bottom: 12px;
  color: #1f2937;
  font-weight: 700;
  transition: color 0.3s ease;
}

.destination-card:hover .card-content h3 {
  color: #2563eb;
}

.card-content p {
  color: #6b7280;
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 20px;
}

.card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 15px;
  border-top: 1px solid #e5e7eb;
}

.rating {
  display: flex;
  align-items: center;
  gap: 6px;
  color: #f59e0b;
  font-weight: 600;
  font-size: 1.1rem;

  i {
    font-size: 1.2rem;
  }
}

.explore-btn {
  background: linear-gradient(135deg, #020024 0%, #2576ab 100%);
  color: white;
  border: none;
  padding: 12px 30px;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.1) 0%,
      rgba(255, 255, 255, 0) 100%
    );
    transform: translateX(-100%);
    transition: transform 0.6s ease;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);

    &::before {
      transform: translateX(100%);
    }

    i {
      transform: translateX(5px);
    }
  }

  i {
    font-size: 1.1rem;
    transition: transform 0.3s ease;
  }
}

@media (max-width: 768px) {
  .hero-content h1 {
    font-size: 2.8rem;
  }

  .hero-content p {
    font-size: 1.1rem;
  }

  .search-box {
    flex-direction: column;
    border-radius: 15px;
  }

  .search-box input {
    padding: 15px 20px;
  }

  .search-btn {
    width: 100%;
    border-radius: 0;
    padding: 15px;
  }

  .filters-wrapper {
    flex-direction: column;
    align-items: stretch;
  }

  .filter-select {
    width: 100%;
  }

  .grid-wrapper {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 25px;
  }
}

@media (max-width: 480px) {
  .hero-content h1 {
    font-size: 2.2rem;
  }

  .grid-wrapper {
    grid-template-columns: 1fr;
  }

  .card-image {
    height: 200px;
  }
  .filters-section {
    margin-top: -15px;
  }
}

.search-box {
  display: flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border-radius: 100px;
  padding: 8px;
  width: 100%;
  max-width: 700px;
  margin: 40px auto 0;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  animation: fadeInUp 1s ease-out 0.4s backwards;

  @media (max-width: 768px) {
    flex-direction: row;
    max-width: 90%;
    margin: 30px auto 0;
  }

  @media (max-width: 480px) {
    margin: 20px auto 0;
    padding: 6px;
  }

  &:hover,
  &:focus-within {
    background: rgba(255, 255, 255, 0.2);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
    transform: translateY(-2px);
  }

  input {
    flex: 1;
    background: transparent;
    border: none;
    padding: 16px 24px;
    color: white;
    font-size: 1.1rem;
    font-weight: 500;
    outline: none;
    width: 100%;
    letter-spacing: 0.5px;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;

    @media (max-width: 768px) {
      padding: 14px 20px;
      font-size: 1rem;
    }

    @media (max-width: 480px) {
      padding: 12px 16px;
      font-size: 0.95rem;
    }

    &::placeholder {
      color: rgba(255, 255, 255, 0.8);
      font-weight: 400;
    }

    &:focus {
      outline: none;
      box-shadow: none;
    }
  }

  .search-btn {
    background: linear-gradient(135deg, #2576ab 0%, #020024 100%);
    color: white;
    border: none;
    padding: 16px 32px;
    border-radius: 100px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    display: flex;
    align-items: center;
    gap: 10px;
    margin-right: 4px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    position: relative;
    overflow: hidden;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;

    &:focus {
      outline: none;
      box-shadow: 0 4px 20px rgba(37, 118, 171, 0.3);
    }

    &:active {
      transform: scale(0.98);
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    }

    @media (max-width: 768px) {
      padding: 14px 28px;
    }

    @media (max-width: 480px) {
      padding: 12px 24px;
      font-size: 0.95rem;
    }

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        135deg,
        rgba(255, 255, 255, 0.2) 0%,
        rgba(255, 255, 255, 0) 100%
      );
      transform: translateX(-100%);
      transition: transform 0.6s ease;
    }

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
      background: linear-gradient(135deg, #2576ab 0%, #1a1a4a 100%);

      &::before {
        transform: translateX(100%);
      }

      i {
        transform: translateX(5px) scale(1.1);
      }
    }

    i {
      font-size: 1.1rem;
      transition: all 0.3s ease;

      @media (max-width: 480px) {
        font-size: 1rem;
      }
    }
  }
}
@media (max-width: 500px) {
  .book-now-btn,
  .close-btn {
    font-size: 0.6rem !important;
  }
}

@media (max-width: 768px) {
  .search-box {
    flex-direction: row !important;
    border-radius: 100px !important;
  }

  .search-btn {
    border-radius: 100px !important;
    width: auto !important;
    margin: 0 4px !important;
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.landmarks-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  backdrop-filter: blur(8px);

  .landmarks-content {
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.1),
      rgba(255, 255, 255, 0.05)
    );
    padding: 2rem;
    border-radius: 20px;
    max-width: 800px;
    width: 90%;
    max-height: 90vh;
    overflow-y: auto;
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);

    h2 {
      color: #fff;
      text-align: center;
      margin-bottom: 2rem;
      font-size: 2rem;
      font-weight: 700;
      text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    }
  }

  .landmarks-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1.5rem;
    margin-bottom: 2rem;
  }

  .landmark-card {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 15px;
    overflow: hidden;
    transition: all 0.3s ease;
    border: 1px solid rgba(255, 255, 255, 0.1);

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
    }

    img {
      width: 100%;
      height: 350px;
      object-fit: cover;
    }

    h3 {
      color: #fff;
      padding: 1rem;
      margin: 0;
      text-align: center;
      font-size: 1.1rem;
      font-weight: 600;
    }
  }

  .modal-buttons {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-top: 2rem;

    button {
      padding: 0.8rem 2rem;
      border-radius: 12px;
      font-weight: 600;
      transition: all 0.3s ease;
      border: none;
      cursor: pointer;

      &.book-now-btn {
        background: linear-gradient(135deg, #2576ab, #4fa1d8);
        color: #fff;
        box-shadow: 0 4px 15px rgba(37, 118, 171, 0.3);

        &:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(37, 118, 171, 0.4);
        }
      }

      &.close-btn {
        background: rgba(255, 255, 255, 0.1);
        color: #fff;
        border: 1px solid rgba(255, 255, 255, 0.2);

        &:hover {
          background: rgba(255, 255, 255, 0.2);
        }
      }
    }
  }
}
.filter-select option {
  width: 400px;
}
</style>
