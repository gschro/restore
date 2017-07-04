<template>    
<form class="form-horizontal">
  <div class="form-group">
    <label for="id" class="col-sm-2 control-label">ID</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" id="id" v-model="newIncident.id">
    </div>
  </div>
  <div class="form-group">
    <label for="title" class="col-sm-2 control-label">Title</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" id="title" v-model="newIncident.title">
    </div>
  </div>
  <!--<div class="form-group">
    <div class="col-sm-offset-2 col-sm-10">
      <div class="checkbox">
        <label>
          <input type="checkbox"> Remember me
        </label>
      </div>
    </div>
  </div>-->
  <div class="form-group">
    <div class="col-sm-offset-2 col-sm-10">
      <button @click.prevent="addIncident(newIncident)" type="submit" class="btn btn-default">Create</button>
    </div>
  </div>
</form>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'new-incident',
  props: ['open'],
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
      newIncident: {
        id: '',
        title: ''
      }
    }
  },
  firebase: function () {
    return {
      incidents: this.db.ref('active-incidents/org')
    }
  },
  methods: {
    addIncident: function (newIncident) {
      newIncident.user = this.user.displayName
      newIncident.open_date = new Date()
      newIncident.status = 'Investigating'

      var key = this.db.ref('incidents').push().key
      var updates = {}
      updates['/incidents/' + key] = newIncident
      updates['/active-incidents/' + 'org' + '/' + key] = newIncident

      return this.db.ref().update(updates)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.fa-trash{ cursor: pointer }
</style>
