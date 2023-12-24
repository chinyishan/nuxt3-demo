export default defineEventHandler((event) => {
  console.log(event.node.req.url);
});
