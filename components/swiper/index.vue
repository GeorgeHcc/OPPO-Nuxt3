<template>
  <div class="swiper">
    <el-carousel
      trigger="click"
      height="480px"
      indicator-position="none"
      @change="handleChange"
    >
      <el-carousel-item v-for="item in banners" :key="item">
        <img class="pic-str" :src="item.picStr" alt="OPPO" />
      </el-carousel-item>
    </el-carousel>

    <!-- 指示器 -->
    <ul class="dots">
      <li
        :class="['dot', currentIndex === index ? 'active' : '']"
        v-for="(item, index) in banners"
        :key="item.id"
      ></li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { ElCarousel, ElCarouselItem } from "element-plus";
const currentIndex = ref(0);
const props = defineProps({
  banners: {
    type: Array<any>,
    default: () => {},
  },
});

function handleChange(index: number) {
  // console.log(index);
  currentIndex.value = index;
}
</script>

<style lang="scss" scoped>
.swiper {
  padding-top: 36px;
  position: relative;
  .pic-str {
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }

  .dots {
    height: 40px;
    width: 100%;
    position: absolute;
    bottom: 0px;
    left: 0;
    text-align: center;

    .dot {
      display: inline-block;
      width: 10px;
      height: 10px;
      box-sizing: border-box;
      border-radius: 10px;
      margin-right: 10px;
      background-color: #fff;
      opacity: 0.8;
    }
    .active {
      background-color: transparent;
      border: 2px solid #fff;
      width: 12px;
      height: 12px;
      position: relative;
      top: 1px;
    }
  }
}
</style>
