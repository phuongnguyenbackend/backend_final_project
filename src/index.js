const express = require('express');
const app = express();
const PORT = 8000;

app.use(express.json());

app.get('/check_health', (req, res) => {
  res.status(200).json({ status: 'ok', message: 'Server is healthy' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
