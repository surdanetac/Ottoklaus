<template>
  <div class="login">
    <div class="m-4">
      <h3>Otto Klaus Store</h3>
      <img alt="Vue logo" src="../assets/logo.png" />
    </div>
    <FormLogin />
  </div>
</template>

<script>
// @ is an alias to /src
import FormLogin from "@/components/FormLogin.vue";

export default {
  name: "Login",
  components: {
    FormLogin,
  },
};
</script>
