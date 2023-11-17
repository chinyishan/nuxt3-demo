<template>
  <div>
    <SwiperBanner />
    <h1>首頁 - Nuxt3</h1>
    <h2 class="title">玩法點擊扭蛋按鈕</h2>
    <p>
      點擊扭蛋按鈕即可開始遊戲，一會員帳號限1次機會。
      領取方式：結帳時，依照該獎項提供的【關鍵字】，在【輸入折扣碼】的位置輸入文字即可帶出獎品及折價。
      每組折扣碼限用一次，數量有限，用完為止。
      加碼活動不適用的品類：奶粉、尿布、濕巾皆不參與 折扣說明：
      結帳輸入折扣碼後，若未帶出折價&贈品即為不參與品項。
      結帳輸入折扣碼、登入領取折價劵分別為兩種折扣優惠，只能擇一，無法併行使用。
      折扣碼、折價劵依各活動使用規則，每組折扣碼、折價劵
      每帳號限量使用，一經使用後取消訂單不返還。
    </p>
  </div>
</template>
<script setup>
// definePageMeta({
//   pageTransition: {
//     name: 'rotate'
//   }
// })
</script>
<style>
.title {
  font-size: calc(20px + 0.5vw);
}
p {
  font-size: calc(12px + 0.5vw);
}
</style>
