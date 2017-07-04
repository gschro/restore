<template>    
    <table class="table table-striped">
      <thead>
        <tr>
          <th>ID</th>
          <th>Open Date</th>
          <th>Title</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="incident in incidents">                
            <td class="col-md-2">                
                <router-link :to="{ name: 'Incident', params: { incidentid: incident['.key'] }}">{{incident.id}}</router-link>
            </td>
            <td>
              {{incident.open_date}}
            </td>
            <td>
              {{incident.title}}
            </td>
            <td>
              {{incident.status}}
            </td>
        </tr>
      </tbody>
    </table>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'incident-list',
  props: ['list'],
  computed: {
    ...mapGetters({
      db: 'db',
      fb: 'fb',
      user: 'user'
    }),
    userId: function () {
      return this.user.uid
    }
  },
  data: function () {
    return {
      boards: null
    }
  },
  firebase: function () {
    console.log(this.list + 'test')
    return {
      incidents: this.db.ref(this.list + '-incidents/org').orderByChild('open_date')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.fa-trash{ cursor: pointer }
</style>
