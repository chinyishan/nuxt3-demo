<template>
  <div>
    <h1>多國語系</h1>
    <div class="sel">
      <select v-model="locale">
        <option value="zh-TW">zh-TW</option>
        <option value="en-US">en-US</option>
        <option value="ja-JP">ja-JP</option>
      </select>
    </div>
    <div class="lang">
      <div class="menu">
        <a>{{ $t("front_page") }}</a>
        <a>{{ $t("about_us") }}</a>
        <a>{{ $t("contact_us") }}</a>
        <a>{{ $t("product_description") }}</a>
        <a>{{ $t("latest_news") }}</a>
        <a>{{ $t("history") }}</a>
      </div>
    </div>
  </div>
</template>

<script setup>
const { locale } = useI18n();
console.log(locale);
</script>

<style>
.menu {
  width: 300px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
a {
  cursor: pointer;
  color: #84551c;
  font-size: 25px;
  margin-bottom: 20px;
}
.sel {
  width: 30%;
  margin: 0 auto;
}
.sel select {
  width: 100%;
  height: 30px;
  border-radius: 20px;
  text-align: center;
  border: 1px solid #d4613e;
  margin: 0 auto 20px;
}
select:active,
select:focus {
  outline: none;
}
</style>
