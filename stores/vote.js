import { defineStore } from "pinia";
export const useVoteStore = defineStore("vote", () => {
  // 是否送出投票
  const isLoad = ref(false);

  // 儲存投票列表
  const voteList = ref({});

  // 寫入 | 更新投票列表
  const setVoteList = (list) => {
    voteList.value = list;
  };

  // 送出投票
  const voteSend = async (type) => {
    if (isLoad.value) return;
    isLoad.value = true;
    try {
      const res = await $fetch("https://vue-lessons-api.vercel.app/vote/add", {
        method: "POST",
        body: { type },
      });
      setVoteList(res);
      alert("投票完成");
    } catch (error) {
      alert("暫時無法投票");
    } finally {
      isLoad.value = false;
    }
  };

  return { isLoad, voteList, setVoteList, voteSend };
});
