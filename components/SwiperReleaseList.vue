<template>
  <div class="swiper-release-list">
    <div class="title">Releases</div>

    <swiper class="swiper" :options="swiperOption">
      <swiper-slide
        class="item"
        v-for="(i, index) in sortByDate"
        :key="index"
        v-if="i.visible"
      >
        <router-link v-if="i.slug" :to="'/release/' + i.slug + '/'" class="item__link" active-class="is-selected">
          <div class="item__wrapper">
            <div class="item__cover">
              <div v-if="i.cover" class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
              <img v-if="i.cover" class="item__img swiper-lazy"
                :src="'https://content.sentimony.com/assets/img/releases/small/' + i.slug + '.jpg'"
                :srcset="'https://content.sentimony.com/assets/img/releases/small/' + i.slug + '.jpg 1x, https://content.sentimony.com/assets/img/releases/small-retina/' + i.slug + '.jpg 2x'"
                :alt="i.title + ' Small Thumbnail'"
              >
              <div v-else class="item__soon">
                Artwork<br>
                in<br>
                progress
              </div>
            </div>
            <div v-if="i.coming_soon" class="item__status--green">Coming Soon</div>
            <div v-if="i.new" class="item__status--red">Out Now</div>
          </div>
          <div class="item__title">{{ i.title }}</div>
        </router-link>
      </swiper-slide>
      <!-- <div class="swiper-pagination" slot="pagination"></div> -->
      <div class="swiper-button-next" slot="button-next"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <!-- <div class="swiper-scrollbar" slot="scrollbar"></div> -->
    </swiper>

  </div>
</template>

<script>
  import axios from 'axios'
  import sortBy from 'lodash/sortBy'

  export default {
    data() {
      return {
        releases: [],
        swiperOption: {
          lazy: true,
          // scrollbar: {
          //   el: '.swiper-scrollbar',
          //   hide: true
          // },
          mousewheelControl: true,
          mousewheelForceToAxis: true,
          freeMode: true,
          slidesPerView: 'auto',
          speed: 350,
          // slidesPerGroup: 4,
          slideToClickedSlide: true,
          centeredSlides: true,
          //  pagination: {
          //   el: '.swiper-pagination',
          //   clickable: true
          // },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        }
      }
    },
    mounted () {
      return axios({
        url: 'https://sentimony-db.firebaseio.com/releases.json'
      })
      .then((res) => {
        this.releases = res.data;
      })
    },
    computed: {
      sortByDate () {
        return sortBy(this.releases, 'date').reverse()
      }
    }
  }
</script>

<style lang="scss">
  @import '../node_modules/coriolan-ui/tools/variables';
  @import '../node_modules/coriolan-ui/mixins/media';
  @import '../assets/scss/item';
  @import '../assets/scss/title';
  @import '../assets/scss/swiper-restyle';

  .swiper-release-list {
    position: relative;
  }
</style>
