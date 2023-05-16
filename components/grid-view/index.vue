<template>
  <div class="grid-view">
    <!-- 第一个item -->
    <!-- <a :href="firstLink" target="_blank"> -->
    <div class="view-item first" v-if="firstItemIsTwoCol" @click="handleClick(firstLink)">
      <img :src="categoryUrl" alt="OPPO" />
    </div>

    <!-- </a> -->
    <!-- 非第一个item -->
    <template v-for="(item, index) in productDetails" :key="item">
      <!-- 以后复用了需改成 slot -->
      <div class="view-item">
        <grid-view-item :product-detail="item"></grid-view-item>
      </div>
    </template>
  </div>
</template>

<script lang="ts" setup>
interface Props {
  firstLink: string;
  productDetails?: IProductDetail[];
  categoryUrl?: string; // 分类的图片
  firstItemIsTwoCol?: boolean; // 第一个item，占用两列
}

const props = withDefaults(defineProps<Props>(), {
  firstItemIsTwoCol: true,
  productDetails: () => [],
  firstLink: "",
});

const handleClick = (link: string) => {
  if (process.client) {
   window.open(link,"_blank")
  }
};
</script>

<style lang="scss" scoped>
.grid-view {
  width: $contentWidth + 18px;
  /* @include border(green); */
  @include normalFlex();
  flex-wrap: wrap;
  justify-content: flex-start;

  .view-item {
    width: 20%;
    padding-right: 18px;
    margin-bottom: 18px;
    /* @include border(); */
    height: $gridItemHeight;
    box-sizing: border-box;
    background-color: $bgGrayColor;
    cursor: pointer;
  }

  .first {
    width: 40%;
    & > img {
      width: 100%;
      height: 100%;
      transition: all 0.2s linear;
      &:hover {
        @include hoverEffect();
      }
    }
  }
}
</style>
