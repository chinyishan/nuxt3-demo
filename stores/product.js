import { defineStore } from "pinia";
export const useProductStore = defineStore("product", () => {
  const resource = reactive({
    brands: [
      {
        id: 131,
        image: "https://picsum.photos/id/11/100/100",
        name: "品牌001",
      },
      {
        id: 132,
        image: "https://picsum.photos/id/12/100/100",
        name: "品牌002",
      },
      {
        id: 133,
        image: "https://picsum.photos/id/13/100/100",
        name: "品牌003",
      },
    ],
    sort_types: [
      {
        value: "created_at",
        key: "created_at",
        description: "新產品",
      },
      {
        value: "sort",
        key: "sort",
        description: "熱門",
      },
      {
        value: "asc",
        key: "asc",
        description: "價格低到高",
      },
      {
        value: "desc",
        key: "desc",
        description: "價格高到低",
      },
    ],
  });

  const add = () => {
    count.value++;
  };

  return {
    resource,
    add,
  };
});
