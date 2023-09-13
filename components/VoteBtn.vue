<template>
  <button class="vote_btn">
    投票數:
    <slot></slot>
  </button>
</template>

<style scoped>
.vote_btn {
  margin-top: 10px;
  border-radius: 30px;
  width: 100%;
  height: 30px;
  border: 1px solid #ddd;
}
</style>
