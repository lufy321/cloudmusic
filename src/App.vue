<template>
  <router-view/>
  <play-control></play-control>
</template>

<script>
import PlayControl from "components/content/playcontrol/PlayControl";
  export default {
    name: "App",
    components: {
      PlayControl
    },
    mounted() {
      // localStorage.removeItem('userData')
      let userData = JSON.parse(localStorage.userData)
      console.log(userData);
      this.$store.commit('setUser', userData)
    }
  }
</script>

<style lang="scss">
  @import "assets/css/base.css";
  .icon {
    width: 1em; height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
</style>
