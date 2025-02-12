import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemText, IconButton, Button, Dialog, DialogTitle, DialogContent, DialogActions, useMediaQuery, useTheme } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckoutForm from './CheckoutForm';

interface CartProps {
  open: boolean;
  onClose: () => void;
  items: { id: number; name: string; price: number }[];
  onRemoveItem: (id: number) => void;
}

const Cart: React.FC<CartProps> = ({ open, onClose, items, onRemoveItem }) => {
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleCheckout = () => {
    setCheckoutOpen(true);
  };

  const handleCheckoutClose = () => {
    setCheckoutOpen(false);
  };

  return (
    <>
      <Drawer anchor="left" open={open} onClose={onClose}>
        <div className={isMobile ? "w-64" : "w-80"}>
          <div className="flex justify-between p-4">
            <h2>Cart</h2>
            <IconButton onClick={onClose}>
              <CloseIcon />
            </IconButton>
          </div>
          <List>
            {items.map((item) => (
              <ListItem key={item.id} className="flex justify-between">
                <ListItemText primary={item.name} secondary={`$${item.price}`} />
                <IconButton onClick={() => onRemoveItem(item.id)}>
                  <DeleteIcon />
                </IconButton>
              </ListItem>
            ))}
          </List>
          <div className="p-4">
            <Button variant="contained" color="primary" fullWidth onClick={handleCheckout}>
              Checkout
            </Button>
          </div>
        </div>
      </Drawer>
      <Dialog open={checkoutOpen} onClose={handleCheckoutClose}>
        <DialogTitle>Checkout</DialogTitle>
        <DialogContent>
          <CheckoutForm />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCheckoutClose} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Cart;