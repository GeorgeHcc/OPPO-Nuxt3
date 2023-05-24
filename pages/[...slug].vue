<template>
  <div class="container">
    <div class="title">
      <span class="font-404">woops... </span>
      <NuxtLink to="/">
        
        <el-button type="success" :icon="Back">go Home</el-button>
      </NuxtLink>
    </div>
    <img src="~/assets/images/404.png" alt="404页面未找到" class="img-404" />
  </div>
</template>

<script lang="ts" setup>
import { Back } from '@element-plus/icons-vue'
definePageMeta({
  layout: "empty",
});
</script>

<style scoped lang="scss">
.container {
  width: 100vw;
  height: 100vh;
  background-color: rgb(124, 92, 137);
  @include centerFlex;
  .font-404 {
    display: block;
    font-size: 80px;
    font-weight: 900;
    color: azure;
    margin-bottom: 100px;
  }
  .img-404 {
    width: 70%;
    height: 100%;
  }
}
</style>
