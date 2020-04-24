<template>
  <div>
    <h3>这是后端页面</h3>
    <ul>
      <li>java</li>
      <li>c++</li>
    </ul>
    <div>课程是:{{$route.params.classname}},id是：{{$route.params.classid}}</div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>