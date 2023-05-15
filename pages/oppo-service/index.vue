<template>
  <div class="oppo-service">
    {{ title }}
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
definePageMeta({
  layout: "empty", // 替换默认的layout
});
const title = ref("oppo-service");
</script>

<style lang="scss" scoped>
.oppo-service {
}
</style>
