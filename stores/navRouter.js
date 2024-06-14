import { defineStore } from "pinia";

export const useNavRouterStore = defineStore("navRouter", () => {
  const nav = reactive({
    home: {
      name: "首頁",
      key: "home",
      path: "/home",
      children: null,
    },
    api_related: {
      name: "api相關",
      key: "api-related",
      path: "/api-related",
      children: null,
    },
  });

  return {
    nav,
  };
});
