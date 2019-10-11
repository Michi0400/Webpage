<template>
  <v-card class="overflow-hidden">
    <v-app-bar
      color="#2054DD"
      dark
      shrink-on-scroll
      prominent
      src="https://picsum.photos/1920/1080?random"
      fade-img-on-scroll
      scroll-target="#scrolling-techniques-5"
      scroll-threshold="500"
    >
      <template v-slot:img="{ props }">
        <v-img v-bind="props" gradient="to top right, rgba(100,100,100,.7), rgba(10,10,10,.7)"></v-img>
      </template>

      <v-toolbar-title>Frontend</v-toolbar-title>

      <div class="flex-grow-1"></div>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>
    </v-app-bar>
    <v-sheet id="scrolling-techniques-5" class="overflow-y-auto" max-height="600">
      <v-container style="height: 1500px;">
        <router-view></router-view>
      </v-container>
    </v-sheet>
  </v-card>
</template>


<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data: () => ({}),
});
</script>
