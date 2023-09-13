<script setup>
const store = useVoteStore();
</script>
<template>
  <div class="card" v-for="card in store.voteList" :key="card.path">
    <div class="card_info">
      <img :src="card?.path" :alt="card?.name" />
      <h1>
        {{ card?.name }}
      </h1>
    </div>
    <VoteBtn @click="store.voteSend(card?.name)">
      {{ store.isLoad ? "重新計算中..." : card?.count }}
    </VoteBtn>
  </div>
</template>

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
