<template>
  <v-content class="main">
    <left-nav></left-nav>
    <app-header></app-header>
    <router-view />
    <app-footer></app-footer>
  </v-content>
</template>

<script>
export default {
  name: 'Layout',

  data: () => ({
    //
  }),
  beforeMount() {
    if (this.$router.history.current.path == '/')
      this.$router.push({ name: 'Dashboard' })
  }
};
</script>

<style>
.header-bar {
  position: relative;
  right: -20px;
  top: -30px;
  margin-right: 20px;
}
.header-bar-content {
  position: relative;
  right: -10px;
  top: -20px;
  margin-right: 10px;
}
</style>