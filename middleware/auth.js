export default defineNuxtRouteMiddleware((to, from) => {
  console.log("auth =>", to, from);
});
