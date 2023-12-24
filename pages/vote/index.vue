<template>
  <div class="vote_app">
    <h1>投票列表</h1>
    <div class="box_list">
      <VoteCard />
    </div>
    {{ testStore.VoteToTestStore }}
  </div>
</template>

<script setup>
// https://vue-lessons-api.vercel.app/vote/list

const store = useVoteStore();
const testStore = useTestStore();

await useAsyncData("getVote", async () => {
  const data = await $fetch("https://vue-lessons-api.vercel.app/vote/list");
  store.setVoteList(data);
  return data;
});
</script>

<style lang="scss" scoped>
.vote_app {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  > h1 {
    font-size: 30px;
    margin-bottom: 50px;
  }
}
.box_list {
  width: 600px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.card {
  width: 140px;
  height: 200px;
  border: 1px solid #999;
  padding: 10px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .card_info {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    img {
      width: 100px;
    }
  }
}
</style>
