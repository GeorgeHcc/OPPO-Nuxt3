<template>
    <div class="search">
        <input type="text" placeholder="Reno9系列">
        <img src="~/assets/images/search.svg" alt="" class="search-svg">
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.search {
  height: 36px;
  width: 160px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 8px 16px;

  border-radius: 36px;
  background-color: #f6f6f6;
  cursor: pointer;
  input {
    width: 112px;
    height: 21px;
    font-size: 14px;
    opacity: 0.3;
    outline: none;
    border: none;
    background-color: transparent;
  }

  .search-svg {
    width: 14px;
    height: 14px;
  }
}
</style>