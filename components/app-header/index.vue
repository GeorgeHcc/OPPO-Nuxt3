<template>
  <div class="app-header">
    <div class="wrapper content">
      <div class="content-left">
        <NuxtLink class="link" to="/">
          <span>OPPO官网</span>
        </NuxtLink>
        <NuxtLink class="link" to="/">
          <span>一加官网</span>
        </NuxtLink>
      </div>
      <div class="content-right">
        <a href="#" class="link download">
          <span>下载 OPPO 商城App</span>
          <div class="app">
            <img class="ecode" src="~/assets/images/ecode.png" alt="OPPO" />
            <div class="name">扫码下载 OPPO 商城 App</div>
          </div>
        </a>

        <NuxtLink class="link" to="/login">
          <i class="iconfont icon-user"></i>
          <span>登录</span>
        </NuxtLink>

        <NuxtLink class="link" to="/register"> <span>注册</span> </NuxtLink>

        <a href="" class="link">
          <i class="iconfont icon-shoppingcart"></i>
          <span>购物车 </span>
          <span>(0)</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
const props = defineProps({
  name: {
    type: String,
    default: "",
  },
});
const emits = defineEmits(["onItemClick"]);
const title = ref("app-header");
</script>

<style lang="scss" scoped>
.app-header {
  background-color: #000;
  height: $appHeaderHeight;
  /* 吸顶 */
  @include elementSticky(0, 110);

  .link span {
    opacity: 0.8; // 字体变暗
  }

  .content {
    /* @include border(green); */
    /* box-sizing: border-box; */
    height: 100%;
    @include normalFlex();

    .content-left {
      @include normalFlex();
      justify-content: flex-start;
      align-items: center;
      .link {
        color: #fff;
        font-size: 12px;
        margin-right: 24px;
        text-decoration: none;
        cursor: pointer;
      }
    }

    .content-right {
      /* color: red; */
      @include normalFlex();
      justify-content: flex-end;
      align-items: center;
      .link {
        color: white;
        text-decoration: none;
        height: 14px;
        line-height: 14px;
        padding: 0 14px;
        border-right: 1px solid #fff;
        font-size: 12px;
        cursor: pointer;
        i {
          margin-right: 6px;
        }
        .icon-user {
          font-size: 12px;
          opacity: 1;
        }
        .icon-shoppingcart {
          font-size: 15px;
          opacity: 1;
        }
      }

      .link:last-child {
        border-right: 1px solid #000;
      }

      .download {
        position: relative;
        .app {
          /* 默认隐藏 */
          display: none;
          position: absolute;
          top: 25px;
          left: 0;
          padding: 8px;
          box-shadow: 0 4px 8px 0 rgb(0 0 0 / 10%);
          z-index: 10000;
        }

        .ecode {
          width: 140px;
          height: 140px;
        }
        .name {
          color: #000;
          margin-top: 2px;
        }
      }

      .download:hover .app {
        display: block;
      }
    }
  }
}
</style>
