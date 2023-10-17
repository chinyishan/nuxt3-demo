<template>
  <div>
    <header class="wrap_header">
      <nav class="content_nav">
        <ul class="nav_list">
          <li><NuxtLink to="/">首頁</NuxtLink></li>
          <li><NuxtLink to="/product">產品</NuxtLink></li>
          <li><NuxtLink to="/about">關於</NuxtLink></li>
          <li><NuxtLink to="/vote">投票</NuxtLink></li>
          <li><NuxtLink to="/news">語系</NuxtLink></li>
          <!-- <li><NuxtLink to="/users-admins/1313">users</NuxtLink></li> -->
        </ul>
      </nav>
    </header>
  </div>
</template>

<script setup>
// definePageMeta({
//   pageTransition: {
//     name: 'rotate'
//   }
// })
</script>

<style scoped>
.wrap_header {
  position: sticky;
  top: 0;
  z-index: 10;
  box-shadow: 5px 0px 10px 0px rgb(0, 0, 0, 0.2);
  background-color: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(5px);
}
.content_nav {
  width: 100%;
  max-width: 1200px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 10;
}
.nav_list {
  display: flex;
}
.nav_logo {
  width: 160px;
}
.nav_list li {
  padding: 15px 10px;
  position: relative;
  list-style: none;
}
.nav_list li a {
  padding: 8px 8px;
  color: #848484;
  letter-spacing: 0.2em;
  white-space: nowrap;
  font-weight: 400;
  text-shadow: 10px 10px 10px 10px rgb(0, 0, 0);
  transition: 0.3s ease-out;
}
</style>
