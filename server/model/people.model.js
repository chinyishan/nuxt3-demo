import mongoose from "mongoose";
// const { Schema } = mongoose;

const peopleSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  age: {
    type: String,
  },
});

const people = mongoose.model("sunny-test-nuxt3", peopleSchema, "people");

// people model
export default people;

//樣本
// const blogSchema = new Schema({
//   title: String, // String is shorthand for {type: String}
//   author: String,
//   body: String,
//   comments: [{ body: String, date: Date }],
//   date: { type: Date, default: Date.now },
//   hidden: Boolean,
//   meta: {
//     votes: Number,
//     favs: Number
//   }
// });
