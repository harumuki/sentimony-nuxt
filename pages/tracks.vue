<template>
  <div class="tracks">
    <h1>Tracks</h1>
    <div class="" style="width: 500px; display: inline-block; text-align: left">
      <div class="" style="margin-bottom: 20px"
        v-for="(i, index) in sortByDate"
        :key="index"
      >
        <div class="" style="margin-bottom: 20px">
          {{ i.title }}
        </div>
        <div  class=""
          v-for="(ii, index) in i.tracklist.tracks"
          :key="'b' + index"
        >
          <div class="">
            {{ index + 1 }}
            {{ ii.artist }} -
            {{ ii.title }}
          </div>
        </div>
        <div class="">
          _
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from '~/plugins/axios'
  import sortBy from 'lodash/sortBy'

  export default {
    async asyncData() {
      const { data } = await axios.get('releases.json')
      return { releases: data }
    },
    computed: {
      sortByDate () {
        return sortBy(this.releases, 'date').reverse().reverse()
      }
    },
    // filters: {
    //   year (date) {
    //     return date.split('-')[0]
    //   }
    // },
    head: {
      title: 'Releases',
      meta: [
        { name: 'description', content: 'Tracks of Sentimony Records' },
        { property: 'og:image', content: 'https://content.sentimony.com/assets/img/og-images/sentimony/og-releases.jpg' }
      ]
    }
  }
</script>

<style lang="scss">
  @import '../assets/scss/page';
  // @import '../assets/scss/item';
  // @import '../assets/scss/list';

  .releases {
    @extend .page;
    max-width: 1278px;
    margin: 0 auto;
  }
</style>
