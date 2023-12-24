export default defineEventHandler((event) => {
  const data = {
    name: "sunny",
    age: 12,
  };
  return { data };
});
