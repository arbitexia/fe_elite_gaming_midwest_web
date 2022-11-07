import { useState } from 'react';
import { useRouter } from 'next/router';
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { UIImage } from '@/components/UI';
import { StyledNavButton } from './ui';

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const drawerWidth = 240;
const navItems = ['Locations', 'News', 'Contact', 'Signup', 'Login'];

export default function AppNavbar(props: Props) {
  const { window } = props;
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const mobileDrawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Elite Gaming <br></br> Mid West
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const handleNavBtnClick = (key: string) => {
    if ([navItems[3], navItems[4]].includes(key))
      router.push(`/auth?path=${key.toLowerCase()}`);
  };

  const handleLogo = () => {
    router.push('/');
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar
        component="nav"
        sx={{
          height: '86px',
          width: '100%',
          background: 'rgba(255, 255, 255, 0.05)',
          border: '2px solid rgba(54, 70, 70, 0.05)',
          boxShadow: '0px 6px 40px rgba(27, 45, 44, 0.2)',
          backdropFilter: 'blur(7.5px)',
          borderRadius: '0px 0px 20px 20px',
        }}
      >
        <Toolbar sx={{ height: '86px' }}>
          <IconButton
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Box
            sx={{
              display: { xs: 'none', sm: 'block' },
              cursor: 'pointer',
            }}
            onClick={handleLogo}
          >
            <UIImage src="images/icons/logo.svg" width={56} height={54} />
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', sm: 'flex', gap: '15px' } }}>
            {navItems.map((item) => (
              <StyledNavButton
                key={item}
                btnType={item}
                onClick={() => handleNavBtnClick(item)}
              >
                {item}
              </StyledNavButton>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          {mobileDrawer}
        </Drawer>
      </Box>
    </Box>
  );
}
