<template>
  <div>
    <v-carousel>
      <v-carousel-item
        max="10,"
        v-for="index in 10"
        :key="index"
        src="https://picsum.photos/2000/1000"
        reverse-transition="fade-transition"
        transition="fade-transition"
      ></v-carousel-item>
    </v-carousel>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({});
</script>
