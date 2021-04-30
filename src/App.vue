<template>
  <v-app>
    <v-app-bar app color="green lighten-3" dark>
		<div class="d-flex align-center">
			<v-img
			alt="Vuetify Logo"
			class="shrink mr-2"
			contain
			src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
			transition="scale-transition"
			width="40"
			/>
			<span class="hidden-sm-and-down text-h4">どうなる？！サロン</span>

		</div>

		<v-spacer></v-spacer>
		<v-btn icon>
			<router-link to="/">
				<v-icon large color="black darken-2">mdi-home</v-icon>
			</router-link>
		</v-btn>

    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "App",

  data: () => ({
    //
  }),
});
</script>

<style>
a {
	text-decoration: none;
}
</style>

