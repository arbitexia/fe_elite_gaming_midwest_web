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
import { UserType } from '@/types';
import {
  useTranslation,
  useLanguageQuery,
  useSelectedLanguage,
} from 'next-export-i18n';
import AppLanguageSelector from '../LanguageSelector';

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const drawerWidth = 240;
export default function AppNavbar(props: Props) {
  const { t } = useTranslation();
  const [query] = useLanguageQuery();
  const { lang } = useSelectedLanguage();
  const navDefaultItems = [
    { label: 'header.locations', value: 'Locations' },
    { label: 'header.news', value: 'News' },
    { label: 'header.contact', value: 'Contact' },
    { label: 'header.signup', value: 'Signup' },
    { label: 'header.login', value: 'Login' },
  ];

  const navAuthItems = [
    { label: 'header.my-points', value: 'My Points' },
    { label: 'header.rewards', value: 'Rewards' },
    { label: 'header.locations', value: 'Locations' },
  ];

  const { window } = props;
  const router = useRouter();
  const path = router.asPath.slice(1, router.asPath.length);
  const { isAuthenticated, onLogout, me } = useAuth({});
  const [navItems, setNavItems] = useState<{ label: string; value: string }[]>(
    []
  );
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
        {t('header.m-elite-gaming')} <br></br> {t('header.m-mid-west')}
      </Typography>
      <Divider />
      <List>
        {navItems.map(({ label, value }) => (
          <ListItem key={value} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const handleNavBtnClick = (key: string) => {
    if (key.includes('Signup') || key.includes('Login')) {
      router.push({
        pathname: '/auth',
        query: {
          ...(query.lang === 'es' && query),
          path: `${key.toLowerCase()}`,
        },
      });
    } else if (key.includes('Logout')) {
      onLogout();
    } else if (key === 'My Points') {
      router.push({
        pathname: '/points',
        query: {
          ...(lang === 'es' && { lang }),
        },
      });
    } else {
      router.push({
        pathname: `/${key.toLowerCase()}`,
        query: {
          ...(lang === 'es' && { lang }),
        },
      });
    }
  };

  const [dropdownMenuItems, setdropdownMenuItems] = useState([
    {
      value: 'Profile',
      label: 'common.profile',
    },
    {
      label: 'common.logout',
      value: 'Logout',
    },
  ]);

  const handleLogo = () => {
    router.push({
      pathname: '/',
      query: {
        ...(query.lang === 'es' && { lang: query.lang }),
      },
    });
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
            {navItems.map(({ label, value }) => {
              if (value === 'Signup') {
                return (
                  <>
                    <AppLanguageSelector />
                    <StyledNavButton
                      key={value}
                      btntype={value}
                      onClick={() => handleNavBtnClick(value)}
                      sx={{
                        color: value.toLowerCase().includes(path)
                          ? '#04A49C'
                          : '#FFFFFF',
                      }}
                    >
                      {t(label)}
                    </StyledNavButton>
                  </>
                );
              }
              return (
                <StyledNavButton
                  key={value}
                  btntype={value}
                  onClick={() => handleNavBtnClick(value)}
                  sx={{
                    color: value.toLowerCase().includes(path)
                      ? '#04A49C'
                      : '#FFFFFF',
                  }}
                >
                  {t(label)}
                </StyledNavButton>
              );
            })}
            {isAuthenticated && (
              <>
                <AppLanguageSelector sx={{ mx: '0px', ml: '24px' }} />
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
                  {(me as UserType.User)?.avatar?.url ? (
                    <Box
                      component="img"
                      sx={{
                        height: 39,
                        width: 39,
                        position: 'relative',
                        background: 'rgba(196, 196, 196, 0.5)',
                        borderRadius: '30px',
                        marginRight: 1,
                      }}
                      alt="profile"
                      src={(me as UserType.User).avatar?.url}
                    />
                  ) : (
                    <Avatar
                      sx={{ height: 39, width: 39 }}
                      src={''}
                      alt={'avatar'}
                    />
                  )}

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
              onClick={() => handleNavBtnClick(el.value)}
            >
              <Typography>{t(el.label)}</Typography>
            </StyledProfileMenuItem>
          </div>
        ))}
      </NavbarMenu>
    </Box>
  );
}
