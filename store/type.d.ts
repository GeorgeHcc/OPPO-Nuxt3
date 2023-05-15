declare interface INavBar {
  id?: number;
  title?: string;
  type?: string;
  link?: string;
}
declare interface IBanner {
  id?: number;
  picStr?: string;
  link?: string;
}
declare interface IPriceInfo {
  prefix?: string;
  buyPrice?: string;
  currencyTag?: string;
}
declare interface IActivity {
  type?: number;
  activityInfo?: string;
}
declare interface IProductDetail {
  id?: number;
  title?: string;
  url?: string;
  priceInfo?: IPriceInfo;
  activityList?: IActivity[];
}
declare interface ICategory {
  id?: number;
  picStr?: string;
  url?: string;
  title?: string;
  type?: string;
  productDetailss?: IProductDetail[];
}

declare interface IHomeState {
  navbars: INavBar[];
  banners: IBanner[];
  categorys: ICategory[];
}

declare interface IDetailInfo {
  id?: number;
  title?: string;
  productDetailss?: IProductDetail[];
}