import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SideMenu from '../SideMenu/SideMenu';

const Header: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  const toggleDrawer = (open: boolean) => {
    setOpen(open);
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }} onClick={() => toggleDrawer(true)}>
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Caso de uso
          </Typography>

          <Button color="inherit" startIcon={<AccountCircleIcon />}>
            Iniciar sesión
          </Button>
        </Toolbar>
      </AppBar>

      <SideMenu open={open} toggleDrawer={toggleDrawer} />
    </div>
  );
};

export default Header;
