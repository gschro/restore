<template>
  <div>
    <div  v-bind:class=""> <!--board.full_width ? '' : 'container'                           -->
        <incident :db='db' :id='boardid'></incident>                            
    </div>
  </div>
</template>

<script>
import Board from '../components/incident'
import { mapGetters } from 'vuex'

export default {
  name: 'Incident-View',
  props: ['boardid'],
  components: {
    Board
  },
  // data: function () {
  //   return {
  //     full_width: false
  //   }
  // },
  computed: {
    ...mapGetters({
      db: 'db'
    }),
    boardId: function () {
      return this.$route.params.boardid
    }
  },
  firebase: function () {
    return {
      board: this.db.ref('boards/' + this.boardId)
    }
  },
  methods: {
    updateBoard: function (board) {
      this.$firebaseRefs.board.update({ full_width: board.full_width })
    }
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>

</style>
