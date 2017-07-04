<template>
    <intro-section></intro-section>       
</template>

<script>
import IntroSection from '../components/intro-section'
import { mapGetters } from 'vuex'

export default {
  name: 'Home',
  components: {
    IntroSection
  },
  computed: {
    ...mapGetters({
      db: 'db'
    })
  },
  firebase: function () {
    return {
      sounds: this.db.ref().child('sounds'),
      about: this.db.ref().child('about').orderByChild('sort')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
