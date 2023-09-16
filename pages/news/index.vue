<template>
  <div>
    <h1>最新消息</h1>
  </div>
</template>

<script setup>
// const getData = () =>
//   new Promise((resolve) => setTimeout(() => resolve("data"), 1000));

// async函数会被编译成generator函数 (babel会编译成更本质的形态，这里我们直接用generator)
// function testG() {
//   // await被编译成了yield
//   const data = yield getData();
//   console.log("data: ", data);
//   const data2 = yield getData();
//   console.log("data2: ", data2);
//   return "success";
// }

// function timeout() {
//   return new Promise((resolve) =>
//     setTimeout(() => {
//       console.log(0);
//       useServerSeoMeta({
//         title: "Product",
//         description: "商品 - meta tag 設定",
//         ogTitle: "Product",
//         ogDescription: "商品 - meta tag 設定",
//       });
//     }, 500)
//   );
// }

// function wait(ms) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log(0);
//       useServerSeoMeta({
//         title: "Product",
//         description: "商品 - meta tag 設定",
//         ogTitle: "Product",
//         ogDescription: "商品 - meta tag 設定",
//       });
//       resolve(ms);
//     }, ms);
//   });
// }
// (async () => {
//   console.log("Starting...");
//   await wait(500);
// })();

// const setAsyncTimeout = (cb, timeout = 0) =>
//   new Promise((resolve) => {
//     setTimeout(() => {
//       cb();
//       resolve();
//     }, timeout);
//   });

// const doStuffAsync = async () => {
//   await setAsyncTimeout(() => {
//     console.log(0);
//     useSeoMeta({
//       title: "Product",
//       description: "商品 - meta tag 設定",
//       ogTitle: "Product",
//       ogDescription: "商品 - meta tag 設定",
//     });
//   }, 500);
// };

// doStuffAsync();

// async function cc() {
//   setTimeout(() => {
//     console.log(0);
//     useServerSeoMeta({
//       title: "Product",
//       description: "商品 - meta tag 設定",
//       ogTitle: "Product",
//       ogDescription: "商品 - meta tag 設定",
//     });
//   }, 500);
// }

// await cc();

console.log(2);
</script>
