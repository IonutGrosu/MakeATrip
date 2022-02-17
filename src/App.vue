<template>
	<div style="backgroundcolor: red">
		<div class="grid">
			<div class="col-10 col-offset-1" style="margin-top: 2rem">
				<h1>Horsens → Aarhus</h1>
				<Trip
					class="tripCard"
					:time="morningTrips[0].time"
					:track="morningTrips[0].track"
				/>
				<Trip
					class="tripCard"
					:time="morningTrips[1].time"
					:track="morningTrips[1].track"
				/>
			</div>
			<div class="col-10 col-offset-1" style="margin-top: 2rem">
				<h1>Aarhus → Horsens</h1>
				<Trip
					class="tripCard"
					:time="eveningTrips[0].time"
					:track="eveningTrips[0].track"
				/>
				<Trip
					class="tripCard"
					:time="eveningTrips[1].time"
					:track="eveningTrips[1].track"
				/>
			</div>
		</div>
	</div>
</template>

<script>
	import axios from "axios";
	import Trip from "./components/Trip.vue";

	export default {
		name: "App",
		data() {
			return {
				morningTrips: [
					{
						time: "-",
						track: "-",
					},
					{
						time: "-",
						track: "-",
					},
				],
				eveningTrips: [
					{
						time: "-",
						track: "-",
					},
					{
						time: "-",
						track: "-",
					},
				],
			};
		},
		components: {
			Trip,
		},
		created() {
			document.body.style.backgroundColor = "#fff393";
			console.log("created");
			axios
				.get(
					"https://xmlopen.rejseplanen.dk/bin/rest.exe/trip?originId=008600066&destId=008600053&format=json"
				)
				.then((response) => {
					console.log(response.data);
					this.morningTrips[0].time =
						response.data.TripList.Trip[0].Leg.Origin.time;
					this.morningTrips[0].track =
						response.data.TripList.Trip[0].Leg.Origin.rtTrack;
					this.morningTrips[1].time =
						response.data.TripList.Trip[1].Leg.Origin.time;
					this.morningTrips[1].track =
						response.data.TripList.Trip[1].Leg.Origin.rtTrack;
				});
			axios
				.get(
					"https://xmlopen.rejseplanen.dk/bin/rest.exe/trip?originId=008600053&destId=008600066&format=json"
				)
				.then((response) => {
					console.log(response.data);
					this.eveningTrips[0].time =
						response.data.TripList.Trip[0].Leg.Origin.time;
					this.eveningTrips[0].track =
						response.data.TripList.Trip[0].Leg.Origin.rtTrack;
					this.eveningTrips[1].time =
						response.data.TripList.Trip[1].Leg.Origin.time;
					this.eveningTrips[1].track =
						response.data.TripList.Trip[1].Leg.Origin.rtTrack;
				});
		},
	};
</script>

<style scoped>
	.tripCard {
		margin-top: 2rem;
	}

	@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");

	h1 {
		font-family: "Roboto", sans-serif;
	}
</style>
