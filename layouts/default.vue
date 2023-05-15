<template>
  <div class="container">
    <app-header></app-header>
    <navbar :navbars="data?.data.navbars"></navbar>
    <slot></slot>
    <app-footer></app-footer>
  </div>
</template>

<script setup lang="ts">
import { getHomeInfo } from "~/service/home";
const { data } =await getHomeInfo();
</script>

<style lang="scss" scoped></style>
