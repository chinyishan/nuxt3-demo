import { defineStore } from "pinia";
export const useTestStore = defineStore("test", () => {
  const testData = reactive([
    {
      id: 1,
      title: "test-01",
      pic: "https://picsum.photos/id/111/300/300",
    },
    {
      id: 2,
      title: "test-02",
      pic: "https://picsum.photos/id/112/300/300",
    },
    {
      id: 3,
      title: "test-03",
      pic: "https://picsum.photos/id/113/300/300",
    },
    {
      id: 4,
      title: "test-04",
      pic: "https://picsum.photos/id/114/300/300",
    },
  ]);

  const VoteStore = useVoteStore();

  const VoteToTestStore = computed(() => {
    VoteStore.voteList;
  });

  return {
    testData,
    VoteToTestStore,
  };
});
