const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());

app.use(express.static(path.join(__dirname)));

const PORT = 3005;

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log('Server is listening on: ', PORT);
});
