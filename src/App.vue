<template>
  <div id="app">
    <side-bar v-if="$route.name!='login'"></side-bar>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app',
    components: {
      sideBar: require('./components/SideBar')
    }
  }
</script>

<style scoped>
#app {
  height: 95%;
  width: 80%;
  margin-left: 5%;
  border-radius: 4px;
  background-color: #fff;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.6);
}
</style>
