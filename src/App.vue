<template>
  <v-app>
    <v-navigation-drawer app expand-on-hover permanent src="https://picsum.photos/1920/1080?random">
      <template v-slot:prepend>
        <v-list>
          <v-list-item>
            <v-list-item-avatar>
              <v-img src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?f=y"></v-img>
            </v-list-item-avatar>
          </v-list-item>

          <v-list-item link>
            <v-list-item-content>
              <v-list-item-title class="title">Michi</v-list-item-title>
            </v-list-item-content>
            <v-list-item-action>
              <v-icon>mdi-menu-down</v-icon>
            </v-list-item-action>
          </v-list-item>
        </v-list>
      </template>

      <v-divider></v-divider>

      <v-list nav dense>
        <router-link to="/">
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-apps</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Dashboard</v-list-item-title>
          </v-list-item>
        </router-link>
        <router-link to="/about">
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-contact-mail</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Impressum</v-list-item-title>
          </v-list-item>
        </router-link>
      </v-list>
    </v-navigation-drawer>
    <v-content>
      <HelloWorld></HelloWorld>
      <v-container fluid></v-container>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from './components/HelloWorld.vue';

export default Vue.extend({
  data() {
    return {
      items: [
        { title: 'Home', icon: 'mdi-home-city' },
        { title: 'My Account', icon: 'mdi-account' },
        { title: 'Users', icon: 'mdi-account-group-outline' },
      ],
    };
  },
  methods: {
    changeTheme(): any {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    },
  },
  components: {
    HelloWorld,
  },
});
</script>
