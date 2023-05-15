<template>
  <div class="no-more">
    <span class="line"></span>
    <span class="name">没有更多了</span>
    <span class="line"></span>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.no-more {
  margin: 32px 0;
  line-height: 27px;
  @include normalFlex();
  .name {
    margin: 0 24px;
    font-size: 18px;
    opacity: 0.5;
    color: #343a40;
    position: relative;
    top: -13px;
  }
  .line {
    display: inline-block;
    background-color: #d2d2d2;
    height: 1px;
    flex: 1;
  }
}
</style>
