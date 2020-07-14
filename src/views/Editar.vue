<template>
  <div class="editar container">
    <header>
      <h3>Editar Producto</h3>
    </header>
    <table class="table">
      <thead class="thead-light">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Codigo</th>
          <th scope="col">Nombre</th>
          <th scope="col">Precio</th>
          <th scope="col">Stock</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in productostable" :key="index">
          <th scope="row">{{ index + 1 }}</th>
          <td>{{ item.data.codigo }}</td>
          <td>{{ item.data.nombre }}</td>
          <td>{{ item.data.precio }}</td>
          <td>{{ item.data.stock }}</td>
          <td>
            <b-button id="show-btn" @click="showModal()">Open Modal</b-button>

            <b-modal ref="my-modal" hide-footer title="Using Component Methods">
              <div class="d-block text-center">
                <h3>Hello From My Modal!</h3>
              </div>
              <b-button class="mt-3" variant="outline-danger" block @click="hideModal">Close Me</b-button>
              <b-button class="mt-2" variant="outline-warning" block @click="toggleModal">Toggle Me</b-button>
            </b-modal>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
// import Firebase from "firebase";
import { mapState } from "vuex";
export default {
  name: "HomeLista",
  computed: {
    ...mapState(["productostable"])
  },
  data() {
    return {
      id: ""
    };
  },
  methods: {
    primerclick(index) {
      console.log(index);
    },
    showModal() {
      this.$bvModal.show();
    },
    hideModal() {
      this.$bvModal.hide();
    },
    toggleModal() {
      // We pass the ID of the button that we want to return focus to
      // when the modal has hidden
      this.$refs["my-modal"].toggle("#toggle-btn");
    }
  }
};
</script>
<style >
.homeLista {
  width: 80%;
}
</style>