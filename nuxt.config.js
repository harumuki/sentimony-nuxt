module.exports = {
  head: {
    titleTemplate: '%s | Sentimony Records',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Montserrat' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Julius+Sans+One' },
      { rel: 'shortcut icon', href: 'https://firebasestorage.googleapis.com/v0/b/sentimony-db.appspot.com/o/favi%2Ffavicon-32-site.png?alt=media&token=a060a2ba-68f7-4b4e-b0e4-e04dd2cf7de3' },
      { rel: 'apple-touch-icon', href: 'https://firebasestorage.googleapis.com/v0/b/sentimony-db.appspot.com/o/favi%2Ffavicon-144.jpg?alt=media&token=763f1846-67b5-494e-a980-7c0eb218d28f' }
    ]
  },
  loading: {
    color: 'rgba(255,255,255,0.5)',
    height: '5px'
  },
  plugins: [
    { src: '~plugins/google-analytics.js', ssr: false },
    { src: '~/plugins/swiper.js', ssr: false },
    { src: '~/plugins/vue-tabs.js', ssr: false },
    { src: '~/plugins/v-img.js', ssr: false },
    { src: '~/plugins/fireauth.js', ssr: false },
    { src: '~/plugins/vue-ripple-directive.js', ssr: false },
    { src: '~/plugins/vue-mq.js', ssr: true },
    { src: '~/plugins/vue-disqus', ssr: true }
  ],
  css: [
    'normalize.css/normalize.css',
    'swiper/dist/css/swiper.css',
    // 'vue-nav-tabs/dist/vue-tabs.min.css'
  ],
  modules: [
    'nuxt-facebook-pixel-module'
  ],
  facebook: {
    track: 'PageView',
    pixelId: 168167750758036,
    version: '2.0',
    disabled: false
  },
  build: {
    vendor: ['axios'],
    analyze: {
      analyzerMode: 'static'
    }
  },
  router: {
    scrollBehavior: function (to, from, savedPosition) {
      return { x: 0, y: 0 }
    }
  },
  generate: {
    routes: [
      '/release/va-fantazma',
      '/release/va-fantazma/official',
      '/release/va-fantazma/bandcamp',
      '/release/va-fantazma/bandcamp24',
      '/release/va-fantazma/itunes',
      '/release/va-fantazma/googleplay',
      '/release/va-fantazma/beatport',
      '/release/va-fantazma/spotify',
      '/release/va-fantazma/junodownload',
      '/release/va-fantazma/youtube',
      '/release/va-fantazma/youtubemusic',

      '/release/va-emptinesses',
      '/release/va-emptinesses/official',
      '/release/va-emptinesses/bandcamp',
      '/release/va-emptinesses/bandcamp24',
      '/release/va-emptinesses/itunes',
      '/release/va-emptinesses/googleplay',
      '/release/va-emptinesses/beatport',
      '/release/va-emptinesses/spotify',
      '/release/va-emptinesses/junodownload',
      '/release/va-emptinesses/youtube',
      '/release/va-emptinesses/youtubemusic',

      '/release/sphingida-origin',
      '/release/sphingida-origin/official',
      '/release/sphingida-origin/bandcamp',
      '/release/sphingida-origin/bandcamp24',
      '/release/sphingida-origin/itunes',
      '/release/sphingida-origin/googleplay',
      '/release/sphingida-origin/beatport',
      '/release/sphingida-origin/spotify',
      '/release/sphingida-origin/junodownload',
      '/release/sphingida-origin/youtube',
      '/release/sphingida-origin/youtubemusic',

      '/release/va-true-story',
      '/release/va-true-story/official',
      '/release/va-true-story/bandcamp',
      '/release/va-true-story/bandcamp24',
      '/release/va-true-story/itunes',
      '/release/va-true-story/googleplay',
      '/release/va-true-story/beatport',
      '/release/va-true-story/spotify',
      '/release/va-true-story/junodownload',
      '/release/va-true-story/youtube',
      '/release/va-true-story/youtubemusic',

      '/release/spectrum-vision-lost-space-device',
      '/release/spectrum-vision-lost-space-device/official',
      '/release/spectrum-vision-lost-space-device/bandcamp',
      '/release/spectrum-vision-lost-space-device/bandcamp24',
      '/release/spectrum-vision-lost-space-device/itunes',
      '/release/spectrum-vision-lost-space-device/googleplay',
      '/release/spectrum-vision-lost-space-device/beatport',
      '/release/spectrum-vision-lost-space-device/spotify',
      '/release/spectrum-vision-lost-space-device/junodownload',
      '/release/spectrum-vision-lost-space-device/youtube',
      '/release/spectrum-vision-lost-space-device/youtubemusic',

      '/release/irukanji-z-lisu',
      '/release/irukanji-z-lisu/official',
      '/release/irukanji-z-lisu/bandcamp',
      '/release/irukanji-z-lisu/bandcamp24',
      '/release/irukanji-z-lisu/itunes',
      '/release/irukanji-z-lisu/googleplay',
      '/release/irukanji-z-lisu/beatport',
      '/release/irukanji-z-lisu/spotify',
      '/release/irukanji-z-lisu/junodownload',
      '/release/irukanji-z-lisu/youtube',
      '/release/irukanji-z-lisu/youtubemusic',

      '/release/va-ocean-scenes-higher-titans',
      '/release/va-ocean-scenes-higher-titans/official',
      '/release/va-ocean-scenes-higher-titans/bandcamp',
      '/release/va-ocean-scenes-higher-titans/bandcamp24',
      '/release/va-ocean-scenes-higher-titans/itunes',
      '/release/va-ocean-scenes-higher-titans/googleplay',
      '/release/va-ocean-scenes-higher-titans/beatport',
      '/release/va-ocean-scenes-higher-titans/spotify',
      '/release/va-ocean-scenes-higher-titans/junodownload',
      '/release/va-ocean-scenes-higher-titans/youtube',
      '/release/va-ocean-scenes-higher-titans/youtubemusic',

      '/release/senzar-before-the-morning-sun',
      '/release/senzar-before-the-morning-sun/official',
      '/release/senzar-before-the-morning-sun/bandcamp',
      '/release/senzar-before-the-morning-sun/bandcamp24',
      '/release/senzar-before-the-morning-sun/itunes',
      '/release/senzar-before-the-morning-sun/googleplay',
      '/release/senzar-before-the-morning-sun/beatport',
      '/release/senzar-before-the-morning-sun/spotify',
      '/release/senzar-before-the-morning-sun/junodownload',
      '/release/senzar-before-the-morning-sun/youtube',
      '/release/senzar-before-the-morning-sun/youtubemusic',

      '/release/va-grower',
      '/release/va-grower/official',
      '/release/va-grower/bandcamp',
      '/release/va-grower/bandcamp24',
      '/release/va-grower/itunes',
      '/release/va-grower/googleplay',
      '/release/va-grower/beatport',
      '/release/va-grower/spotify',
      '/release/va-grower/junodownload',
      '/release/va-grower/youtube',
      '/release/va-grower/youtubemusic',

      '/release/va-time-loop-beyond-borders',
      '/release/va-time-loop-beyond-borders/official',
      '/release/va-time-loop-beyond-borders/bandcamp',
      '/release/va-time-loop-beyond-borders/bandcamp24',
      '/release/va-time-loop-beyond-borders/itunes',
      '/release/va-time-loop-beyond-borders/googleplay',
      '/release/va-time-loop-beyond-borders/beatport',
      '/release/va-time-loop-beyond-borders/spotify',
      '/release/va-time-loop-beyond-borders/junodownload',
      '/release/va-time-loop-beyond-borders/youtube',
      '/release/va-time-loop-beyond-borders/youtubemusic',

      '/release/unusual-cosmic-process-weightlessness',
      '/release/unusual-cosmic-process-weightlessness/official',
      '/release/unusual-cosmic-process-weightlessness/bandcamp',
      '/release/unusual-cosmic-process-weightlessness/bandcamp24',
      '/release/unusual-cosmic-process-weightlessness/itunes',
      '/release/unusual-cosmic-process-weightlessness/googleplay',
      '/release/unusual-cosmic-process-weightlessness/beatport',
      '/release/unusual-cosmic-process-weightlessness/spotify',
      '/release/unusual-cosmic-process-weightlessness/junodownload',
      '/release/unusual-cosmic-process-weightlessness/youtube',
      '/release/unusual-cosmic-process-weightlessness/youtubemusic',

      '/release/va-tempo-syndicate',
      '/release/va-tempo-syndicate/official',
      '/release/va-tempo-syndicate/bandcamp',
      '/release/va-tempo-syndicate/bandcamp24',
      '/release/va-tempo-syndicate/itunes',
      '/release/va-tempo-syndicate/googleplay',
      '/release/va-tempo-syndicate/beatport',
      '/release/va-tempo-syndicate/spotify',
      '/release/va-tempo-syndicate/junodownload',
      '/release/va-tempo-syndicate/youtube',
      '/release/va-tempo-syndicate/youtubemusic',

      '/release/va-dancing-mavka',
      '/release/va-dancing-mavka/official',
      '/release/va-dancing-mavka/bandcamp',
      '/release/va-dancing-mavka/bandcamp24',
      '/release/va-dancing-mavka/itunes',
      '/release/va-dancing-mavka/googleplay',
      '/release/va-dancing-mavka/beatport',
      '/release/va-dancing-mavka/spotify',
      '/release/va-dancing-mavka/junodownload',
      '/release/va-dancing-mavka/youtube',
      '/release/va-dancing-mavka/youtubemusic',

      '/release/va-absence-of-gravity',
      '/release/va-absence-of-gravity/official',
      '/release/va-absence-of-gravity/bandcamp',
      '/release/va-absence-of-gravity/bandcamp24',
      '/release/va-absence-of-gravity/itunes',
      '/release/va-absence-of-gravity/googleplay',
      '/release/va-absence-of-gravity/beatport',
      '/release/va-absence-of-gravity/spotify',
      '/release/va-absence-of-gravity/junodownload',
      '/release/va-absence-of-gravity/youtube',
      '/release/va-absence-of-gravity/youtubemusic',

      '/release/va-special-places',
      '/release/va-special-places/official',
      '/release/va-special-places/bandcamp',
      '/release/va-special-places/bandcamp24',
      '/release/va-special-places/itunes',
      '/release/va-special-places/googleplay',
      '/release/va-special-places/beatport',
      '/release/va-special-places/spotify',
      '/release/va-special-places/junodownload',
      '/release/va-special-places/youtube',
      '/release/va-special-places/youtubemusic',

      '/release/hypnotriod-seven-heavenly-edges',
      '/release/hypnotriod-seven-heavenly-edges/official',
      '/release/hypnotriod-seven-heavenly-edges/bandcamp',
      '/release/hypnotriod-seven-heavenly-edges/bandcamp24',
      '/release/hypnotriod-seven-heavenly-edges/itunes',
      '/release/hypnotriod-seven-heavenly-edges/googleplay',
      '/release/hypnotriod-seven-heavenly-edges/beatport',
      '/release/hypnotriod-seven-heavenly-edges/spotify',
      '/release/hypnotriod-seven-heavenly-edges/junodownload',
      '/release/hypnotriod-seven-heavenly-edges/youtube',
      '/release/hypnotriod-seven-heavenly-edges/youtubemusic',

      '/release/specialmind-the-missing-particle',
      '/release/specialmind-the-missing-particle/official',
      '/release/specialmind-the-missing-particle/bandcamp',
      '/release/specialmind-the-missing-particle/bandcamp24',
      '/release/specialmind-the-missing-particle/itunes',
      '/release/specialmind-the-missing-particle/googleplay',
      '/release/specialmind-the-missing-particle/beatport',
      '/release/specialmind-the-missing-particle/spotify',
      '/release/specialmind-the-missing-particle/junodownload',
      '/release/specialmind-the-missing-particle/youtube',
      '/release/specialmind-the-missing-particle/youtubemusic',

      '/release/tentura-aurora',
      '/release/tentura-aurora/official',
      '/release/tentura-aurora/bandcamp',
      '/release/tentura-aurora/bandcamp24',
      '/release/tentura-aurora/itunes',
      '/release/tentura-aurora/googleplay',
      '/release/tentura-aurora/beatport',
      '/release/tentura-aurora/spotify',
      '/release/tentura-aurora/junodownload',
      '/release/tentura-aurora/youtube',
      '/release/tentura-aurora/youtubemusic',

      '/release/cifroteca-roof-raiser-wild-storm',
      '/release/cifroteca-roof-raiser-wild-storm/official',
      '/release/cifroteca-roof-raiser-wild-storm/bandcamp',
      '/release/cifroteca-roof-raiser-wild-storm/bandcamp24',
      '/release/cifroteca-roof-raiser-wild-storm/itunes',
      '/release/cifroteca-roof-raiser-wild-storm/googleplay',
      '/release/cifroteca-roof-raiser-wild-storm/beatport',
      '/release/cifroteca-roof-raiser-wild-storm/spotify',
      '/release/cifroteca-roof-raiser-wild-storm/junodownload',
      '/release/cifroteca-roof-raiser-wild-storm/youtube',
      '/release/cifroteca-roof-raiser-wild-storm/youtubemusic',

      '/release/va-gamayun-tale',
      '/release/va-gamayun-tale/official',
      '/release/va-gamayun-tale/bandcamp',
      '/release/va-gamayun-tale/bandcamp24',
      '/release/va-gamayun-tale/itunes',
      '/release/va-gamayun-tale/googleplay',
      '/release/va-gamayun-tale/beatport',
      '/release/va-gamayun-tale/spotify',
      '/release/va-gamayun-tale/junodownload',
      '/release/va-gamayun-tale/youtube',
      '/release/va-gamayun-tale/youtubemusic',

      '/release/psyfactor-retro-scientific',
      '/release/psyfactor-retro-scientific/official',
      '/release/psyfactor-retro-scientific/bandcamp',
      '/release/psyfactor-retro-scientific/bandcamp24',
      '/release/psyfactor-retro-scientific/itunes',
      '/release/psyfactor-retro-scientific/googleplay',
      '/release/psyfactor-retro-scientific/beatport',
      '/release/psyfactor-retro-scientific/spotify',
      '/release/psyfactor-retro-scientific/junodownload',
      '/release/psyfactor-retro-scientific/youtube',
      '/release/psyfactor-retro-scientific/youtubemusic',

      '/release/ufomatka-the-ep',
      '/release/ufomatka-the-ep/official',
      '/release/ufomatka-the-ep/bandcamp',
      '/release/ufomatka-the-ep/bandcamp24',
      '/release/ufomatka-the-ep/itunes',
      '/release/ufomatka-the-ep/googleplay',
      '/release/ufomatka-the-ep/beatport',
      '/release/ufomatka-the-ep/spotify',
      '/release/ufomatka-the-ep/junodownload',
      '/release/ufomatka-the-ep/youtube',
      '/release/ufomatka-the-ep/youtubemusic',

      '/release/tentura-beyond-illusion',
      '/release/tentura-beyond-illusion/official',
      '/release/tentura-beyond-illusion/bandcamp',
      '/release/tentura-beyond-illusion/bandcamp24',
      '/release/tentura-beyond-illusion/itunes',
      '/release/tentura-beyond-illusion/googleplay',
      '/release/tentura-beyond-illusion/beatport',
      '/release/tentura-beyond-illusion/spotify',
      '/release/tentura-beyond-illusion/junodownload',
      '/release/tentura-beyond-illusion/youtube',
      '/release/tentura-beyond-illusion/youtubemusic',

      '/release/va-the-ten',
      '/release/va-the-ten/official',
      '/release/va-the-ten/bandcamp',
      '/release/va-the-ten/bandcamp24',
      '/release/va-the-ten/itunes',
      '/release/va-the-ten/googleplay',
      '/release/va-the-ten/beatport',
      '/release/va-the-ten/spotify',
      '/release/va-the-ten/junodownload',
      '/release/va-the-ten/youtube',
      '/release/va-the-ten/youtubemusic',

      '/release/zymosis-insight',
      '/release/zymosis-insight/official',
      '/release/zymosis-insight/bandcamp',
      '/release/zymosis-insight/bandcamp24',
      '/release/zymosis-insight/itunes',
      '/release/zymosis-insight/googleplay',
      '/release/zymosis-insight/beatport',
      '/release/zymosis-insight/spotify',
      '/release/zymosis-insight/junodownload',
      '/release/zymosis-insight/youtube',
      '/release/zymosis-insight/youtubemusic',

      '/release/overdream-beautiful-thinking',
      '/release/overdream-beautiful-thinking/official',
      '/release/overdream-beautiful-thinking/bandcamp',
      '/release/overdream-beautiful-thinking/bandcamp24',
      '/release/overdream-beautiful-thinking/itunes',
      '/release/overdream-beautiful-thinking/googleplay',
      '/release/overdream-beautiful-thinking/beatport',
      '/release/overdream-beautiful-thinking/spotify',
      '/release/overdream-beautiful-thinking/junodownload',
      '/release/overdream-beautiful-thinking/youtube',
      '/release/overdream-beautiful-thinking/youtubemusic',

      '/release/ufomatka-altering-the-synaptic-controllers',
      '/release/ufomatka-altering-the-synaptic-controllers/official',
      '/release/ufomatka-altering-the-synaptic-controllers/bandcamp',
      '/release/ufomatka-altering-the-synaptic-controllers/bandcamp24',
      '/release/ufomatka-altering-the-synaptic-controllers/itunes',
      '/release/ufomatka-altering-the-synaptic-controllers/googleplay',
      '/release/ufomatka-altering-the-synaptic-controllers/beatport',
      '/release/ufomatka-altering-the-synaptic-controllers/spotify',
      '/release/ufomatka-altering-the-synaptic-controllers/junodownload',
      '/release/ufomatka-altering-the-synaptic-controllers/youtube',
      '/release/ufomatka-altering-the-synaptic-controllers/youtubemusic',

      '/release/omnisound-destiny',
      '/release/omnisound-destiny/official',
      '/release/omnisound-destiny/bandcamp',
      '/release/omnisound-destiny/bandcamp24',
      '/release/omnisound-destiny/itunes',
      '/release/omnisound-destiny/googleplay',
      '/release/omnisound-destiny/beatport',
      '/release/omnisound-destiny/spotify',
      '/release/omnisound-destiny/junodownload',
      '/release/omnisound-destiny/youtube',
      '/release/omnisound-destiny/youtubemusic',

      '/release/zymosis-nichna',
      '/release/zymosis-nichna/official',
      '/release/zymosis-nichna/bandcamp',
      '/release/zymosis-nichna/bandcamp24',
      '/release/zymosis-nichna/itunes',
      '/release/zymosis-nichna/googleplay',
      '/release/zymosis-nichna/beatport',
      '/release/zymosis-nichna/spotify',
      '/release/zymosis-nichna/junodownload',
      '/release/zymosis-nichna/youtube',
      '/release/zymosis-nichna/youtubemusic',

      '/release/va-futured-vol-1',
      '/release/va-futured-vol-1/official',
      '/release/va-futured-vol-1/bandcamp',
      '/release/va-futured-vol-1/bandcamp24',
      '/release/va-futured-vol-1/itunes',
      '/release/va-futured-vol-1/googleplay',
      '/release/va-futured-vol-1/beatport',
      '/release/va-futured-vol-1/spotify',
      '/release/va-futured-vol-1/junodownload',
      '/release/va-futured-vol-1/youtube',
      '/release/va-futured-vol-1/youtubemusic',

      '/release/psydewise-synaptic-elastic',
      '/release/psydewise-synaptic-elastic/official',
      '/release/psydewise-synaptic-elastic/bandcamp',
      '/release/psydewise-synaptic-elastic/bandcamp24',
      '/release/psydewise-synaptic-elastic/itunes',
      '/release/psydewise-synaptic-elastic/googleplay',
      '/release/psydewise-synaptic-elastic/beatport',
      '/release/psydewise-synaptic-elastic/spotify',
      '/release/psydewise-synaptic-elastic/junodownload',
      '/release/psydewise-synaptic-elastic/youtube',
      '/release/psydewise-synaptic-elastic/youtubemusic',

      '/release/u-wave-autumn-discovery',
      '/release/u-wave-autumn-discovery/official',
      '/release/u-wave-autumn-discovery/bandcamp',
      '/release/u-wave-autumn-discovery/bandcamp24',
      '/release/u-wave-autumn-discovery/itunes',
      '/release/u-wave-autumn-discovery/googleplay',
      '/release/u-wave-autumn-discovery/beatport',
      '/release/u-wave-autumn-discovery/spotify',
      '/release/u-wave-autumn-discovery/junodownload',
      '/release/u-wave-autumn-discovery/youtube',
      '/release/u-wave-autumn-discovery/youtubemusic',

      '/release/va-futured-vol-2',
      '/release/va-futured-vol-2/official',
      '/release/va-futured-vol-2/bandcamp',
      '/release/va-futured-vol-2/bandcamp24',
      '/release/va-futured-vol-2/itunes',
      '/release/va-futured-vol-2/googleplay',
      '/release/va-futured-vol-2/beatport',
      '/release/va-futured-vol-2/spotify',
      '/release/va-futured-vol-2/junodownload',
      '/release/va-futured-vol-2/youtube',
      '/release/va-futured-vol-2/youtubemusic',

      '/release/juelz-dependence',
      '/release/juelz-dependence/official',
      '/release/juelz-dependence/bandcamp',
      '/release/juelz-dependence/bandcamp24',
      '/release/juelz-dependence/itunes',
      '/release/juelz-dependence/googleplay',
      '/release/juelz-dependence/beatport',
      '/release/juelz-dependence/spotify',
      '/release/juelz-dependence/junodownload',
      '/release/juelz-dependence/youtube',
      '/release/juelz-dependence/youtubemusic',

      '/release/aesthesia-perception',
      '/release/aesthesia-perception/official',
      '/release/aesthesia-perception/bandcamp',
      '/release/aesthesia-perception/bandcamp24',
      '/release/aesthesia-perception/itunes',
      '/release/aesthesia-perception/googleplay',
      '/release/aesthesia-perception/beatport',
      '/release/aesthesia-perception/spotify',
      '/release/aesthesia-perception/junodownload',
      '/release/aesthesia-perception/youtube',
      '/release/aesthesia-perception/youtubemusic',

      '/release/unusual-cosmic-process-brain-channel',
      '/release/unusual-cosmic-process-brain-channel/official',
      '/release/unusual-cosmic-process-brain-channel/bandcamp',
      '/release/unusual-cosmic-process-brain-channel/bandcamp24',
      '/release/unusual-cosmic-process-brain-channel/itunes',
      '/release/unusual-cosmic-process-brain-channel/googleplay',
      '/release/unusual-cosmic-process-brain-channel/beatport',
      '/release/unusual-cosmic-process-brain-channel/spotify',
      '/release/unusual-cosmic-process-brain-channel/junodownload',
      '/release/unusual-cosmic-process-brain-channel/youtube',
      '/release/unusual-cosmic-process-brain-channel/youtubemusic',

      '/release/space-organ-deep-impressions',
      '/release/space-organ-deep-impressions/official',
      '/release/space-organ-deep-impressions/bandcamp',
      '/release/space-organ-deep-impressions/bandcamp24',
      '/release/space-organ-deep-impressions/itunes',
      '/release/space-organ-deep-impressions/googleplay',
      '/release/space-organ-deep-impressions/beatport',
      '/release/space-organ-deep-impressions/spotify',
      '/release/space-organ-deep-impressions/junodownload',
      '/release/space-organ-deep-impressions/youtube',
      '/release/space-organ-deep-impressions/youtubemusic',

      '/release/psydewise-radio-dystopia',
      '/release/psydewise-radio-dystopia/official',
      '/release/psydewise-radio-dystopia/bandcamp',
      '/release/psydewise-radio-dystopia/bandcamp24',
      '/release/psydewise-radio-dystopia/itunes',
      '/release/psydewise-radio-dystopia/googleplay',
      '/release/psydewise-radio-dystopia/beatport',
      '/release/psydewise-radio-dystopia/spotify',
      '/release/psydewise-radio-dystopia/junodownload',
      '/release/psydewise-radio-dystopia/youtube',
      '/release/psydewise-radio-dystopia/youtubemusic',

      '/release/artech-stringer-mode',
      '/release/artech-stringer-mode/official',
      '/release/artech-stringer-mode/bandcamp',
      '/release/artech-stringer-mode/bandcamp24',
      '/release/artech-stringer-mode/itunes',
      '/release/artech-stringer-mode/googleplay',
      '/release/artech-stringer-mode/beatport',
      '/release/artech-stringer-mode/spotify',
      '/release/artech-stringer-mode/junodownload',
      '/release/artech-stringer-mode/youtube',
      '/release/artech-stringer-mode/youtubemusic',

      '/release/va-futured-vol-3',
      '/release/va-futured-vol-3/official',
      '/release/va-futured-vol-3/bandcamp',
      '/release/va-futured-vol-3/bandcamp24',
      '/release/va-futured-vol-3/itunes',
      '/release/va-futured-vol-3/googleplay',
      '/release/va-futured-vol-3/beatport',
      '/release/va-futured-vol-3/spotify',
      '/release/va-futured-vol-3/junodownload',
      '/release/va-futured-vol-3/youtube',
      '/release/va-futured-vol-3/youtubemusic',

      '/release/va-gatekey-vol-1',
      '/release/va-gatekey-vol-1/official',
      '/release/va-gatekey-vol-1/bandcamp',
      '/release/va-gatekey-vol-1/bandcamp24',
      '/release/va-gatekey-vol-1/itunes',
      '/release/va-gatekey-vol-1/googleplay',
      '/release/va-gatekey-vol-1/beatport',
      '/release/va-gatekey-vol-1/spotify',
      '/release/va-gatekey-vol-1/junodownload',
      '/release/va-gatekey-vol-1/youtube',
      '/release/va-gatekey-vol-1/youtubemusic',

      '/release/gojja-amber-current',
      '/release/gojja-amber-current/official',
      '/release/gojja-amber-current/bandcamp',
      '/release/gojja-amber-current/bandcamp24',
      '/release/gojja-amber-current/itunes',
      '/release/gojja-amber-current/googleplay',
      '/release/gojja-amber-current/beatport',
      '/release/gojja-amber-current/spotify',
      '/release/gojja-amber-current/junodownload',
      '/release/gojja-amber-current/youtube',
      '/release/gojja-amber-current/youtubemusic',

      '/release/gaz-mask-quetzalcoatl',
      '/release/gaz-mask-quetzalcoatl/official',
      '/release/gaz-mask-quetzalcoatl/bandcamp',
      '/release/gaz-mask-quetzalcoatl/bandcamp24',
      '/release/gaz-mask-quetzalcoatl/itunes',
      '/release/gaz-mask-quetzalcoatl/googleplay',
      '/release/gaz-mask-quetzalcoatl/beatport',
      '/release/gaz-mask-quetzalcoatl/spotify',
      '/release/gaz-mask-quetzalcoatl/junodownload',
      '/release/gaz-mask-quetzalcoatl/youtube',
      '/release/gaz-mask-quetzalcoatl/youtubemusic',

      '/release/boketto-yugen',
      '/release/boketto-yugen/official',
      '/release/boketto-yugen/bandcamp',
      '/release/boketto-yugen/bandcamp24',
      '/release/boketto-yugen/itunes',
      '/release/boketto-yugen/googleplay',
      '/release/boketto-yugen/beatport',
      '/release/boketto-yugen/spotify',
      '/release/boketto-yugen/junodownload',
      '/release/boketto-yugen/youtube',
      '/release/boketto-yugen/youtubemusic',

      '/release/kabi-mboko',
      '/release/kabi-mboko/official',
      '/release/kabi-mboko/bandcamp',
      '/release/kabi-mboko/bandcamp24',
      '/release/kabi-mboko/itunes',
      '/release/kabi-mboko/googleplay',
      '/release/kabi-mboko/beatport',
      '/release/kabi-mboko/spotify',
      '/release/kabi-mboko/junodownload',
      '/release/kabi-mboko/youtube',
      '/release/kabi-mboko/youtubemusic',

      '/release/vorg-echoes',
      '/release/vorg-echoes/official',
      '/release/vorg-echoes/bandcamp',
      '/release/vorg-echoes/bandcamp24',
      '/release/vorg-echoes/itunes',
      '/release/vorg-echoes/googleplay',
      '/release/vorg-echoes/beatport',
      '/release/vorg-echoes/spotify',
      '/release/vorg-echoes/junodownload',
      '/release/vorg-echoes/youtube',
      '/release/vorg-echoes/youtubemusic',

      '/artist/irukanji',
      '/artist/zymosis',
      '/artist/overdream',
      '/artist/psydewise',
      '/artist/vorg',
      '/artist/boketto'
      '/artist/space-organ',
      '/artist/gojja',
      '/artist/gaz-mask',
      '/artist/aesthesia',
      '/artist/omnisound',
      '/artist/tentura',
      '/artist/juelz',
      '/artist/eleexr',
      '/artist/exolt',
      '/artist/kabi',
      '/artist/erot',
      '/artist/alexander-daf',
      '/artist/already-maged',
      '/artist/astropilot',
      '/artist/calamus',
      '/artist/capsula',
      '/artist/chronos',
      '/artist/cifroteca',
      '/artist/crystal-vibe',
      '/artist/dagas',
      '/artist/daoine-sidhe',
      '/artist/eguana',
      '/artist/flooting-grooves',
      '/artist/harax',
      '/artist/heinali',
      '/artist/hypnotriod',
      '/artist/katya-chilly',
      '/artist/magmadivers',
      '/artist/neirula',
      '/artist/psyfactor',
      '/artist/roof-raiser',
      '/artist/saikozaurus',
      '/artist/senzar',
      '/artist/shiva3',
      '/artist/shivattva',
      '/artist/shizolizer-gin',
      '/artist/sky-technology',
      '/artist/solcast',
      '/artist/specialmind',
      '/artist/spectrum-vision',
      '/artist/sphingida',
      '/artist/sygnals',
      '/artist/tookytooky',
      '/artist/ufomatka',
      '/artist/unstable-elements',
      '/artist/unusual-cosmic-process',
      '/artist/vonoom',

      '/event/shift-space',
      '/event/alt-space',
      '/event/water-marks',
      '/event/home-space',
      '/event/five-years',

      '/friend/another-dimension',
      '/friend/clocktail',
      '/friend/moon-koradji',
      '/friend/parvati',
      '/friend/space-baby',
      '/friend/treetrolla',
      '/friend/zenon'
    ]
  }
}
