import { Request, Response } from 'express';
import Deck from '../models/Deck';

// get decks in MongoDB
export async function getDecksController(req: Request, res: Response) {
  // fetch all decks and send to the user
  // 1. fetch the data from mongo
  const decks = await Deck.find();
  console.log('Retrieved decks in MongoDB:', decks);
  // 2. send back the array to the ui
  res.json(decks);
}

// create deck in MongDB
export async function createDecksController(req: Request, res: Response) {
  // you see the req.body in the console after using middleware express.json()
  console.log(req.body);
  // create a new deck model and persist that to our db
  const newDeck = new Deck({
    title: req.body.title,
  });
  // save newDeck into DB
  // save() is a promise
  const createdDeck = await newDeck.save();

  console.log('Just created a deck with _id:', createdDeck._id);

  res.json(createdDeck);
}

// delete a deck in MongoDB
export async function deleteDecksController(req: Request, res: Response) {
  // 1. Get the deck id from the url
  const deckId = req.params.deckId;

  // 2. Delete the deck from mongo
  const deck = await Deck.findByIdAndDelete(deckId);

  console.log('Deleted a deck');
  // 3. Return the deleted deck to the user who made the request
  res.json(deck);
}
