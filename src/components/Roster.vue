<template>
  <div>
    <b-card-group deck>
      <PlayerCard v-for="(player,index) in players" :key="index" :player="player"/>
    </b-card-group>
  </div>
</template>

<script>
import PlayerCard from './ui/PlayerCard.vue'
export default {
  name: 'Roster',
  props: {
  },
  components: {
    PlayerCard
  },
  data(){
    return {
      players: [{
        number: '1',
        firstName: 'Liam',
        lastName: 'McBain',
        height: `5'9"`,
        weight: '170',
        hometown: "Tualatin, OR"
      },
      {
        number: '2',
        firstName: 'Kieran',
        lastName: 'Bohonan',
        height: `5'8"`,
        weight: '180',
        hometown: "Somewhere, NJ"
      },
      {
        number: '3',
        firstName: 'Zach',
        lastName: 'Schaller',
        height: `6'2"`,
        weight: '180',
        hometown: "Montclair, NJ"
      },
      {
        number: '4',
        firstName: 'Jonathan',
        lastName: 'Didas',
        height: `5'9"`,
        weight: '180',
        hometown: "Aurora, CO"
      },
      {
        number: '5',
        firstName: 'Crimp',
        lastName: 'Zaverdas',
        height: `5'11"`,
        weight: '185',
        hometown: "Long Island, NY"
      }
      ]
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="../styles/main.css"></style>
<style scoped>
</style>
