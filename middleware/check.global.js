export default defineNuxtRouteMiddleware((to, from) => {
  // 先執行全域，在執行單一
  console.log("全域 Middleware");
});
