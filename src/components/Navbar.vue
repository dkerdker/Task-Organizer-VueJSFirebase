<template>
  <nav>
    <v-snackbar v-model="snackbar" timeout="4000" top color="success">
      <span class="success-notification">Awesome! You added a new project.</span>
      <v-btn color="white" text small @click="snackbar = false">Close</v-btn>
    </v-snackbar>

    <v-app-bar app>
      <v-app-bar-nav-icon color="grey" @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>
        <span class="font-weight-medium grey--text">OmegaEZ</span>&nbsp;
        <span class="font-weight-light grey--text">Tasker</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <!-- dropdown menu -->
      <div my-2>
        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn text v-bind="attrs" v-on="on">
              <v-icon color="grey" left>expand_more</v-icon>
              <span class="grey--text">Menu</span>
            </v-btn>
          </template>
          <v-list flat>
            <v-list-item
              :ripple="false"
              active-class="primary--text"
              v-for="(link, index) in links"
              :key="index"
              :to="link.route"
            >
              <v-list-item-title color="primary">{{ link.text }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>

      <div my-2>
        <v-btn text>
          <span class="grey--text">Sign Out</span>
          <v-icon color="grey" right>exit_to_app</v-icon>
        </v-btn>
      </div>
    </v-app-bar>

    <!-- side navigation drawer -->
    <v-navigation-drawer app v-model="drawer" color="primary" class="primary">
      <v-layout column align-center>
        <v-flex class="mt-5">
          <v-avatar color="white" size="104">
            <v-avatar size="100">
              <img class="text-lg-center" src="@/assets/avatar-1.jpg" />
            </v-avatar>
          </v-avatar>
          <p class="white--text subheading mt-1">{{ user.name }}</p>
        </v-flex>
        <v-flex class="mt-4 mb-3">
          <Popup @projectAdded="snackbar = true" />
        </v-flex>
      </v-layout>
      <v-list flat>
        <v-list-item
          :ripple="{ class: 'white--text' }"
          active-class="secondary"
          v-for="link in links"
          :key="link.text"
          router
          :to="link.route"
        >
          <v-list-item-icon>
            <v-icon class="white--text">{{ link.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title class="white--text">{{ link.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
import Popup from "./Popup";

export default {
  components: { Popup },
  data() {
    return {
      drawer: true,
      links: [
        { icon: "dashboard", text: "Dashboard", route: "/" },
        { icon: "folder", text: "My Projects", route: "/projects" },
        { icon: "person", text: "Team", route: "/team" }
      ],
      user: { name: "Devion Knight" },
      snackbar: false
    };
  }
};
</script>

<style>
.success-notification {
  padding-left: 1.2rem;
}
</style>