// 需额外添加的
import type { Ref } from "vue";
import type { UseFetchOptions, AsyncData } from "nuxt/dist/app";
const BASE_URL = "https://vercel-serverless-georgehcc.vercel.app/api";

// 自定义的
export type Methods = "GET" | "POST";
export interface ResultType<T> {
  code: number;
  data: T;
}
class ApiRequest {
  // 泛型，参数，返回类型
  request<T = any>(
    url: string,
    method: Methods,
    data: any,
    options?: UseFetchOptions<T, any, any>
  ): Promise<AsyncData<T, any>> {
    return new Promise((resolve, reject) => {
      let option = {
        method: method || "GET",
        baseURL: BASE_URL,
        ...options,
      };
      if (method == "GET") {
        option.query = data;
      } else {
        option.body = data;
      }
      // 返回值 和 参数类型
      useFetch<T>(url, option as any)
        .then((res: any) => {
          resolve(res as AsyncData<T, any>); // {code , data}
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
  post<T = any>(
    url: string,
    data?: any,
    options?: UseFetchOptions<T, any, any>
  ) {
    return this.request<T>(url, "POST", data, options);
  }

  get<T = any>(
    url: string,
    params?: object,
    options?: UseFetchOptions<T, any, any>
  ) {
    return this.request<T>(url, "GET", params, options);
  }
}
export default new ApiRequest();
