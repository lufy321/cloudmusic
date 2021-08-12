<template>
  <div class="nav-bar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar"
}
</script>

<style scoped>
 .nav-bar {
   height: 45px;
   align-items: center;
   display: flex;
   text-align: center;
 }
 .left,.right {
   width: 45px;
   height: auto;
 }
 .center {
   flex: 1;
 }
</style>