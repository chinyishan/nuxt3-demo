<template>
  <div class="card" v-for="item in store.voteList" :key="item.path">
    <div class="card_info">
      <img :src="item?.path" :alt="item?.name" />
      <h3>
        {{ item?.name }}
      </h3>
    </div>
    <!-- 傳送需要要時間，做計算判斷 -->
    <VoteBtn @click="store.voteSend(item?.name)">
      {{ store.isLoad ? "重新計算中..." : item?.count }}
    </VoteBtn>
  </div>
</template>

<script setup>
// 使用解構的寫法
// import { storeToRefs } from "pinia";
// const store = UseVoteStore();
// const { voteList, isLoad } = storeToRefs(store);
// const { voteSend } = store;

const store = useVoteStore();
</script>

<style lang="scss" scoped>
.card {
  width: 170px;
  height: 220px;
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
