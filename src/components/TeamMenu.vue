<template>
  <span class="row">
    <b-nav vertical fill>
      <b-nav-item to="/team/roster">Roster</b-nav-item>
      <b-nav-item to="/team/stats">Stats</b-nav-item>
      <b-nav-item to="/team/calendar">Calendar</b-nav-item>
      <b-nav-item to="/team/events">Events</b-nav-item>
    </b-nav>
    <router-view/>
  </span>
</template>

<script>
export default {
  name: 'TeamMenu',
  props: {
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="../styles/main.css"></style>
<style scoped>
</style>
