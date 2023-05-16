
import { defineStore } from "pinia";
import Cache from "~/utils/Cache";
export const useHomeStore = defineStore("home", {
  state: (): IHomeState => ({
    navbars: [],
    banners: [],
    categorys: [],
  }),
  getters:{
    getNavBar(){
      if(this.navbars.length<1){
        return JSON.parse(Cache.getItem("navbars"))
      }
    },
    getBanners(){
      if(this.banners.length<1){
        return JSON.parse(Cache.getItem("banners"))
      }
    },
    getCategorys(){
      if(this.categorys.length<1){
        return JSON.parse(Cache.getItem("categorys"))
      }
    }
  },
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
