<template>
  <div class="section-category">
    <section-title :title="category.title"></section-title>
    <grid-view
      :product-details="category.productDetailss"
      :category-url="category.url"
      :firstLink="category.link"
    ></grid-view>
  </div>
</template>

<script lang="ts" setup>

interface Props {
  category?: ICategory;
}
const { category = {} } = defineProps<Props>();
</script>

<style lang="scss" scoped>
.section-category {
  /* color: red; */
}
</style>
