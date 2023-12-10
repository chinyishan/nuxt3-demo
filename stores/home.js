import { defineStore } from "pinia";
export const useHomeStore = defineStore("home", () => {
  const count = ref(0);

  const add = () => {
    count.value++;
  };

  return {
    count,
    add,
  };
});
