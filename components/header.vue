<template>
  <div class="header-content">
    <header class="header">
      <nav class="content-nav">
        <NuxtLink to="/">
          <img src="../assets/picture/nuxt-logo.png" alt="nuxt" />
        </NuxtLink>
        <div class="wrap-nav">
          <ul class="nav-list">
            <li><NuxtLink to="/about">關於我們</NuxtLink></li>
            <li><NuxtLink to="/product">產品專區</NuxtLink></li>
            <li><NuxtLink to="/news">新訊中心</NuxtLink></li>
            <li><NuxtLink to="/manufacturer">聯絡我們</NuxtLink></li>
            <li><NuxtLink to="/manufacturer">廠商專區</NuxtLink></li>
          </ul>
          <div class="nav-locale">
            <select class="locale-select" v-model="locale">
              <option value="1">繁中</option>
              <option value="2" disabled>English</option>
            </select>
          </div>
        </div>
      </nav>
    </header>
  </div>
</template>

<script setup>
const locale = ref("1");
// definePageMeta({
//   pageTransition: {
//     name: 'rotate'
//   }
// })
</script>
<style lang="scss"></style>
