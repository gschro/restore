<template>
    <div class="container">
      <div class="row">
        <div class="col-md-12">  
          <h3>ORG</h3>
          <h3>Active Incidents</h3>
          <incident-list :list="'active'"></incident-list>
          <h3>New Incident</h3>
          <new-incident></new-incident>
          <h3>Recent Incidents</h3>
          <incident-list :list="'past'"></incident-list>
      </div>
    </div>
  </div>
</template>

<script>
import IncidentList from '../components/incident-list'
import NewIncident from '../components/new-incident'
import { mapGetters } from 'vuex'

export default {
  name: 'Dashboard',
  components: {
    IncidentList,
    NewIncident
  },
  data: function () {
    return {
      fullWidth: true
    }
  },
  computed: {
    ...mapGetters({
      db: 'db',
      user: 'user'
    })
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>

</style>

