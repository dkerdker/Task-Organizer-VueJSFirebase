<template>
  <v-app class="grey lighten-4">
    <Navbar />

    <v-content class="mx-4 mb-4">
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar";

export default {
  components: { Navbar },
  name: "App",

  data: () => ({
    //
  })
};
</script>

<style>
.page-title {
  padding-top: 2rem;
}
/* .v-list-item--link::before {
  color: #fc636b;
}
.theme--light.v-list-item:hover::before {
  opacity: 0.1;
} */
</style>