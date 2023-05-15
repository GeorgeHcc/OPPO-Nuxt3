<template>
  <div class="home">
    <div class="wrapper content">
      <swiper :banners="banners" />
      <tab-category :categorys="categorys" @item-click="handleItemClick" />
      <template v-for="item in categorys">
        <section-category :category="item"></section-category>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useHomeStore } from "~/store/home";
const homeStore = useHomeStore();
const { banners, categorys } = storeToRefs(homeStore);

const router = useRouter();

function handleItemClick(item: ICategory) {
  router.push({
    path: "/oppo-detail",
    query: {
      type: item.type,
    },
  });
}
</script>

<style lang="scss" scoped>
.home {
    background-color: $bgGrayColor;
}
</style>
