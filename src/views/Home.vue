<template>
  <home-link />
</template>

<script lang="ts">
import Vue from "vue";
import HomeLink from "../components/HomeLink.vue";

export default Vue.extend({
  name: "Home",

  components: {
    HomeLink,
  },
});
</script>
