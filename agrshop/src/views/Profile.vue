<template>
  <div>
    <van-tabs>
      <van-tab title="登录">
        <van-cell-group>
          <van-field required clearable v-model="loginUsername" placeholder="请输入用户名" label="用户名："></van-field>
          <van-field required clearable v-model="loginPassword" placeholder="请输入密码" label="密码：" type="password"></van-field>
        </van-cell-group>
        <div>
          <van-button type="primary" size="large">登录</van-button>
        </div>
      </van-tab>
      <van-tab title="注册">
         <van-cell-group>
          <van-field required clearable v-model="registUsername" placeholder="请输入用户名" label="用户名："></van-field>
          <van-field required clearable v-model="registPassword" placeholder="请输入密码" label="密码：" type="password"></van-field>
        </van-cell-group>
        <div>
          <van-button type="primary" size="large" @click="registHandle">注册</van-button>
        </div>
      </van-tab>
    </van-tabs>  
  </div>
</template>
<script>
import axios from 'axios';
import url from '@/views/service.config.js'
export default {
  data(){
    return {
      loginUsername:'',
      loginPassword:'',
      registUsername:'',
      registPassword:'',
    }
  },
  methods:{
    registHandle(){
      axios({
        url:url.registUser,
        method:'post',
        data:{
          userName:this.registUsername,
          password:this.registPassword
        }
      }).then(res=>{

      }).catch(err=>{

      })
    }
  }
}
</script>

<style>

</style>