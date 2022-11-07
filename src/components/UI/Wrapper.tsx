import { styled, Box } from '@mui/material';

export const UIAppLayoutWrapper = styled(Box)({
  width: '100%',
  minHeight: '100vh',
  scrollBehavior: 'smooth',
});

export const UIAuthLayoutWrapper = styled(Box)({
  width: '100%',
  minHeight: '100vh',
  backgroundImage: `url(/images/auth-bg.png)`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  scrollBehavior: 'smooth',
});
