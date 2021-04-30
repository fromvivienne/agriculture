<template>
	<div class="member">
		<v-row>
			<v-col cols="auto" class="mr-auto pl-10 pt-10">
				メンバ
			</v-col>
			<v-col cols="auto" class="pr-10 pt-10">
				<v-btn icon v-bind:disabled="isAvatar" v-on:click="viewChange('avatar')">
					<v-icon large color="blue darken-2">mdi-account-circle</v-icon>
				</v-btn>
				<v-btn icon v-bind:disabled="isCard" v-on:click="viewChange('card')">
					<v-icon large color="black darken-2">mdi-account-box</v-icon>
				</v-btn>
			</v-col>
		</v-row>
		<div v-if="showMode=='avatar'">
			<v-row justify="space-around">
				<v-col>
					<div class="avater-div">
						<v-avatar color="primary" size="56">
							<span class="white--text headline">YY</span>
						</v-avatar>
						<div class="my-4">Yutaka Yoshida</div>
					</div>
				</v-col>
				<v-col>
					<div class="avater-div">
						<v-avatar color="primary" size="56">
							<span class="white--text headline">YY</span>
						</v-avatar>
						<div class="my-4">Yutaka Yoshida</div>
					</div>
				</v-col>
				<v-col>
					<div class="avater-div">
						<v-avatar color="primary" size="56">
							<span class="white--text headline">SY</span>
						</v-avatar>
						<div class="my-4">Shuhei Yoshida</div>
					</div>
				</v-col>
				<v-col>
					<div class="avater-div">
						<v-avatar color="primary" size="56">
							<span class="white--text headline">TY</span>
						</v-avatar>
						<div class="my-4">Takeshi Yoshida</div>
					</div>
				</v-col>
			</v-row>
			<v-row justify="space-around">
				<v-col>
					<div class="avater-div">
						<v-avatar color="primary" size="56">
							<span class="white--text headline">YY</span>
						</v-avatar>
						<div class="my-4">Yutaka Yoshida</div>
					</div>
				</v-col>
				<v-col>
					<div class="avater-div">
						<v-avatar color="primary" size="56">
							<span class="white--text headline">YY</span>
						</v-avatar>
						<div class="my-4">Yutaka Yoshida</div>
					</div>
				</v-col>
				<v-col>
					<div class="avater-div">
						<v-avatar color="primary" size="56">
							<span class="white--text headline">SY</span>
						</v-avatar>
						<div class="my-4">Shuhei Yoshida</div>
					</div>
				</v-col>
				<v-col>
					<!-- <div class="avater-div">
						<v-avatar color="primary" size="56">
							<span class="white--text headline">TY</span>
						</v-avatar>
						<div class="my-4">Takeshi Yoshida</div>
					</div> -->
				</v-col>
			</v-row>
		</div>

		<div v-if="showMode=='card'">
			<v-row justify="space-around">
				<v-col>
					<v-card :loading="loading" class="mx-2 mt-2" max-width="300">
						<template slot="progress">
							<v-progress-linear color="deep-purple" height="10" indeterminate></v-progress-linear>
						</template>

						<v-card-title>
							<v-avatar color="primary" size="56">
								<span class="white--text headline">YY</span>
							</v-avatar>
							<span class="card-name">Yutaka Yoshida</span>
						</v-card-title>

						<v-divider class="mx-4"></v-divider>

						<v-card-text>
							<v-row align="center" class="mx-0">
								<v-icon large color="blue darken-2">mdi-twitter</v-icon>
								<span class="card-name">http://twitter.address.com</span>
							</v-row>
							<v-row align="center" class="mx-0">
								<v-icon large color="darken-2">mdi-facebook</v-icon>
								<span class="card-name">http://facebook.address.com</span>
							</v-row>
						</v-card-text>
					</v-card>
				</v-col>
				<v-col>
					<v-card :loading="loading" class="mx-2 mt-2" max-width="300">
						<template slot="progress">
							<v-progress-linear color="deep-purple" height="10" indeterminate></v-progress-linear>
						</template>

						<v-card-title>
							<v-avatar color="primary" size="56">
								<span class="white--text headline">YY</span>
							</v-avatar>
							<span class="card-name">Yutaka Yoshida</span>
						</v-card-title>

						<v-divider class="mx-4"></v-divider>

						<v-card-text>
							<v-row align="center" class="mx-0">
								<v-icon large color="blue darken-2">mdi-twitter</v-icon>
								<span class="card-name">http://twitter.address.com</span>
							</v-row>
							<v-row align="center" class="mx-0">
								<v-icon large color="darken-2">mdi-facebook</v-icon>
								<span class="card-name">http://facebook.address.com</span>
							</v-row>
						</v-card-text>
					</v-card>
				</v-col>
				<v-col>
					<v-card :loading="loading" class="mx-2 mt-2" max-width="300">
						<template slot="progress">
							<v-progress-linear color="deep-purple" height="10" indeterminate></v-progress-linear>
						</template>

						<v-card-title>
							<v-avatar color="primary" size="56">
								<span class="white--text headline">YY</span>
							</v-avatar>
							<span class="card-name">Yutaka Yoshida</span>
						</v-card-title>

						<v-divider class="mx-4"></v-divider>

						<v-card-text>
							<v-row align="center" class="mx-0">
								<v-icon large color="blue darken-2">mdi-twitter</v-icon>
								<span class="card-name">http://twitter.address.com</span>
							</v-row>
							<v-row align="center" class="mx-0">
								<v-icon large color="darken-2">mdi-facebook</v-icon>
								<span class="card-name">http://facebook.address.com</span>
							</v-row>
						</v-card-text>
					</v-card>
				</v-col>
			</v-row>
			<v-row justify="space-around">
				<v-col>
					<v-card :loading="loading" class="mx-2 mt-2" max-width="300">
						<template slot="progress">
							<v-progress-linear color="deep-purple" height="10" indeterminate></v-progress-linear>
						</template>

						<v-card-title>
							<v-avatar color="primary" size="56">
								<span class="white--text headline">YY</span>
							</v-avatar>
							<span class="card-name">Yutaka Yoshida</span>
						</v-card-title>

						<v-divider class="mx-4"></v-divider>

						<v-card-text>
							<v-row align="center" class="mx-0">
								<v-icon large color="blue darken-2">mdi-twitter</v-icon>
								<span class="card-name">http://twitter.address.com</span>
							</v-row>
							<v-row align="center" class="mx-0">
								<v-icon large color="darken-2">mdi-facebook</v-icon>
								<span class="card-name">http://facebook.address.com</span>
							</v-row>
						</v-card-text>
					</v-card>
				</v-col>
				<v-col>
					<v-card :loading="loading" class="mx-2 mt-2" max-width="300">
						<template slot="progress">
							<v-progress-linear color="deep-purple" height="10" indeterminate></v-progress-linear>
						</template>

						<v-card-title>
							<v-avatar color="primary" size="56">
								<span class="white--text headline">YY</span>
							</v-avatar>
							<span class="card-name">Yutaka Yoshida</span>
						</v-card-title>

						<v-divider class="mx-4"></v-divider>

						<v-card-text>
							<v-row align="center" class="mx-0">
								<v-icon large color="blue darken-2">mdi-twitter</v-icon>
								<span class="card-name">http://twitter.address.com</span>
							</v-row>
							<v-row align="center" class="mx-0">
								<v-icon large color="darken-2">mdi-facebook</v-icon>
								<span class="card-name">http://facebook.address.com</span>
							</v-row>
						</v-card-text>
					</v-card>
				</v-col>
				<v-col>
					<v-card :loading="loading" class="mx-2 mt-2" max-width="300">
						<template slot="progress">
							<v-progress-linear color="deep-purple" height="10" indeterminate></v-progress-linear>
						</template>

						<v-card-title>
							<v-avatar color="primary" size="56">
								<span class="white--text headline">YY</span>
							</v-avatar>
							<span class="card-name">Yutaka Yoshida</span>
						</v-card-title>

						<v-divider class="mx-4"></v-divider>

						<v-card-text>
							<v-row align="center" class="mx-0">
								<v-icon large color="blue darken-2">mdi-twitter</v-icon>
								<span class="card-name">http://twitter.address.com</span>
							</v-row>
							<v-row align="center" class="mx-0">
								<v-icon large color="darken-2">mdi-facebook</v-icon>
								<span class="card-name">http://facebook.address.com</span>
							</v-row>
						</v-card-text>
					</v-card>
				</v-col>
			</v-row>
			<v-row justify="space-around">
				<v-col>
					<v-card :loading="loading" class="mx-2 mt-2" max-width="300">
						<template slot="progress">
							<v-progress-linear color="deep-purple" height="10" indeterminate></v-progress-linear>
						</template>

						<v-card-title>
							<v-avatar color="primary" size="56">
								<span class="white--text headline">YY</span>
							</v-avatar>
							<span class="card-name">Yutaka Yoshida</span>
						</v-card-title>

						<v-divider class="mx-4"></v-divider>

						<v-card-text>
							<v-row align="center" class="mx-0">
								<v-icon large color="blue darken-2">mdi-twitter</v-icon>
								<span class="card-name">http://twitter.address.com</span>
							</v-row>
							<v-row align="center" class="mx-0">
								<v-icon large color="darken-2">mdi-facebook</v-icon>
								<span class="card-name">http://facebook.address.com</span>
							</v-row>
						</v-card-text>
					</v-card>
				</v-col>
				<v-col>
					<v-card :loading="loading" class="mx-2 mt-2" max-width="300">
						<template slot="progress">
							<v-progress-linear color="deep-purple" height="10" indeterminate></v-progress-linear>
						</template>

						<v-card-title>
							<v-avatar color="primary" size="56">
								<span class="white--text headline">YY</span>
							</v-avatar>
							<span class="card-name">Yutaka Yoshida</span>
						</v-card-title>

						<v-divider class="mx-4"></v-divider>

						<v-card-text>
							<v-row align="center" class="mx-0">
								<v-icon large color="blue darken-2">mdi-twitter</v-icon>
								<span class="card-name">http://twitter.address.com</span>
							</v-row>
							<v-row align="center" class="mx-0">
								<v-icon large color="darken-2">mdi-facebook</v-icon>
								<span class="card-name">http://facebook.address.com</span>
							</v-row>
						</v-card-text>
					</v-card>
				</v-col>
				<v-col>
					<v-card :loading="loading" class="mx-2 mt-2" max-width="300">
						<template slot="progress">
							<v-progress-linear color="deep-purple" height="10" indeterminate></v-progress-linear>
						</template>

						<v-card-title>
							<v-avatar color="primary" size="56">
								<span class="white--text headline">YY</span>
							</v-avatar>
							<span class="card-name">Yutaka Yoshida</span>
						</v-card-title>

						<v-divider class="mx-4"></v-divider>

						<v-card-text>
							<v-row align="center" class="mx-0">
								<v-icon large color="blue darken-2">mdi-twitter</v-icon>
								<span class="card-name">http://twitter.address.com</span>
							</v-row>
							<v-row align="center" class="mx-0">
								<v-icon large color="darken-2">mdi-facebook</v-icon>
								<span class="card-name">http://facebook.address.com</span>
							</v-row>
						</v-card-text>
					</v-card>
				</v-col>
			</v-row>
		</div>
	</div>
</template>

<script>
export default {
	// showMode: "avatar",
	data: function() {
		return {
			showMode: "avatar",
			isAvatar: false,
			isCard: false,
		}
	},
	methods: {
		viewChange: function (mode) {
			this.showMode = mode;
			if (mode == "avatar") {
				this.isAvatar = false;
				this.isCard = false;
			} else {
				this.isAvatar = false;
				this.isCard = false;
			}
		}
	}
}
</script>

<style>
	.avater-div {
		margin-top: 3rem;
		text-align: center;
	}
	.card-name {
		margin-left: 1rem;
	}
</style>