import mongoose from 'mongoose';

const Schema = mongoose.Schema;
// const ObjectId = Schema.Types.ObjectId;

const DeckSchema = new Schema({
  title: String,
  cards: [String],
});

// 'Deck' is the name of this DeckModel?
const DeckModel = mongoose.model('Deck', DeckSchema);

export default DeckModel;
// this allows us to import this module from other places in our code base
