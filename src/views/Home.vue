<template>
  <main-page />
</template>

<script lang="ts">
import Vue from "vue";
import MainPage from "../components/MainPage.vue";

export default Vue.extend({
  name: "Home",

  components: {
    MainPage,
  },
});
</script>
