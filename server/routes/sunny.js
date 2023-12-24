export default defineEventHandler((event) => {
  const data = {
    name: "sunny",
    age: 100,
  };
  return { data };
});
