import React from 'react';
import { Drawer, List, ListItem, ListItemText, ListItemButton, ListItemIcon } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import BusinessIcon from '@mui/icons-material/Business';
import InfoIcon from '@mui/icons-material/Info';
import ContactMailIcon from '@mui/icons-material/ContactMail';

interface SideMenuProps {
  open: boolean;
  toggleDrawer: (open: boolean) => void;
}

const SideMenu: React.FC<SideMenuProps> = ({ open, toggleDrawer }) => {
  const menuItems = [
    { text: 'Inicio', icon: <HomeIcon /> },
    { text: 'Servicios', icon: <BusinessIcon /> },
    { text: 'Acerca de', icon: <InfoIcon /> },
    { text: 'Contacto', icon: <ContactMailIcon /> },
  ];

  return (
    <Drawer anchor="left" open={open} onClose={() => toggleDrawer(false)} sx={{ paddingRight: "20px" }}>
      <List>
        {menuItems.map((item, index) => (
          <ListItem key={index}>
            <ListItemButton onClick={() => toggleDrawer(false)}>
              <ListItemIcon>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default SideMenu;
