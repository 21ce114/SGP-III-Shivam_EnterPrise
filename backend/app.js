const express = require('express');
const app = express();
const Routes = require('./Routes/User_Routes');

require('./conn');
app.use(express.json());

app.use('/apoo', Routes);

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: 'Internal Server Error' });
});

// app.use((req, res, next) => {
//   res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
//   res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
//   next();
// });

// Rest of your server code

app.listen(8000, () => {
  console.log('Server is running on port 8000');
});
// Example endpoint to stop the server gracefully
