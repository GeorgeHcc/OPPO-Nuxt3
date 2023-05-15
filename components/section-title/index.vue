<template>
  <div class="section-title">
    {{ title }}
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  title: {
    type: String,
    default: "",
  },
});
</script>

<style lang="scss" scoped>
.section-title {
  padding-top: 60px;
  margin-bottom: 24px;
  font-size: 24px;
  font-weight: 500;

  /* @include border(); */
}
</style>
