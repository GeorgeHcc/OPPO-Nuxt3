<template>
  <div class="intelligent">
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
import { getHomeIntelligentInfo } from "@/service/home";
const { data } = await getHomeIntelligentInfo();
function handleItemClick(item: any) {}
</script>

<style lang="scss" scoped>
.intelligent {
  background-color: $bgGrayColor;
}
</style>
