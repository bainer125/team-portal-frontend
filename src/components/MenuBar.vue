<template>
  <div class="">
    <b-navbar toggleable="lg" type="dark" variant="primary">
      <b-navbar-brand to="/home">Team Portal</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/team">Team</b-nav-item>
          <b-nav-item to="/orders">Orders</b-nav-item>
          <b-nav-item to="/inventory">Inventory</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template v-slot:button-content>
              <em>User</em>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'MenuBar',
  props: {
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="../styles/main.css"></style>
<style scoped>
</style>
