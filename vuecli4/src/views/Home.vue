<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div>
    <!-- {{$store.state.count}} -->
    这里是：{{count}}
  </div>
  </div>
  
</template>

<script>
// @ is an alias to /src

import {mapState} from 'vuex'
export default {
  name: 'Home',
  components: {
    
  },
  computed:{
    ...mapState(['count'])
  }
}
</script>
