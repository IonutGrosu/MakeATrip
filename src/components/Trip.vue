<template>
	<Card>
		<template #content>
			<p>Time: {{ time }}</p>
			<p>Track: {{ track }}</p>
		</template>
	</Card>
</template>

<script>
	import Card from "primevue/card";

	export default {
		name: "Trip",
		components: {
			Card,
		},
		props: {
			time: String,
			track: String,
		},
	};
</script>
