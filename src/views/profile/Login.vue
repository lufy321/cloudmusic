<template>
  <div class="login">
    <nav-bar>
      <template v-slot:left>
        <svg class="icon" aria-hidden="true" @click="$router.back(-1)">
          <use xlink:href="#icon-jiantoufanhui"></use>
        </svg>
      </template>
      <template v-slot:default>用户登录</template>
    </nav-bar>

    <div class="top-img">
      <img src="~assets/image/login.jpg" alt="">
    </div>

    <van-form @submit="onSubmit">
      <van-field
          v-model="phone"
          name="手机号码"
          label="手机号码"
          placeholder="请输入正确手机号码"
          :rules="[{ required: true, message: '请填写手机号码' }   ]"
      />
      <van-field
          v-model="password"
          type="password"
          name="密码"
          label="密码"
          placeholder="密码"
          :rules="[{required: true, message: '请填写密码'}]"
      />

      <div class="su-button">
        <div class="link-login" @click="$router.push({path:'/register'})">
          没有账号，立即注册
        </div>
        <van-button round block type="info" color="red" native-type="submit">
          提交
        </van-button>
      </div>
    </van-form>
  </div>

</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import {useRouter} from "vue-router";
import {useStore} from "vuex";
import {reactive, toRefs} from "vue";
export default {
  name: "Login",
  components: {
    NavBar
  },
  setup() {
    const router = useRouter();
    const store = useStore();
    const userinfo = reactive({
      phone: "",
      password: "",
    });
    const onSubmit = async () => {
      let result = await store.dispatch('phoneLogin', userinfo)
      console.log(result);
      if(result.code == 200) {
        router.push('/profile')
      }
    }

    return {
      onSubmit,
      ...toRefs(userinfo)
    }
  }
}
</script>

<style scoped>
.login .icon {
  width: 20px;
  height: 20px;
}
.top-img {
  text-align: center;
  height: 150px;
  line-height: 150px;
}
.top-img img{
  border-radius: 10px;
  width: 50px;
  height: 50px;
}
.su-button {
  margin: 16px;
}
.link-login {
  text-align: center;
  margin-bottom: 10px;
  color: red;
}
</style>