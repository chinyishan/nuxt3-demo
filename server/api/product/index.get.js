export default defineEventHandler((event) => {
  const data = [
    {
      id: 18,
      name: "貓貓",
      sale_price: "300.00",
      brand: "品牌001",
      image: "https://picsum.photos/id/31/300/300",
      description: "貓貓貓貓貓貓",
    },
    {
      id: 22,
      name: "藥品藥品",
      sale_price: "50.00",
      brand: "品牌002",
      image: "https://picsum.photos/id/32/300/300",
      description: "藥品藥品藥品",
    },
    {
      id: 34,
      name: "產品",
      sale_price: "9000.00",
      brand: "品牌002",
      image: "https://picsum.photos/id/33/300/300",
      description: "產品產品產品產品產品",
    },
    {
      id: 42,
      name: "不知道",
      sale_price: "156.00",
      brand: "品牌003",
      image: "https://picsum.photos/id/34/300/300",
      description: "不知道不知道不知道不知道",
    },
    {
      id: 52,
      name: "saedsad",
      sale_price: "900.00",
      brand: "品牌001",
      image: "https://picsum.photos/id/35/300/300",
      description: "adad",
    },
  ];
  return { data };
});
