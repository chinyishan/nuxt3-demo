import peopleModel from "@/server/model/people.model";

export default defineEventHandler(async (event) => {
  const people = await peopleModel.find({});
  return people;
});
