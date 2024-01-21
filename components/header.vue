<template>
  <div class="header-content">
    <header class="header">
      <nav class="content-nav">
        <NuxtLink to="/">
          <img src="@/assets/images/nuxt-logo.png" alt="nuxt" />
        </NuxtLink>
        <div class="wrap-nav">
          <ul class="nav-list">
            <li><NuxtLink to="/about">API測試</NuxtLink></li>
            <li><NuxtLink to="/product">產品專區</NuxtLink></li>
            <li><NuxtLink to="/lang">多國語系</NuxtLink></li>
            <li><NuxtLink to="/vote">投票列表</NuxtLink></li>
            <li><NuxtLink to="/picture">圖片測試</NuxtLink></li>
            <li><NuxtLink to="/meta-head">MetaSEO</NuxtLink></li>
            <li><NuxtLink to="/courses">courses列表</NuxtLink></li>
            <li>
              <NuxtLink
                :to="{
                  path: '/detail-composables',
                  query: {
                    id: '11111',
                  },
                }"
                >Composables</NuxtLink
              >
            </li>
          </ul>
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
