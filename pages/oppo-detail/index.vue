<template>
  <div class="oppo-detail">
    <div class="wrapper content">
      <el-tabs v-model="activeName" class="oppo-tabs" @tab-click="handleClick">
        <template v-for="(item, index) in data?.data" :key="item">
          <el-tab-pane :label="item.title" :name="item.title">
            <grid-view
              :product-details="data?.data[index].productDetailss"
              :first-item-is-two-col="false"
            ></grid-view
          ></el-tab-pane>
        </template>
      </el-tabs>

      <no-more></no-more>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { TabsPaneContext } from "element-plus";
import { ElTabs, ElTabPane } from "element-plus";
import { getOppoDetailInfo } from "@/service/detail";
import type { IOppoType } from "@/service/detail";
const activeName = ref<string>("");
const route = useRoute();
const { type } = route.query;
// const type = route.query.type as IOppoType;

const { data } = await getOppoDetailInfo(type as IOppoType);
// 默认选中
activeName.value = data.value?.data[0].title as string;

const getTabsName = computed<string[]>(() => {
  return data.value?.data.map((item) => {
    return item.title;
  }) as string[];
});

const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab.index, event);
};
</script>

<style lang="scss" scoped>
.oppo-detail {
  background-color: $bgGrayColor;
  padding-bottom: 60px;
  padding-top: 8px;

  .content {
    .oppo-tabs {
      /* 背景 */
      :deep(.el-tabs__header) {
        background-color: white;
      }

      :deep(.el-tabs__nav-wrap) {
        height: 48px;
        padding: 0 52px;
        /* 底部线 */
        &::after {
          background-color: white;
        }
        /* 按钮 */
        .el-tabs__nav-prev,
        .el-tabs__nav-next {
          width: 48px;
          .el-icon,
          svg {
            width: 25px;
            height: 25px;
          }
          svg {
            position: relative;
            top: 10px;
          }
        }

        /* 移动线条激化样式 */
        .el-tabs__nav-next + .el-tabs__nav-scroll .el-tabs__active-bar {
          left: 0px;
        }
        .el-tabs__active-bar {
          background-color: $priceColor;
          left: 48px;
        }
      }

      :deep(.el-tabs__item) {
        height: 48px;
        opacity: 0.6;
        font-weight: 400;
        padding-top: 5px;

        position: relative;
        /* hover字体演示 */
        &:hover,
        &.is-active {
          color: $priceColor;
        }
      }
    }
  }
}
</style>
