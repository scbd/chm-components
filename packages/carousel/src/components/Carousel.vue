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
            :src="getImgUrl(banner.image)"
            height="400"
            width="800"
            class="d-block w-100"
            alt="..."
          />
          <div class="carousel-caption d-none d-md-block">
            <h5>{{banner.title}}</h5>
            <p>{{banner.description}}</p>
            <a :href="banner.url" type="button" class="btn btn-outline-success btn-sm">
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
export default {
  name: "Carousel",
  data() {
    return {
    //   banners: [
    //     "Gau_female",
    //     "hello3",
    //     "hello2",
    //     "Gau_female",
    //     "hello3",
    //     "hello2",
    //   ],
      banners: [
        {
          image: "Gau_female",
          url: "https://demo.test.chm-cbd.net/news/new-species-banded-iguana-discovered-island-gau",
          title:
            "A new species of banded iguana is discovered on the island of Gau",
          description:
            "Researchers from the U.S. Geological Survey, Taronga Conservation Society Australia, The National Trust of Fiji and NatureFiji-MareqetiViti have discovered a new species of banded iguana…",
        },
         {
          image: "hello3",
          url: "https://demo.test.chm-cbd.net/news/new-species-banded-iguana-discovered-island-gau",
          title:
            "A new species of banded iguana is discovered on the island of Gau",
          description:
            "Researchers from the U.S. Geological Survey, Taronga Conservation Society Australia, The National Trust of Fiji and NatureFiji-MareqetiViti have discovered a new species of banded iguana…",
        },
         {
          image: "hello2",
          url: "https://demo.test.chm-cbd.net/news/new-species-banded-iguana-discovered-island-gau",
          title:
            "A new species of banded iguana is discovered on the island of Gau",
          description:
            "Researchers from the U.S. Geological Survey, Taronga Conservation Society Australia, The National Trust of Fiji and NatureFiji-MareqetiViti have discovered a new species of banded iguana…",
        },
      ],
      selectedSlide: 0,
    };
  },
  computed: {
    numSlides() {
      return this.banners.length;
    },
  },
  methods: {
    getImgUrl(pet) {
      var images = require.context("../assets/", false, /\.jpg$/);
      return images("./" + pet + ".jpg");
    },
    onNext,
    onPrevious,
    setSlide,
    onIndicatorsClick,
  },
};

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