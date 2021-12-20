<template>
  <div>
    <div
      id="carouselExampleCaptions"
      class="carousel slide d-flex justify-content-center"
      data-ride="carousel"
    >
      <ol class="carousel-indicators">
        <li
          data-target="#carouselExampleCaptions"
          v-for="(banner, index) in banners"
          :key="index"
          :data-slide-to="index"
          :class="{ active: index == selectedSlide }"
          @click="onIndicatorsClick(index)"
        ></li>
      </ol>
      <div class="carousel-inner">
        <div
          class="carousel-item"
          v-for="(banner, index) in banners"
          :key="index"
          :class="{ active: index == selectedSlide }"
        >
          <img
            :src="banner.image"
            height="400"
            width="800"
            class="d-block w-100"
            alt="..."
          />
          <div class="carousel-caption d-none d-md-block">
            <h5>{{ banner.title }}</h5>
            <p>{{ banner.description }}</p>
            <a
              :href="banner.url"
              type="button"
              class="btn btn-outline-success btn-sm"
            >
              READ MORE >>
            </a>
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-target="#carouselExampleCaptions"
        data-slide="prev"
      >
        <span
          class="carousel-control-prev-icon"
          aria-hidden="true"
          @click="onPrevious"
        ></span>
        <span class="sr-only">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-target="#carouselExampleCaptions"
        data-slide="next"
      >
        <span
          class="carousel-control-next-icon"
          aria-hidden="true"
          @click="onNext"
        ></span>
        <span class="sr-only" @click="onNext">Next</span>
      </button>
    </div>
  </div>
</template>

<script>
import carouselApi from "../api/carousel-data";
export default {
  name: "Carousel",
  data() {
    return {
      banners: [],
      selectedSlide: 0,
    };
  },
  computed: {
    numSlides() {
      return this.banners.length;
    },
  },
  mounted,
  methods: {
    onNext,
    onPrevious,
    setSlide,
    onIndicatorsClick,
  },
};

async function mounted() {
  const data = await carouselApi.getCarouselData();
  this.banners = data.map(element => {
    return { 
      id: element.uuid.length ? element.uuid[0].value : "",
      title: element.name.length ? element.name[0].value : "",
      url: element.field_read_more.length ? element.field_read_more[0].uri : "",
      image: element.field_media_image.length ? element.field_media_image[0].url : "",
      description: element.field_description.length ? element.field_description[0].value : "",
    }
  });
}

function onIndicatorsClick(index) {
  this.setSlide(index);
}

function onNext() {
  this.setSlide(this.selectedSlide + 1);
}

function onPrevious() {
  this.setSlide(this.selectedSlide - 1);
}

function setSlide(slide) {
  const numSlides = this.numSlides;
  const noWrap = false;

  if (numSlides === 0) {
    return;
  }
  this.selectedSlide =
    slide >= numSlides
      ? noWrap
        ? numSlides - 1
        : 0
      : slide < 0
      ? noWrap
        ? 0
        : numSlides - 1
      : slide;
}
</script>

<style>
</style>