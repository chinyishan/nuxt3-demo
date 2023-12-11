import dayjs from "dayjs";

export default defineNuxtPlugin((nuxtApp) => {
  //vue3 創建模板語法，使用 directive
  //vueApp 是 vue 的實體
  nuxtApp.vueApp.directive("timeformat", {
    //mounted 回傳兩參數，element(DOM元素)，binding(連接)
    mounted(el, binding) {
      const time = dayjs(binding.value).format("YYYY年MM月DD日");
      el.innerText = time;
    },
  });
});
