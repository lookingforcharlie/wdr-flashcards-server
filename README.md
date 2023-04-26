# Backend for Cards

- host on railway.app
- (test api)[https://wdr-flashcards-server-production.up.railway.app/decks]

## Knowledge

- npm init -f [to create package.json file]
- npm install express --save [install express]
- npm install --save-dev ts-node [install typescript for node] // try ts-node-dev, it's bundled with nodemon?
- npm i --save-dev @types/express [install typescript for express]
- "scripts": {"dev": "ts-node src/index.ts"}, [in package.json to run server]
- npm install --save-dev nodemon [install nodemon]
- "scripts": {"dev": "nodemon --watch \"src/\*\*\" --ext \"ts,json\" --exec \"ts-node src/index.ts\""}, [use nodemon to watch all the files inside src folder, whose extension is .ts and .json, rerun index.ts file use ts-node if there's any changes occur]

- setup MongoDB cluster for app
- npm install mongoose [bring in mongoose to connect to MongoDB cluster]
- npm install --save-dev @types/mongoose [install typescript for mongoose]
- npm install dotenv --save [Read .env file]
- npm i --save cors [install CORS to avoid cors errors]
- npm i --save-dev @types/cors [install typescript for cors]

- Production
  - npm i -g pm2 [pm2 make sure your express API always running]
  - npx tsc --init [Setup a ts.config.json]

## Question

- why splice doesn't work in the client side, but slice works? [Location: Deck.tsx, handleDeleteCard function]
- why splice works in the server side, slice doesn't work? [Location: cardControllers.ts, deleteCardForDeckController function]

- "build": "tsc",
- "start": "node build/index.js"
