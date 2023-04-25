// import dotenv to read .env file
// require('dotenv').config();
import { config } from 'dotenv';
config();

// const express = require('express');
import express from 'express';
// bring in a tool or library allows us easily connect to mongoDB database cluster
import cors from 'cors';
import mongoose from 'mongoose';
import {
  createCardForDeckController,
  deleteCardForDeckController,
  getOneDeckController,
} from './controllers/cardControllers';
import {
  createDecksController,
  deleteDecksController,
  getDecksController,
} from './controllers/deckControllers';
const app = express();

const PORT = process.env.PORT || 5555;

// We are running locally, express you can let any hostname hit us, it doesn't matter, let's install CORS.
app.use(
  cors({
    origin: '*',
  })
);

// express.json() allows support for Json post request, we can't see console.log(req.body) without it
// express.json() is a middleware function, app.use() telling express to use it.
// anytime anyone makes a request to our api, it's going to run express.json()
// when the request comes in, with express.json() running, API knows what to do when seeing 'Content-type: application/Json', and put request body into req.body of API.
app.use(express.json());

// When the page loads, we want to fetch all the created decks and present them to the user.
// We are making a endpoint allow users to do so
app.get('/decks', getDecksController);

// POST: creating a brand new resource in terms of restful architecture of API design
// browser can only test GET, we need Thunder Client to test POST request
app.post('/decks', createDecksController);

// Adding an endpoint for deleting cards
app.delete('/decks/:deckId', deleteDecksController);

// Cards will be nested resource of deck in MongoDB
// nest the Cards onto the decks/deckId/
// don't forget the ':' before the deckId
app.post('/decks/:deckId/cards', createCardForDeckController);

// get one deck
app.get('/decks/:deckId/cards', getOneDeckController);

app.delete('/decks/:deckId/cards/:cardIndex', deleteCardForDeckController);

// mongoose.connect is a promise that running asynchronous code
//"!" symbol which is a feature in Typescript known as the definite assignment assertion.
// the definite assignment assertion feature is used to tell the compiler that the variable assigned is indeed valid for all intents and purposes, even if Typescript's analyses cannot detect so.
mongoose.connect(process.env.MONGO_URL!).then(() => {
  // make sure the API is not listening for new connections until we fully done connecting to db
  console.log(`listening on port ${PORT}`);
  app.listen(PORT);
});

// const port = process.env.PORT || 5000;
