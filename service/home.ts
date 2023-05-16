import ApiRequest from "./index";
import cache from "~/utils/Cache";
import { useHomeStore } from "@/store/home";

import type { ResultType } from "./index";

interface IHomeInfo {
  navbars?: INavBar[];
  banners?: IBanner[];
  categorys?: ICategory[];
}

export const getHomeInfo = () => {
  // 这个请求只能在 setup 或 lifecycle 中请求
  return ApiRequest.get<ResultType<IHomeInfo>>(
    "/home/info",
    { type: "oppo" },
    {
      onResponse({ response }) {
        // 将数据存储到store中
        const homeStore = useHomeStore();
        homeStore.changeNavBar(response._data.data.navbars);
        homeStore.changeBanners(response._data.data.banners);
        homeStore.changeCategorys(response._data.data.categorys);
      },
    }
  );
};

export const getHomeOnePlusInfo = () => {
  // 这个请求只能在 setup 或 lifecycle 中请求
  return ApiRequest.get<ResultType<IHomeInfo>>("/home/info", {
    type: "onePlus",
  });
};
export const getHomeIntelligentInfo = () => {
  return ApiRequest.get<ResultType<IHomeInfo>>("/home/info", {
    type: "intelligent",
  });
};
