// index.js - Your Node.js Server Application

// 1. Bring in the Express.js "sandwich machine"
const express = require('express');
const app = express(); // Get the machine ready

// 2. Decide which "stove" (port) to listen on.
//    process.env.PORT is given by Vercel/Render. If not, use 3000 for local testing.
const port = process.env.PORT || 3000;

// 3. Define a simple "sandwich recipe" for when someone asks for the main page '/'
app.get('/', (req, res) => {
  res.send('Hello from Node.js (with Express!) - It works!'); // The "sandwich" message!
});

// 4. Tell the "sandwich machine" to start working and listen for hungry people.
app.listen(port, () => {
  // This message will appear in the deployment logs, not your browser.
  console.log(`Node.js server running on port ${port}`);
});
