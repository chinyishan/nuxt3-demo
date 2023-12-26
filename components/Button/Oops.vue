<template>
  <button type="button" @click="onClick">OOPS!</button>
</template>

<script setup>
const onClick = () => {
  throw new Error("由 OopsButton 元件，拋出的一個錯誤！");
};
</script>
