import {
  styled,
  Button,
  IconButton,
  MenuProps,
  Menu,
  MenuItem,
} from '@mui/material';

export type StyledNavButtonProp = {
  btntype: string;
};

export const StyledNavButton = styled(Button)<StyledNavButtonProp>(
  ({ btntype }) => ({
    background:
      btntype === 'Signup'
        ? 'radial-gradient(300.75% 955.63% at 85.18% 5.81%, rgba(0, 255, 148, 0.16) 0%, rgba(255, 255, 255, 0.002) 100%), radial-gradient(97.65% 173.77% at -3.15% 77.15%, rgba(14, 71, 112, 0.2) 0%, rgba(24, 77, 89, 0.2) 23.15%, rgba(17, 54, 81, 0) 100%), #001817'
        : btntype === 'Login'
        ? 'rgba(191, 215, 225, 0.05)'
        : 'transparent',
    border:
      btntype === 'Signup'
        ? '1px solid rgba(191, 215, 225, 0.05)'
        : btntype === 'Login'
        ? '1px solid rgba(137, 200, 198, 0.2)'
        : 'transparent',
    borderRadius: '8px',
    width: '100px',
    height: '42px',
    fontWeight: '500',
    fontSize: '14px',
    lineHeight: '21px',
    textTransform: 'none',
    color: '#FFFFFF',
  })
);

export const StyledIconButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.text.secondary,
  marginLeft: 15,
  [theme.breakpoints.down('md')]: {
    marginLeft: 10,
  },
  [theme.breakpoints.down('xs')]: {
    marginLeft: 5,
  },
}));

export const NavbarMenu = (props: MenuProps) => {
  return (
    <Menu
      PaperProps={{
        elevation: 0,
        sx: {
          borderRadius: '20px',
          overflow: 'visible',
          filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
          mt: 1.5,
          '& .MuiAvatar-root': {
            width: 32,
            height: 32,
            ml: -0.5,
            mr: 1,
          },
          '&:before': {
            content: '""',
            display: 'block',
            position: 'absolute',
            top: 0,
            right: 25,
            width: 10,
            height: 10,
            bgcolor: 'background.paper',
            transform: 'translateY(-50%) rotate(45deg)',
            zIndex: 0,
          },
        },
      }}
      transformOrigin={{ horizontal: 'right', vertical: 'top' }}
      anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      {...props}
    >
      {props.children}
    </Menu>
  );
};

export const StyledProfileMenuItem = styled(MenuItem)(() => ({
  margin: '0px 20px',
  borderRadius: '8px',
  padding: '8px 0px 8px 0px',
  width: '190px',
  display: 'flex',
  justifyContent: 'space-between',
  '&:hover': {
    backgroundColor: 'transparent',
  },
  p: {
    marginLeft: 5,
    fontSize: 14,
    fontWeight: 500,
    // color: '#667180',
  },
}));
