<template>
	<b-card>
		<template v-slot:header>
			<h4 class="mb-0">#{{player.number}}</h4>
		</template>
		<b-card-body>
			<b-card-title>{{player.firstName}} {{player.lastName}}</b-card-title>
			<b-card-text>{{player.height}} - {{player.weight}}</b-card-text>
			<b-card-text>{{player.hometown}}</b-card-text>
		</b-card-body>
	</b-card>
</template>

<script>
export default {
	name: 'PlayerCard',
	props: {
		player: Object
	},
	data(){
		return {
		}
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="../../styles/main.css"></style>
<style scoped>
</style>
