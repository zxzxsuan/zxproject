<template>
  <div>
    <h3>这是前端页面</h3>
    <ul>
      <li>html</li>
      <li>css</li>
    </ul>
    <h4>
      姓名是：{{$route.params.username}},id是：{{$route.params.userid}}
    </h4>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>