import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, useMediaQuery, useTheme } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SettingsIcon from '@mui/icons-material/Settings';

interface HeaderProps {
  onCartClick: () => void;
  onSettingsClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onCartClick, onSettingsClick }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <AppBar position="static">
      <Toolbar className="flex justify-between">
        <IconButton edge="start" color="inherit" onClick={onCartClick}>
          <ShoppingCartIcon />
        </IconButton>
        <Typography variant="h6" className={isMobile ? "text-base" : ""}>Art Store</Typography>
        <IconButton edge="end" color="inherit" onClick={onSettingsClick}>
          <SettingsIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;