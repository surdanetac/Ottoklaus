import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// Bootstrap - Vue
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

// Firebase

import Firebase from "firebase";
const FirebaseConfig = {
  apiKey: "AIzaSyC3sU9WTYRyqV8L1hCZUciC3kS1ohTGeEo",
  authDomain: "vue-crud-rest-38122.firebaseapp.com",
  databaseURL: "https://vue-crud-rest-38122.firebaseio.com",
  projectId: "vue-crud-rest-38122",
  storageBucket: "vue-crud-rest-38122.appspot.com",
  messagingSenderId: "756336150524",
  appId: "1:756336150524:web:d0745c404cee9367a4d479",
};
Firebase.initializeApp(FirebaseConfig);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
