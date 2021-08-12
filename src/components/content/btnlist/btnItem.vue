<template>
  <div class="btn-item">
    <div class="btn-icon">
      <slot name="bi-icon">
      </slot>
    </div>
    <div class="btn-text">
      <slot>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "btnItem"
}
</script>

<style scoped>
.btn-item {
  width: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>