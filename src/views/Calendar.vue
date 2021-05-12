<template>
	<div class="calendar">
		<v-sheet
			tile
			height="54"
			class="d-flex"
		>
			<v-btn
				icon
				class="ma-2"
				@click="$refs.calendar.prev()"
			>
				<v-icon>mdi-chevron-left</v-icon>
			</v-btn>
			<v-btn
				outlined
				class="mr-4"
				color="grey darken-2"
				@click="setToday"
			>
				Today
			</v-btn>
			<!-- <v-select
				v-model="type"
				:items="types"
				dense
				outlined
				hide-details
				class="ma-2"
				label="type"
			></v-select>
			<v-select
				v-model="mode"
				:items="modes"
				dense
				outlined
				hide-details
				label="event-overlap-mode"
				class="ma-2"
			></v-select>
			<v-select
				v-model="weekday"
				:items="weekdays"
				dense
				outlined
				hide-details
				label="weekdays"
				class="ma-2"
			></v-select>
			<v-spacer></v-spacer> -->
			<v-btn
				icon
				class="ma-2"
				@click="$refs.calendar.next()"
			>
				<v-icon>mdi-chevron-right</v-icon>
			</v-btn>
			<v-toolbar-title v-if="$refs.calendar">
				{{ $refs.calendar.title }}
			</v-toolbar-title>
		</v-sheet>
		<v-sheet height="600">
			<v-calendar
				ref="calendar"
				v-model="value"
				:weekdays="weekday"
				:type="type"
				:events="events"
				:event-overlap-mode="mode"
				:event-overlap-threshold="30"
				:event-color="getEventColor"
				@change="getEvents"
				@click:event="showEvent"
			></v-calendar>
		</v-sheet>
	</div>
</template>
<script>
	export default {
		data: () => ({
			type: 'month',
			types: ['month', 'week', 'day', '4day'],
			mode: 'stack',
			modes: ['stack', 'column'],
			weekday: [0, 1, 2, 3, 4, 5, 6],
			weekdays: [
				{ text: 'Sun - Sat', value: [0, 1, 2, 3, 4, 5, 6] },
				{ text: 'Mon - Sun', value: [1, 2, 3, 4, 5, 6, 0] },
				{ text: 'Mon - Fri', value: [1, 2, 3, 4, 5] },
				{ text: 'Mon, Wed, Fri', value: [1, 3, 5] },
			],
			value: '',
			events: [],
			colors: ['blue', 'indigo', 'deep-purple', 'cyan', 'green', 'orange', 'grey darken-1'],
			names: ['Meeting', 'Holiday', 'PTO', 'Travel', 'Event', 'Birthday', 'Conference', 'Party'],
			}),
			methods: {
				setToday () {
					this.focus = ''
				},
				getEvents ({ start, end }) {
					const events = []

					events.push(
						{
							name: "八ヶ岳自然農法勉強会(1Day)",
							start: new Date("2021-04-29"),
							end: new Date("2021-04-29"),
							color: this.colors[0],
							timed: false,
						},
						{
							name: "八ヶ岳自然農法勉強会",
							start: new Date("2021-04-28"),
							end: new Date("2021-04-29"),
							color: this.colors[0],
							timed: false,
						},
					)

					this.events = events
				},
				getEventColor (event) {
					return event.color
				},
				rnd (a, b) {
					return Math.floor((b - a + 1) * Math.random()) + a
				},
				showEvent ({ event }) {
					alert(`clicked ${event.name}`);
				},

			},
	}
</script>

<style>
	.calendar {
		width: 80%;
		margin: 0 auto;
	}
</style>