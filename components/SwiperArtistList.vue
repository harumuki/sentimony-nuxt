<template>
  <div class="swiper-artist-list">
    <div class="title">Artists</div>

    <swiper class="swiper" :options="swiperOption">
      <swiper-slide
        class="item"
        v-for="(i, index) in sortByCategoryId"
        :key="index"
        v-if="i.visible"
      >
        <router-link :to="'/artist/' + i.slug + '/'" class="item__link" active-class="is-selected">
          <div class="item__wrapper">
            <div class="item__cover">
              <div v-if="i.photo" class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
              <img v-if="i.photo" class="item__img swiper-lazy"
                :src="'https://content.sentimony.com/assets/img/artists/small/' + i.slug + '.jpg'"
                :srcset="'https://content.sentimony.com/assets/img/artists/small/' + i.slug + '.jpg 1x, https://content.sentimony.com/assets/img/artists/small-retina/' + i.slug + '.jpg 2x'"
                :alt="i.title + ' Small Thumbnail'"
              >
              <div v-else class="item__soon">
                Photo<br>
                coming<br>
                soon
              </div>
            </div>
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
        artists: [],
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
        url: 'https://sentimony-db.firebaseio.com/artists.json'
      })
      .then((res) => {
        this.artists = res.data;
      })
    },
    computed: {
      sortByCategoryId () {
        return sortBy(this.artists, 'category_id')
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

  .swiper-artist-list {
    position: relative;
  }
</style>
