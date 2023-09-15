<template>
  <div>
    <Head>
      <!-- <Title>{{ title }}</Title> -->
      <!-- <Meta name="description" :content="title" /> -->
      <!-- <Style
        type="text/css"
        children="body { background-color: #ebebeb; }"
      ></Style> -->
    </Head>
    <h1>商品頁</h1>
  </div>
</template>

<script setup>
// const title = ref("Hello Product");

// setTimeout(() => {
//   console.log(0);
//   useServerSeoMeta({
//     title: "Product",
//     description: "商品 - meta tag 設定",
//     ogTitle: "Product",
//     ogDescription: "商品 - meta tag 設定",
//   });
// }, 500);

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

async function cc() {
  setTimeout(() => {
    console.log(0);
    useServerSeoMeta({
      title: "Product",
      description: "商品 - meta tag 設定",
      ogTitle: "Product",
      ogDescription: "商品 - meta tag 設定",
    });
  }, 500);
}

await cc();

console.log(1);
</script>
