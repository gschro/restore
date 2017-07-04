<template>
  <div>
    <div>
        <incident :db='db' :incidentid='incidentId'></incident>                            
    </div>
  </div>
</template>

<script>
import Incident from '../components/incident'
import { mapGetters } from 'vuex'

export default {
  name: 'Incident-View',
  components: {
    Incident
  },
  computed: {
    ...mapGetters({
      db: 'db'
    }),
    incidentId: function () {
      return this.$route.params.incidentid
    }
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>

</style>
