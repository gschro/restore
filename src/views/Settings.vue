<template>
    <div class="container">
      <div class="row">
        <div class="col-md-12">  
          <h3>Settings</h3>
          <h3>Name</h3>
          <h3>Time Zone</h3>
      </div>
    </div>
  </div>
</template>

<script>
import StatusList from '../components/status-list'
import { mapGetters } from 'vuex'

export default {
  name: 'Admin',
  components: {
    StatusList
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

