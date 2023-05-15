<template>
    <div class="one-plus">
      <div class="wrapper content">
        <swiper :banners="data?.data.banners"></swiper>
        <tab-category
          :categorys="data?.data.categorys"
          @item-click="handleItemClick"
        ></tab-category>
        <template v-for="item in data?.data.categorys">
          <section-category
            :category="item"
            v-if="item.productDetailss?.length"
          ></section-category>
        </template>
      </div>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { getHomeOnePlusInfo } from "@/service/home";
  const { data } = await getHomeOnePlusInfo();
  function handleItemClick(item: any) {}
  </script>
  
  <style lang="scss" scoped>
  .one-plus {
    background-color: $bgGrayColor;
  }
  </style>
  