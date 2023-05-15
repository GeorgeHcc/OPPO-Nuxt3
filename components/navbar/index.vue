<template>
  <div class="navbar">
    <div class="wrapper content">
      <nuxt-link to="https://www.opposhop.cn/cn/web/" class="content-left" target="blank">
        <img class="logo" src="~/assets/images/logo.png" alt="" />
        <h1 class="title">OPPO手机商城</h1>
      </nuxt-link>
      <ul class="content-center">
        <li>
          <NuxtLink class="link" to="/">OPPO专区</NuxtLink>
        </li>
        <li>
          <NuxtLink class="link" to="/one-plus">OnePlus专区</NuxtLink>
        </li>
        <li>
          <NuxtLink class="link" to="/intelligent">智能硬件</NuxtLink>
        </li>
        <li>
          <NuxtLink class="link" to="https://support.oppo.com/cn/" targrt="blank">服务</NuxtLink>
        </li>
      </ul>
      <Search class="content-right"></Search>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.navbar {
  height: $navBarHeight;
  z-index: 99;
  border-bottom-color: rgba(0, 0, 0, 0.06);
  border-bottom-style: solid;
  border-bottom-width: 1px;

  /* 吸顶 */
  @include elementSticky(36px);
  background-color: white;

  .content {
    height: 100%;
    /* @include border(); */
    @include normalFlex();
    justify-content: flex-start;
    align-items: center;

    .content-left {
      display: inline-block;
      width: $logoWidth;
      height: $logoHeight;
      .logo {
        height: 100%;
      }
      .title {
        text-indent: -1000px;
        height: 0;
        margin: 0;
      }
    }

    .content-center {
      @include normalFlex();
      width: 530px;
      margin-left: 60px;

      .link {
        font-size: 14px;
        color: #000;
        opacity: 0.55;
      }
      .link:hover {
        opacity: 1;
      }
      .active .link {
        opacity: 1;
      }
    }

    .content-right {
      margin-left: 50px;
    }
  }
}
</style>
