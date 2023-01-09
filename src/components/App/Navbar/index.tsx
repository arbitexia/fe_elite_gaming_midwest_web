import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '@/hooks';
import {
  AppBar,
  Avatar,
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
import {
  StyledNavButton,
  StyledIconButton,
  NavbarMenu,
  StyledProfileMenuItem,
} from './ui';

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const drawerWidth = 240;
const navDefaultItems = ['Locations', 'News', 'Contact', 'Signup', 'Login'];
const navAuthItems = ['My Points', 'Rewards', 'Locations'];

export default function AppNavbar(props: Props) {
  const { window } = props;
  const router = useRouter();
  const path = router.asPath.slice(1, router.asPath.length);
  const { isAuthenticated, onLogout } = useAuth({});
  const [navItems, setNavItems] = useState<string[]>([]);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorElNotifications, setAnchorElNotifications] =
    useState<null | HTMLElement>(null);
  const [anchorElSettingsMenu, setAnchorElSettingsMenu] =
    useState<null | HTMLElement>(null);
  const isSettingsMenuOpen = Boolean(anchorElSettingsMenu);

  useEffect(() => {
    if (!isAuthenticated) setNavItems(navDefaultItems);
    else setNavItems(navAuthItems);
  }, [isAuthenticated]);

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
        {navItems.map((item: string) => (
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
    if (key.includes('Signup') || key.includes('Login'))
      router.push(`/auth?path=${key.toLowerCase()}`);
    else if (key.includes('Logout')) onLogout();
    else if (key === 'My Points') router.push('/points');
    else router.push(`/${key.toLowerCase()}`);
  };

  const [dropdownMenuItems, setdropdownMenuItems] = useState([
    'Profile',
    'Logout',
  ]);

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
                sx={{
                  color: item.toLowerCase().includes(path)
                    ? '#04A49C'
                    : '#FFFFFF',
                }}
              >
                {item}
              </StyledNavButton>
            ))}
            {isAuthenticated && (
              <>
                <StyledIconButton
                  onClick={(event: React.MouseEvent<HTMLElement>) => {
                    setAnchorElNotifications(event.currentTarget);
                  }}
                  size="small"
                  disableRipple
                >
                  <UIImage
                    src="images/icons/notifications.svg"
                    width={30}
                    height={30}
                  />
                </StyledIconButton>
                <StyledIconButton
                  onClick={(event: React.MouseEvent<HTMLElement>) => {
                    setAnchorElSettingsMenu(event.currentTarget);
                  }}
                  size="small"
                  aria-haspopup="true"
                  disableRipple
                >
                  <Avatar
                    sx={{ height: 39, width: 39 }}
                    src={''}
                    alt={'avatar'}
                  />
                  <UIImage
                    src="images/icons/arrow-down.svg"
                    width={14}
                    height={14}
                  />
                </StyledIconButton>
              </>
            )}
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
      <NavbarMenu
        anchorEl={anchorElSettingsMenu}
        open={isSettingsMenuOpen}
        onClose={() => {
          setAnchorElSettingsMenu(null);
        }}
        onClick={() => {
          setAnchorElSettingsMenu(null);
        }}
      >
        {dropdownMenuItems.map((el, index) => (
          <div key={index}>
            {index === 1 && <Divider sx={{ my: 0.5 }} />}
            <StyledProfileMenuItem
              disableRipple
              disableTouchRipple
              onClick={() => handleNavBtnClick(el)}
            >
              <Typography>{el}</Typography>
            </StyledProfileMenuItem>
          </div>
        ))}
      </NavbarMenu>
    </Box>
  );
}
