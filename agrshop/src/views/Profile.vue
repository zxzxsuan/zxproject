<template>
  <div>
    <van-tabs>
      <van-tab title="登录">
        <van-cell-group>
          <van-field required clearable v-model="loginUsername" placeholder="请输入用户名" label="用户名："></van-field>
          <van-field required clearable v-model="loginPassword" placeholder="请输入密码" label="密码：" type="password"></van-field>
        </van-cell-group>
        <div>
          <van-button type="primary" size="large" @click="loginHandler">登录</van-button>
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
import url from '@/views/service.config.js';
import { mapActions} from 'vuex'
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
    ...mapActions(['loginAction']),
    //注册的处理方法
    registHandle(){
      axios({
        url:url.registUser,
        method:'post',
        data:{
          userName:this.registUsername,
          password:this.registPassword
        }
      }).then(res=>{
        //console.log(res);
        if(res.data.code==200){
          this.$toast.success('注册成功');
          this.registUsername=this.registPassword='';
        }else{
          this.$toast.fail('注册失败');
        }
      }).catch(err=>{
        console.log(err);
         this.$toast.fail('注册失败');
      })
    },
    //登录的处理方法
    loginHandler(){
      axios({
        url:url.loginUser,
        method:'post',
        data:{
          userName:this.loginUsername,
          password:this.loginPassword
        }
      }).then(res=>{
        //console.log(res)
        if(res.data.code==200){
          new Promise((resolve)=>{
            setTimeout(()=>{
              resolve();
            },1000);
          }).then(()=>{
            this.$toast.success('登录成功');
            //保存登录状态
            this.loginAction(res.data.userInfo);
            this.$router.push('/');
          }).catch(err=>{
            this.$toast.fail('保存登录状态失败');
            console.loginPassword(err);
          })
        }
      }).catch(err=>{
        console.log(err);
        this.$toast.fail('登录失败')
      });
    }
  }
}
</script>

<style>

</style>