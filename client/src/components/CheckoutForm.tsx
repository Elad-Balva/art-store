import React, { useState } from 'react';
import { TextField, MenuItem, Button, useMediaQuery, useTheme } from '@mui/material';

const paymentOptions = ['Credit Card', 'PayPal', 'Bank Transfer'];

const CheckoutForm: React.FC = () => {
  const [paymentOption, setPaymentOption] = useState('');
  const [details, setDetails] = useState({ name: '', cardNumber: '', expiry: '', cvv: '' });
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setDetails({ ...details, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Submitted details:', details);
  };

  return (
    <form onSubmit={handleSubmit} className={isMobile ? "p-2" : "p-4"}>
      <TextField
        label="Name"
        variant="outlined"
        name="name"
        value={details.name}
        onChange={handleInputChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Payment Option"
        variant="outlined"
        select
        value={paymentOption}
        onChange={(e) => setPaymentOption(e.target.value)}
        fullWidth
        margin="normal"
      >
        {paymentOptions.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </TextField>
      {paymentOption === 'Credit Card' && (
        <>
          <TextField
            label="Card Number"
            variant="outlined"
            name="cardNumber"
            value={details.cardNumber}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Expiry Date"
            variant="outlined"
            name="expiry"
            value={details.expiry}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="CVV"
            variant="outlined"
            name="cvv"
            value={details.cvv}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
        </>
      )}
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Submit
      </Button>
    </form>
  );
};

export default CheckoutForm;