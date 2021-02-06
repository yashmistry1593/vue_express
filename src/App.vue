<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn to="/" text>
        <span class="mr-2">Home</span>
        <v-icon>mdi-home</v-icon>
      </v-btn>
      <v-btn to="/todo" text>
        <span class="mr-2">Todo App</span>
        <v-icon>mdi-basket</v-icon>
      </v-btn>
      <v-btn to="/elastic" text>
        <span class="mr-2">Elastic</span>
      </v-btn>

      <v-btn to="/profile" text>
        <span class="mr-2">Profile</span>
      </v-btn>

      <v-btn to="/about" text>
        <span class="mr-2">About</span>
        <v-icon>mdi-about</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
//import HelloWorld from './components/HelloWorld';

export default {
  name: "App",

  components: {
    //  HelloWorld,
  },

  data: () => ({
    //
  }),
};
</script>
