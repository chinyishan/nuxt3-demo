<template>
  <div class="about">
    <h1>api 測試</h1>
    <input type="text" v-model="listQuery.brandId" />
    <input type="text" v-model="listQuery.category" />
    <select name="sort" id="sort" v-model="listQuery.sort">
      <option value=""></option>
      <option value="type01">type01</option>
      <option value="type02">type02</option>
      <option value="type03">type03</option>
    </select>
    <br />
    <br />
    <input type="text" v-model="pagination.limit" />
    <input type="text" v-model="pagination.skip" />
    <br />
    <br />
    <!-- <button @click="metaClick">測試</button> -->
    <button @click="pagination.skip--">Prev</button>
    <button
      v-for="item in paginateTotal"
      :key="item.key"
      @click="pageClick(item)"
      type="button"
    >
      {{ item }}
    </button>
    <button @click="pagination.skip++">Next</button>
    <br />
    <br />
    <button @click="ProductsRefresh">ProductsRefresh</button>
    <br />
    <br />
    {{ queryParams }}
    <br />
    <br />
    {{ productData }}
    <!-- {{ cookie }} -->
    <!-- <p>{{ dataBanner.data }}</p>
    <p>{{ dataBanner.data.value.name }}</p> -->
    <!-- <p>{{ orgsData }}</p> -->
    <!-- <p>{{ reposData }}</p> -->
  </div>
</template>

<script setup>
// import axios from "axios"
import { hash } from "ohash";
import { getNewsList, getProductsList } from "@/api/news";

// const cookie = useCookie("lang");
// cookie.value = "en";

// 使用 reactive 來保存頁面狀態
const pagination = reactive({
  limit: [1, 5],
  skip: 1,
});

const listQuery = reactive({
  brandId: null,
  category: null,
  sort: null,
});

// 总页数数组
const paginateTotal = ref([1, 2, 3, 4, 5]);

// 查询参数
const queryParams = computed(() => {
  const combinedParams = { ...listQuery, ...pagination };
  return Object.fromEntries(
    Object.entries(combinedParams).filter(
      ([, value]) => value !== null && value !== ""
    )
  );
});

/* 
{
  limit: pagination.limit,
  page: pagination.page,
  brandId: listQuery.brandId,
  category: listQuery.category,
  sort: listQuery.sort,
}

*/

// 页面点击处理函数
const pageClick = (item) => {
  pagination.skip = item;
};

// const { data: productData, refresh: productRefresh } = await useFetch(
//   "https://dummyjson.com/products",
//   { query: queryParams }
// );

// console.log(productData);

// 獲取新聞列表數據
// const { data, pending, error, refresh } = await getNewsList();
const {
  data: productData,
  pending,
  error,
  refresh: ProductsRefresh,
} = await getProductsList(queryParams, { key: hash("product_list") }); //對於使用了響應式参數的情况，需要手動設置 key

// const BannerData = reactive("");

// 測試-API
// const handleBannerData = async () => {
//   const { data } = await useAsyncData("banner", async () => {
//     const res = await axios.get("https://api.github.com/orgs/nuxt");
//     return res.data;
//   });
//   console.log(data);
// };
// handleBannerData();
// // console.log(data);
// console.log(handleBannerData.value);

// const { data } = await useAsyncData("banner", async () => {
//   const res = await axios.get("https://api.github.com/orgs/nuxt");
//   return res.data;
// });

// 測試-單一頁面引入
// useHead({
//   link: [
//     {
//       rel: "stylesheet",
//       href: "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css",
//     },
//   ],
//   script: [
//     {
//       src: "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.3/jquery.min.js",
//       async: true,
//       tagPosition: "bodyClose",
//     },
//   ],
// });

// const { data, pending, error, refresh } = await useAsyncData("mountains", () =>
//   $fetch("https://api.github.com/orgs/nuxt")
// );

// const page = ref(1);
// const { data } = await useAsyncData(
//   "posts",
//   () =>
//     $fetch("https://fakeApi.com/posts", {
//       params: {
//         page: page.value,
//       },
//     }),
//   {
//     watch: [page],
//   }
// );
// console.log(data);

// 單個
// const { data: organization } = await useFetch(
//   `https://api.github.com/orgs/nuxt`
// );
// console.log(organization.value); // null

// //多個 API 請求 useFetch + Promise
// const [{ data: orgsData }, { data: reposData }] = await Promise.all([
//   useFetch(`https://api.github.com/orgs/nuxt`),
//   useFetch(`https://api.github.com/orgs/nuxt/repos`),
// ]);
// console.log(orgsData);
// console.log(reposData);
</script>

<style lang="scss" scoped>
.box {
  text-align: center;
}

ul {
  display: flex;
  justify-content: center;
  li {
    width: 10%;
    margin: 20px;
  }
}

.teleport {
  position: absolute;
  top: 0;
  left: 0;
}
.modal {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 200;
  background: red;
}
</style>
