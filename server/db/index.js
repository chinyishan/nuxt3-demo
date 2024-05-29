import mongoose from "mongoose";

export default async (_nitroApp) => {
  try {
    mongoose.set("strictQuery", true); // 嚴格模式
    await mongoose.connect(
      "mongodb+srv://sunny:wW4oChPZQFcBAEip@sunny-nuxt3.dy3nd8m.mongodb.net/sunny-test-nuxt3"
    );
    console.log("連接 MongoDB"); //server 出現則連接成功
  } catch (e) {
    console.error("錯誤 MongoDB =>", e);
  }
};
