<template>
  <div class="home">
    <van-button type="primary">主要按钮</van-button>
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="用户名"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit" @click="gain">提交</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapActions, mapState, mapMutations } = createNamespacedHelpers("User");
import { Button,Form,Field  } from "vant";
export default {
  components: {
    [Button.name]: Button,
    [Form.name]: Form,
    [Field.name]: Field,
  },
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    ...mapActions(['dologin']),
    onSubmit(values) {
      console.log("submit", values);
    },
    gain(){
      this.dologin('getdata')


    }
  }
};
</script>

<style lang="scss" scoped>
.home {
  padding: 0 0.1rem;
  background: #cccccc;
  height: 100vh;
}
</style>



