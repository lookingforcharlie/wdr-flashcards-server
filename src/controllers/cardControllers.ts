import { Request, Response } from 'express';
import Deck from '../models/Deck';

// Create One-sided Card for Deck in MongoDB
export async function disabledcreateCardForDeckController(
  req: Request,
  res: Response
) {
  // retrieve the id from params of request
  // if you have a route as /api/:name, then the "name" property is available as req.params.name
  const deckId = req.params.deckId;
  // find the deck by its id from MongoDB
  const deck = await Deck.findById(deckId);
  // get the card text content from request body by destructuring
  const { text } = req.body;
  // validation for typescript, error handling for the endpoint
  if (!deck) return res.status(400).send('no deck of this id exits');
  // push the card content into deck.cards array
  deck.cards.push(text);
  // save to MongoDB
  await deck.save();
  // send back the saved deck
  res.json(deck);
}

// Create double-sided card in MongoDB
export async function createCardForDeckController(req: Request, res: Response) {
  // retrieve the id from params of request
  // if you have a route as /api/:name, then the "name" property is available as req.params.name
  const deckId = req.params.deckId;
  // find the deck by its id from MongoDB
  const deck = await Deck.findById(deckId);
  // get the card text content from request body by destructuring
  const { textFront, textBack } = req.body;
  // validation for typescript, error handling for the endpoint
  if (!deck) return res.status(400).send('no deck of this id exits');

  const forPushCard = {
    front: textFront,
    back: textBack,
  };

  // push the card content into deck.cards array
  deck.cards.push(forPushCard);

  // save to MongoDB
  await deck.save();
  // send back the saved deck
  res.json(deck);
}

// delete Card from Deck in MongoDB
export async function deleteCardForDeckController(req: Request, res: Response) {
  const deckId = req.params.deckId;
  const cardIndex = req.params.cardIndex;
  const deck = await Deck.findById(deckId);
  if (!deck) return res.status(400).send('no deck of this id exits');

  // the variable retrieved from req.params is string.
  const indexForDeletion = parseInt(cardIndex);
  console.log('Index of the deleted card (server) :', cardIndex);

  // deck.cards.splice(parseInt(cardIndex), 1);
  deck.cards.splice(indexForDeletion, 1);
  await deck.save();
  // return a single deck
  res.json(deck);
}

// get cards of one deck from MongoDB
export async function getOneDeckController(req: Request, res: Response) {
  const deckId = req.params.deckId;
  const deck = await Deck.findById(deckId);
  console.log(deck);
  res.json(deck);
}
