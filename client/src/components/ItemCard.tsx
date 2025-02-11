import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button, useMediaQuery, useTheme } from '@mui/material';

interface ItemCardProps {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  onAddToCart: (id: number) => void;
}

const ItemCard: React.FC<ItemCardProps> = ({ id, name, price, imageUrl, onAddToCart }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Card className="m-4">
      <CardMedia component="img" height={isMobile ? "100" : "140"} image={imageUrl} alt={name} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          ${price}
        </Typography>
        <Button variant="contained" color="primary" onClick={() => onAddToCart(id)}>
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  );
};

export default ItemCard;