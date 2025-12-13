const express = require('express');
const app = express();
const PORT = 8000;
const checkDb = require('./test-db');
const healthRoutes = require('./routes/healthRoutes');
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const ratingRoutes = require('./routes/ratingRoutes');
const watchlistRoutes = require('./routes/watchlistRoutes');
const upgradeRoutes = require('./routes/upgradeRoutes');

app.use(express.json());

app.use('/', healthRoutes);
app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);
app.use('/api/ratings', ratingRoutes);
app.use('/api/watchlist', watchlistRoutes);
app.use('/api/upgrades', upgradeRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
