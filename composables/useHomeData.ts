import { useHomeStore } from "~/store/home";

export const useHomeData=()=>storeToRefs(useHomeStore())
