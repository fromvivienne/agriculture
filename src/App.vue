<template>
	<v-app :style="{ background: $vuetify.theme.themes.light.background }">
		<!-- <v-app-bar app color="light-blue lighten-4">
			<div class="d-flex align-center">
				<v-img
					alt="Donaru Logo"
					class="shrink mr-2"
					contain
					src="/img/icons/donaru-img.png"
					transition="scale-transition"
					width="40"
				/>
				<span class="hidden-sm-and-down text-h4 title-font">どうなる ?! サロン</span>
			</div>

			<v-spacer></v-spacer>
			<v-btn icon>
				<router-link to="/">
					<v-icon large color="black darken-2">mdi-home</v-icon>
				</router-link>
			</v-btn>

		</v-app-bar> -->

		<v-main>
			<router-view />
		</v-main>
		<!-- <v-bottom>
			<v-bottom-navigation v-model="value">
				<v-btn value="recent">
					<span>Recent</span>
					<v-icon>mdi-history</v-icon>
				</v-btn>
				<v-btn value="favorites">
					<span>Favorites</span>
					<v-icon>mdi-heart</v-icon>
				</v-btn>
				<v-btn value="nearby">
					<span>Nearby</span>
					<v-icon>mdi-map-marker</v-icon>
				</v-btn>
			</v-bottom-navigation>
		</v-bottom> -->
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
#app {
  font-family: 'Senobi Gothic', cursive !important;
}
a {
	text-decoration: none;
}
.title-font {
  font-family: 'Senobi Gothic', cursive !important;
}
</style>
