import hyRequest from "./index";
import cache from "~/utils/Cache";
import { useHomeStore } from "@/store/home";

import type { ResultType } from "./index";

interface IHomeInfo {
  navbars?: INavBar[];
  banners?: IBanner[];
  categorys?: ICategory[];
}

export const getHomeInfo = () => {
    if(process.client){
        if(cache.getItem("banners")&&cache.getItem("categorys")&&cache.getItem("navbars")){
            
        }
    }
  // 这个请求只能在 setup 或 lifecycle 中请求
  return hyRequest.get<ResultType<IHomeInfo>>(
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
  return hyRequest.get<ResultType<IHomeInfo>>("/home/info", {
    type: "onePlus",
  });
};
export const getHomeIntelligentInfo = () => {
  return hyRequest.get<ResultType<IHomeInfo>>("/home/info", {
    type: "intelligent",
  });
};
