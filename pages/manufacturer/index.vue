<template>
  <div>
    <h1>廠商專區user</h1>
  </div>
</template>

<script setup>
// 匿名
// definePageMeta({
//   middleware: (to, from) => {
//     console.log("user=>", { to, from });
//   },
// });

// 具名
definePageMeta({
  middleware: ["auth"],
});
</script>

<style></style>
