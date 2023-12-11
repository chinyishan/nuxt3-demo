export default defineNuxtPlugin((nuxtApp) => {
  return {
    // 注入方法
    provide: {
      hello: (msg) => `Hello ${msg}`,
    },
  };
});
