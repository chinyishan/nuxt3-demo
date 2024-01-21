<template>
  <svg aria-hidden="true">
    <use :xlink:href="svgName" :fill="props.fill" :stroke="props.stroke" />
  </svg>
</template>

<script setup>
// 藉由 props 來調整 svg 的樣式
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  fill: {
    type: String,
    // default: "none",
  },
  stroke: {
    type: String,
  },
});
const svgName = computed(() => {
  return props.name.includes("/") ? `#${props.name}` : `#/${props.name}`;
});
</script>
