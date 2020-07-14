<template>
  <div class="container">
    <b-form>
      <b-form-group id="input-group-1" label="Email address:" label-for="input-1">
        <b-form-input id="input-1" v-model="form.email" type="email"></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Enter your password" label-for="input-2">
        <b-form-input id="input-2" v-model="form.password" type="password"></b-form-input>
      </b-form-group>

      <b-button variant="primary" @click="login()">Log In</b-button>
      <b-button variant="danger">Registrarse</b-button>
    </b-form>
  </div>
</template>

<script>
import Firebase from "firebase";
export default {
  data() {
    return {
      form: {
        email: "usuario1@prueba.com",
        password: "123456",
      },
    };
  },
  methods: {
    login() {
      Firebase.auth()
        .signInWithEmailAndPassword(this.form.email, this.form.password)
        .then(
          (accept) => {
            alert("Iniciaste sesion correctamente");
            this.quienSoy;
            this.$router.push({ name: "Homelista" });
          },
          (reject) => {
            alert("Usuario No existe");
            console.log(reject.message);
          }
        );
    },
  },
};
</script>
