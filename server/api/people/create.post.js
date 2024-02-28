import peopleModel from "@/server/model/people.model";

export default defineEventHandler(async (event) => {
  // post 進來取得 body
  const body = await readBody(event);

  const { name, email, age } = body;

  // 要新增資料所以 new Model，把 body 資料丟進來
  const people = new peopleModel({ name, email, age });

  // 新增完後做儲存
  await people.save();

  return { success: true, body };
});
