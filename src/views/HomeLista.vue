<template>
  <div class="homeLista container">
    <header>
      <h3>Lista de Juguetes</h3>
    </header>
    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Codigo</th>
          <th scope="col">Nombre</th>
          <th scope="col">Precio</th>
          <th scope="col">Stock</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in productostable" :key="index">
          <th scope="row">{{ index + 1 }}</th>
          <td>{{ item.data.codigo }}</td>
          <td>{{ item.data.nombre }}</td>
          <td>{{ item.data.precio }}</td>
          <td>{{ item.data.stock }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import axios from "axios";
import Firebase from "firebase";
import { mapState } from "vuex";
export default {
  name: "HomeLista",
  computed: {
    ...mapState(["productostable"])
  },
  data() {
    return {};
  },
  mounted() {
    axios
      .get(
        "https://us-central1-vue-crud-rest-38122.cloudfunctions.net/juguetes/juguetes"
      )
      .then(data => {
        this.$store.dispatch("setItems", data.data);
      })
      .catch(err => {
        alert(" No esta llegando el la base de datos");
      });
  }
};
</script>
<style >
.homeLista {
  width: 80%;
}
</style>