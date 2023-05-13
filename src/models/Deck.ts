import mongoose from 'mongoose';

const Schema = mongoose.Schema;
// const ObjectId = Schema.Types.ObjectId;

const DeckSchema = new Schema({
  title: String,
  // One-sided card
  // cards: [String],

  // double-sided card, don't explicitly add '_id' here if you want to use MongoDB generated '_id', explanation in details down below
  cards: [{ front: String, back: String }],
});

// 'Deck' is the name of this DeckModel?
const DeckModel = mongoose.model('Deck', DeckSchema);

export default DeckModel;
// this allows us to import this module from other places in our code base

// example of Schema from MongoDB
// const blogSchema = new Schema({
//   title: String, // String is shorthand for {type: String}
//   author: String,
//   body: String,
//   comments: [{ body: String, date: Date }],
//   date: { type: Date, default: Date.now },
//   hidden: Boolean,
//   meta: {
//     votes: Number,
//     favs: Number,
//   },
// });

// Example of how to disable '_id'
// var Post = new mongoose.Schema({
//   title: String,
//   content: String,
//   tags: [ String ]
// }, { _id: false });

// In MongoDB, if you explicitly define _id: string in your schema, it will indicate that you want to use a string value as the identifier for your documents instead of the default ObjectId type.

// By default, MongoDB assigns a unique ObjectId to the _id field of each document when it is inserted. The ObjectId type provides several benefits, such as being globally unique, sortable, and efficient for indexing.

// However, if you specify _id: string in your schema, MongoDB will treat the _id field as a string value rather than generating an ObjectId for it. You will be responsible for ensuring the uniqueness of the _id values you provide when inserting documents.
