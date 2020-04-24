<template>
  <div>
      <p>这是path页面</p>
     <router-link :to='{name:"Frontend",params:{username:"zx",userid:19}}'>前端</router-link>
     <router-link to='/path/backend/java/1'>后端</router-link> 
     <router-view></router-view>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>