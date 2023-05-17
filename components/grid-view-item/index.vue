<template>
    <div class="grid-view-item" @click="handleClick(productDetail.link)">
    <div class="item-img"> 
      <img class="url" :src="productDetail.url" alt="" />
    </div>
    <div class="item-title">{{ productDetail.title }}</div>
    <div class="item-labels">
      <template v-for="item in productDetail.activityList" :key="item">
        <span class="label">{{ item.activityInfo }}</span>
      </template>
    </div>
    <div class="item-price">
      <span class="prefix"
        >{{ productDetail.priceInfo?.prefix }} {{ productDetail.priceInfo?.currencyTag }}</span
      >
      <span class="price">{{ productDetail.priceInfo?.buyPrice }}</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { PropType } from "vue";

interface Props {
  productDetail: IProductDetail;
}

// 方式一
// const { productDetail = {} } = defineProps<Props>();

// 方式二
// const props = withDefaults(defineProps<Props>(), {
//   productDetail: () => ({}),
// });

// 方式三
defineProps({
  productDetail: {
    type: Object as PropType<IProductDetail>,
    default: () => {},
  },
});

const handleClick = (link="") => {
  if (process.client) {
   window.open(link,"_blank")
  }
};
</script>

<style lang="scss" scoped>
.grid-view-item {
  text-align: center;
  background-color: #fff;
  border-radius: 8px;
  transition: all 0.2s linear;
  &:hover {
    @include hoverEffect();
  }
  .item-img {
    .url {
      width: $imgWidth;
      height: $imgHeight;
      margin-top: 14px;
      margin-bottom: 7px;
    }
  }
  .item-title {
    padding: 0 20px;
    margin-top: 2px;
    font-weight: 500;
    font-size: 15px;
    text-align: center;
    @include textEllipsis();
  }

  .item-labels {
    height: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    .label {
      display: inline-block;
      padding: 1px 2px;
      color: $priceColor;
      font-size: 13px;
      border: 1px solid $priceColor;
      margin-right: 4px;
      margin-bottom: 4px;
    }
  }

  .item-price {
    padding-bottom: 40px;
    .prefix {
      color: $priceColor;
      font-size: 13px;
    }
       
    .price {
      color: $priceColor;
      font-size: 20px;
      line-height: 1;
    }
  }
}
</style>
