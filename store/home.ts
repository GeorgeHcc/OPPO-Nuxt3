
import { defineStore } from "pinia";
import Cache from "~/utils/Cache";
export const useHomeStore = defineStore("home", {
  state: (): IHomeState => ({
    navbars: [],
    banners: [],
    categorys: [],
  }),
  actions: {
    changeNavBar(payload: INavBar[]) {
      this.navbars = payload;
     if(process.client){
        Cache.setItem("navbars",JSON.stringify(payload))
     }
    },
    changeBanners(payload: IBanner[]) {
      this.banners = payload;
      if(process.client){
        Cache.setItem("banners",JSON.stringify(payload))
      }
    },
    changeCategorys(payload: ICategory[]) {
      this.categorys = payload;
     if(process.client){
        Cache.setItem("categorys",JSON.stringify(payload))
     }
    },
  },
});
