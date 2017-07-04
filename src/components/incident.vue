<template>
  <div class="container">
    <div class='row' style='margin-top:50px;'>
      <div class="col-sm-4">
        <!--<form>
          <div class="form-group">
            <label for="id">ID</label>
            <input type="text" class="form-control" id="id" v-model="incident.id">
          </div>
          <div class="form-group">
            <label for="title">Title</label>
            <input type="text" class="form-control" id="title" v-model="incident.title">
          </div>
          <div class="form-group">
            <label for="openDate">Open Time</label>
            <input type="date" class="form-control" id="title" v-model="incident.open_date">
          </div>
          <div class="form-group">
            <label for="openDate">Open Duration</label>
            0:03:21
          </div>
          <div class="checkbox">
            <label>
              <input type="checkbox"> Check me out
            </label>
          </div>          
        </form>-->
        <form class="form-horizontal">
          <div class="form-group">
            <label for="id" class="col-sm-2 control-label">ID</label>
            <div class="col-sm-10">
              <input type="text" class="form-control" id="id" v-model="incident.id">
            </div>
          </div>
          <div class="form-group">
            <label for="title" class="col-sm-2 control-label">Title</label>
            <div class="col-sm-10">
              <input type="text" class="form-control" id="title" v-model="incident.title">
            </div>
          </div>
          <div class="form-group">
            <label for="openDate" class="col-sm-2 control-label">Open Time</label>
            <div class="col-sm-10">
              <input type="text" class="form-control" id="openDate" v-model="incident.open_date">
            </div>
          </div>
          <div class="form-group">
            <label for="openDate" class="col-sm-2 control-label">Open Duration</label>
            <div class="col-sm-10">
              0:03:21
            </div>
          </div>
          <div class="form-group">
            <div class="col-sm-offset-2 col-sm-10">
              <button type="submit" class="btn btn-default">Save</button>
            </div>
          </div>
        </form>
      </div>
      <div class="col-sm-4">
      <form>
          <div class="form-group">
            <label for="id">Impact Summary</label>
            <input type="text" class="form-control" id="id" v-model="incident.id">
          </div>
          <div class="form-group">
            <label for="title">Title</label>
            <input type="text" class="form-control" id="title" v-model="incident.title">
          </div>
          <div class="form-group">
            <label for="openDate">Open Time</label>
            <input type="date" class="form-control" id="title" v-model="incident.open_date">
          </div>
          <div class="form-group">
            <label for="openDate">Open Duration</label>
            0:03:21
          </div>
          <div class="checkbox">
            <label>
              <input type="checkbox"> Check me out
            </label>
          </div>          
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
// import Vue from 'vue'

export default {
  name: 'Incident',
  props: ['db', 'incidentid'],
  components: {
  },
  computed: {
    ...mapGetters({
      user: 'user'
    }),
    userId: function () {
      return this.user.uid
    }
  },
  data: function () {
    return {
      editMode: false,
      itemToAdd: {
        type: 'blank',
        data: null
      }
    }
  },
  firebase: function () {
    console.log('incidents/' + this.incidentid)
    return {
      incident: {
        source: this.db.ref('incidents/' + this.incidentid),
          // optionally bind as an object
        asObject: true,
        // optionally provide the cancelCallback
        cancelCallback: function () {},
        // this is called once the data has been retrieved from firebase
        readyCallback: function () {}
      }
    }
  },
  methods: {
    setEditMode: function (val) {
      this.editMode = val
    },
    saveIncident: function (item) {
      this.$firebaseRefs.incident.update(item.data)
      this.$store.commit('SET_ITEM_TO_EDIT', item)
    },
    deleteIncident: function (e) {
      this.$firebaseRefs.incident.remove()
    }
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style>

</style>
