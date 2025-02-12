import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import authRoutes from './routes/authRoutes';
import cartRoutes from './routes/cartRoutes';
import itemRoutes from './routes/itemRoutes';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors()); // Add this line to enable CORS for all origins
app.use(bodyParser.json());
app.use('/api/auth', authRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/items', itemRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});