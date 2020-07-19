<template>
  <div>
    <h1>这是一个vuex的例子</h1>
     <!-- <div>
     <button @click="$store.commit('add')">点击加1</button>
      {{$store.state.count}}
      </div>
      <div>{{$store.state}}</div> -->
      <button @click="add">点击加一</button>
      <button @click="$store.commit('reduce')">点击减一</button>
      <button @click="addAction">点击减一</button>
      <div>
        {{count}}
      </div>
      <div>
         {{newCount}}
      </div>
      
  </div>
  

</template>

<script>
import{mapState,mapMutations,mapGetters,mapActions} from 'vuex'
export default {
    computed:{
      ...mapState(['count']),
      ...mapGetters(['newCount'])
    },
    methods:{
      ...mapMutations(["add"]),
      ...mapActions(["addAction"])
    }
}   
</script>

<style>

</style>