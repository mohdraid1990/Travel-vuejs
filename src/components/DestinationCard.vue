<script setup>
defineProps({
  destination: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="destination-card">
    <div class="destination-img">
      <img :src="destination.image" :alt="destination.name" />
      <div class="destination-rating">
        <span class="star">★</span>
        {{ destination.rating }}
      </div>
    </div>
    <div class="destination-info">
      <h3>{{ destination.name }}</h3>
      <p>{{ destination.description }}</p>
      <div class="destination-footer">
        <div class="destination-price">
          <span class="price">${{ destination.price }}</span>
          <span class="period">/ person</span>
        </div>
        <a href="#" class="btn-primary">Explore</a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.destination-card {
  background-color: #ffffff;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  position: relative;
  border: 1px solid #e5e7eb;
}

.destination-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.12);
}

.destination-img {
  position: relative;
  height: 260px;
  overflow: hidden;
}

.destination-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
  filter: brightness(1) contrast(1.1);
}

.destination-card:hover .destination-img img {
  transform: scale(1.08);
}

.destination-rating {
  position: absolute;
  top: 16px;
  right: 16px;
  background: rgba(255, 255, 255, 0.98);
  padding: 8px 16px;
  border-radius: 50px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 6px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  font-family: "Poppins", sans-serif;
  font-size: 1rem;
  color: #1a56db;
  border: 1px solid rgba(255, 255, 255, 0.3);
}

.star {
  color: #fbbf24;
  font-size: 1.1rem;
}

.destination-info {
  padding: 24px;
  background: #ffffff;
}

.destination-info h3 {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 10px;
  color: #111827;
  font-family: "Playfair Display", serif;
  letter-spacing: -0.5px;
  line-height: 1.3;
  transition: color 0.3s ease;
}

.destination-card:hover .destination-info h3 {
  color: #1a56db;
}

.destination-info p {
  color: #4b5563;
  margin-bottom: 18px;
  line-height: 1.6;
  font-size: 1rem;
  font-family: "Poppins", sans-serif;
}

.destination-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 12px;
  border-top: 1px solid #e5e7eb;
}

.destination-price {
  display: flex;
  flex-direction: column;
}

.price {
  font-size: 1.3rem;
  font-weight: 700;
  color: #1a56db;
  font-family: "Poppins", sans-serif;
}

.period {
  font-size: 0.9rem;
  color: #6b7280;
  font-family: "Poppins", sans-serif;
}

.destination-footer .btn-primary {
  padding: 10px 24px;
  font-size: 1rem;
  font-weight: 600;
  background: linear-gradient(135deg, #1a56db 0%, #2563eb 100%);
  color: white;
  border-radius: 50px;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 8px;
  box-shadow: 0 4px 12px rgba(26, 86, 219, 0.15);
  position: relative;
  overflow: hidden;
  font-family: "Poppins", sans-serif;
  border: none;
  cursor: pointer;
}

.destination-footer .btn-primary::before {
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
  transition: transform 0.5s ease;
}

.destination-footer .btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(26, 86, 219, 0.2);
}

.destination-footer .btn-primary:hover::before {
  transform: translateX(100%);
}

@media (max-width: 768px) {
  .destination-img {
    height: 240px;
  }

  .destination-info {
    padding: 20px;
  }

  .destination-info h3 {
    font-size: 1.3rem;
  }

  .destination-info p {
    font-size: 0.95rem;
  }

  .price {
    font-size: 1.2rem;
  }

  .destination-footer .btn-primary {
    padding: 8px 20px;
    font-size: 0.95rem;
  }
}

@media (max-width: 480px) {
  .destination-img {
    height: 220px;
  }

  .destination-info {
    padding: 18px;
  }

  .destination-info h3 {
    font-size: 1.2rem;
  }

  .destination-rating {
    padding: 6px 12px;
    font-size: 0.9rem;
  }
}
</style>
