<template>
  <div class="header-container">
    <header class="header-content">
      <nav class="header-nav">
        <div class="nav-wrap">
          <ul class="nav-list">
            <li class="nav-item">
              <NuxtLink class="nav-route" to="/">
                <p class="nav-name">首頁</p>
              </NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink class="nav-route" to="">
                <p class="nav-name">API</p>
              </NuxtLink>
              <ul class="nav-children-list">
                <li class="nav-children-item">
                  <NuxtLink class="nav-route" to="/related-api/fetch-package">
                    <p class="nav-name">api封裝測試</p>
                  </NuxtLink>
                </li>
                <li class="nav-children-item">
                  <NuxtLink class="nav-route" to="/related-api/mongo-db">
                    <p class="nav-name">mongoDB</p>
                  </NuxtLink>
                </li>
                <li class="nav-children-item">
                  <NuxtLink class="nav-route" to="/related-api/cors-api">
                    <p class="nav-name">跨網域API處理</p>
                  </NuxtLink>
                </li>
                <li class="nav-children-item">
                  <NuxtLink class="nav-route" to="/related-api/product">
                    <p class="nav-name">產品頁</p>
                  </NuxtLink>
                </li>
                <li class="nav-children-item">
                  <NuxtLink class="nav-route" to="/related-api/vote">
                    <p class="nav-name">投票</p>
                  </NuxtLink>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <NuxtLink class="nav-route" to="">
                <p class="nav-name">模組</p>
              </NuxtLink>
              <ul class="nav-children-list">
                <li class="nav-children-item">
                  <NuxtLink class="nav-route" to="/related-models/swiper">
                    <p class="nav-name">Swiper</p>
                  </NuxtLink>
                </li>
                <li class="nav-children-item">
                  <NuxtLink class="nav-route" to="/related-models/plugins-test">
                    <p class="nav-name">插件</p>
                  </NuxtLink>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <NuxtLink class="nav-route" to="">
                <p class="nav-name">路由</p>
              </NuxtLink>
              <ul class="nav-children-list">
                <li class="nav-children-item">
                  <NuxtLink class="nav-route" to="/related-route/courses">
                    <p class="nav-name">Courses</p>
                  </NuxtLink>
                </li>
                <li class="nav-children-item">
                  <NuxtLink
                    class="nav-route"
                    to="/related-route/brand-product/brand"
                  >
                    <p class="nav-name">Brand Products</p>
                  </NuxtLink>
                </li>
                <li class="nav-children-item">
                  <NuxtLink
                    class="nav-route"
                    to="'/related-route/users-test/15'"
                  >
                    <p class="nav-name">Users Group</p>
                  </NuxtLink>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <NuxtLink class="nav-route" to="">
                <p class="nav-name">nuxt</p>
              </NuxtLink>
              <ul class="nav-children-list">
                <li class="nav-children-item">
                  <NuxtLink
                    class="nav-route"
                    to="/related-nuxt/Composables-detaild"
                  >
                    <p class="nav-name">Composables介紹</p>
                  </NuxtLink>
                </li>
                <li class="nav-children-item">
                  <NuxtLink class="nav-route" to="/related-nuxt/meta-head">
                    <p class="nav-name">MetaHead設置</p>
                  </NuxtLink>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <NuxtLink class="nav-route" to="">
                <p class="nav-name">多國語系</p>
              </NuxtLink>
              <ul class="nav-children-list">
                <li class="nav-children-item">
                  <NuxtLink class="nav-route" to="/related-lang/lang">
                    <p class="nav-name">語系切換</p>
                  </NuxtLink>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <NuxtLink class="nav-route" to="">
                <p class="nav-name">圖片</p>
              </NuxtLink>
              <ul class="nav-children-list">
                <li class="nav-children-item">
                  <NuxtLink class="nav-route" to="/related-picture/img-svg">
                    <p class="nav-name">img失效問題</p>
                  </NuxtLink>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  </div>
</template>

<script setup>
const locale = ref("1");

const brand = " "; // 在这里设置 brand 参数的默认值
// definePageMeta({
//   pageTransition: {
//     name: 'rotate'
//   }
// })
</script>
<style lang="scss"></style>
