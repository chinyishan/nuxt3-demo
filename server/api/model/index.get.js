export default defineEventHandler((event) => {
  const models = {
    "page.index": {
      id: 11,
      name: "首頁",
      key: "page.index",
      attribute_data: {
        carousel: {
          items: [
            {
              url: "https://asdasd.com",
              image:
                "https://storage.googleapis.com/dev-great-tree-malayisa-backend/gcs/files/20240307-Ki9Z6uFleZJiXEk5uKb5Pd78tKGdDaoIqTuA9lZi.gif",
              image_m:
                "https://storage.googleapis.com/dev-great-tree-malayisa-backend/gcs/files/20240307-SjsNoU9PZ2Hkd9AJscimQP1dhGAyGIZIAeaWZeuV.gif",
              new_page: true,
            },
            {
              url: "https://asdasd.com",
              image:
                "https://storage.googleapis.com/dev-great-tree-malayisa-backend/gcs/files/20240307-Ki9Z6uFleZJiXEk5uKb5Pd78tKGdDaoIqTuA9lZi.gif",
              image_m:
                "https://storage.googleapis.com/dev-great-tree-malayisa-backend/gcs/files/20240307-SjsNoU9PZ2Hkd9AJscimQP1dhGAyGIZIAeaWZeuV.gif",
              new_page: true,
            },
          ],
        },
        friendly_link: {
          url: [
            {
              url: "https://google.com/",
              name: "google",
            },
            {
              url: "http://dasda.com",
              name: "dasdadasda",
            },
          ],
        },
        carousel_brand: {
          more: true,
          items: [
            {
              id: 1,
              name: "麥當勞",
              main_image:
                "https://storage.googleapis.com/dev-great-tree-malayisa-backend/gcs/files/20240125-ZZBfqCubybx3cRZZfp0ji1irtITvoCsWbPpRuLUy.png",
              media: null,
              type: null,
              video: null,
              description: null,
              title: null,
              sub_title: null,
              sale_price: null,
              category: null,
            },
            {
              id: 2,
              name: "肯德基",
              main_image:
                "https://storage.googleapis.com/dev-great-tree-malayisa-backend/gcs/files/20240125-A4zRYCRI7Y4bF0Iwt5zY7roCGKxqDVetRokRBjpn.png",
              media: null,
              type: null,
              video: null,
              description: null,
              title: null,
              sub_title: null,
              sale_price: null,
              category: null,
            },
            {
              id: 6,
              name: "test",
              main_image:
                "https://storage.googleapis.com/dev-great-tree-malayisa-backend/gcs/files/20240202-tExe1y2cgPfjNzinxX9jRx98InNFGZ6OHExQnmPx.jpg",
              media: null,
              type: null,
              video: null,
              description: null,
              title: null,
              sub_title: null,
              sale_price: null,
              category: null,
            },
          ],
        },
        carousel_media: {
          more: true,
          items: [
            {
              id: 9,
              name: "test",
              main_image:
                "https://storage.googleapis.com/dev-great-tree-malayisa-backend/gcs/files/20240201-hgWRTHdkSrAVblMdZrun4IUKDcozNhaaTKjGouEC.png",
              media:
                "https://storage.googleapis.com/dev-great-tree-malayisa-backend/gcs/files/20240223-XJN3I1cbNcL849ftkqdPc1TKX3VTwfWCgFopu1SZ.mp4",
              type: "file",
              video: null,
              description: "老厲害了",
              title: null,
              sub_title: null,
              sale_price: null,
              category: null,
            },
            {
              id: 11,
              name: "test2",
              main_image:
                "https://storage.googleapis.com/dev-great-tree-malayisa-backend/gcs/files/20240201-EIUVLlCd8mlUJjujeONClyn0pmG3JQVAahjrsP0P.png",
              media:
                "https://storage.googleapis.com/dev-great-tree-malayisa-backend/gcs/files/20240201-GaZxE5UGWxigjHdhEgziaIBk6Cbwrn338SrqFkV8.mp4",
              type: "file",
              video: null,
              description: "test2",
              title: null,
              sub_title: null,
              sale_price: null,
              category: null,
            },
            {
              id: 28,
              name: "testing",
              main_image:
                "https://storage.googleapis.com/dev-great-tree-malayisa-backend/gcs/files/20240306-LT2gamGmPSYGH2Iwt9dwt7vWF18eCJBtvkp8E1Vf.png",
              media:
                "https://storage.googleapis.com/dev-great-tree-malayisa-backend/gcs/files/20240306-nFe9OUyxzckMsSrCHFHZg4m7QOYsLBkqNi8Y9K13.mp4",
              type: "file",
              video: null,
              description: "testing",
              title: null,
              sub_title: null,
              sale_price: null,
              category: null,
            },
          ],
        },
        carousel_product: {
          more: true,
          items: [
            {
              id: 1,
              name: "產品",
              main_image:
                "https://storage.googleapis.com/dev-great-tree-malayisa-backend/gcs/files/20240307-lpUR20rcwkT9fC28gKCh0D7TcsqClbD6HvZvbdQy.gif",
              media: null,
              type: null,
              video: null,
              description: "A",
              title: null,
              sub_title: null,
              sale_price: 9000,
              category: null,
            },
          ],
        },
      },
    },
    "page.brand_and_product": {
      id: 12,
      name: "品牌與產品",
      key: "page.brand_and_product",
      attribute_data: {
        seo: {
          url: "http://asdas.com",
          title: "test",
          keyword: ["test"],
          description: "test",
        },
        page_header: {
          data: ["product", "恭喜發財", "新年快樂"],
          name: "test",
        },
      },
    },
    "page.raw_material": {
      id: 13,
      name: "原料介紹",
      key: "page.raw_material",
      attribute_data: {
        seo: {
          url: "http://youtube.com.tw",
          title: "asdada",
          keyword: ["asdsad"],
          description: "saddadada",
        },
      },
    },
    "page.news": {
      id: 14,
      name: "新訊中心",
      key: "page.news",
      attribute_data: null,
    },
    "page.information": {
      id: 15,
      name: "最新資訊",
      key: "page.information",
      attribute_data: null,
    },
    "page.media": {
      id: 16,
      name: "影音專區",
      key: "page.media",
      attribute_data: null,
    },
    "page.contact_us": {
      id: 17,
      name: "聯絡我們",
      key: "page.contact_us",
      attribute_data: null,
    },
    "page.firm": {
      id: 18,
      name: "廠商專區",
      key: "page.firm",
      attribute_data: null,
    },
    "page.about_us": {
      id: 19,
      name: "關於大樹",
      key: "page.about_us",
      attribute_data: {
        seo: {
          url: "http://localhost.kr/asdas",
          title: "111",
          keyword: ["111", "444"],
          description: "444",
        },
      },
    },
  };
  return { models };
});
