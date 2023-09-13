<template>
  <div>
    <h1>關於我們</h1>
    <Button @click="data.add" />
    <h2>{{ data.count }}</h2>
  </div>
</template>

<script setup>
const data = useAddCount();

const res = await useFetch("https://vue-lessons-api.vercel.app/seo/about");
useServerSeoMeta({
  title: () => `${res.data.value.title} - Nuxt3`,
  ogTitle: () => `${res.data.value.title} - Nuxt3`,
  description: () => `${res.data.value.description} - Nuxt3`,
  ogDescription: () => `${res.data.value.description} - Nuxt3`,
});

//單一頁面引入
useHead({
  link: [
    {
      rel: "stylesheet",
      href: "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css",
    },
  ],
  script: [
    {
      src: "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.3/jquery.min.js",
      async: true,
      tagPosition: "bodyClose",
    },
  ],
});
</script>
