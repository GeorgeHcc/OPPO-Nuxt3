import hyRequest from "./index";

import type { ResultType } from "./index";

export type IOppoType = "oppo" | "air" | "watch" | "tablet";

export const getOppoDetailInfo = (type: IOppoType) => {
  return hyRequest.get<ResultType<IDetailInfo[]>>("/oppoDetail", {
    type,
  });
};
