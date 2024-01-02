const express = require('express');
const cryptoTrackerRoute = require('./routes/routes')

const app = express();
const port = 3000;


app.use(express.json())
app.use(cryptoTrackerRoute)


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


