const express = require('express');
const app = express();
const PORT = 8000;
const healthRoutes = require('./routes/healthRoutes');
const userRoutes = require('./routes/userRoutes');

app.use(express.json());

app.use('/', healthRoutes);
app.use('/api/users', userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
