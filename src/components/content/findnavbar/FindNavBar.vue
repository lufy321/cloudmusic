<template>
  <nav-bar>
    <template v-slot:left>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-gengduo"></use>
      </svg>
    </template>
    <template v-slot:default>
      <div class="top-center">
        <router-link to="/profile">我的</router-link>
        <router-link to="/find">发现</router-link>
        <router-link to="/village">云村</router-link>
        <router-link to="/video">视频</router-link>
      </div>
    </template>
    <template v-slot:right>
      <svg class="icon" aria-hidden="true" @click="$router.push('/Search')">
        <use xlink:href="#icon-sousuo"></use>
      </svg>
    </template>
  </nav-bar>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";

export default {
  name: "FindNavBar",
  components: {
    NavBar
  }
}
</script>

<style scoped lang="scss">
.top-center {
  width: 100%;
  display: flex;
  justify-content: space-evenly;
}

.icon {
  width: 20px;
  height: 20px;
}

a {
  &.router-link-exact-active {
    font-weight: bold;
  }
}
</style>