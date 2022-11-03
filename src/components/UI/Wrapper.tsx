import { styled, Box } from '@mui/material';

export const UIAppLayoutWrapper = styled(Box)({
  width: '100%',
  minHeight: '100vh',
});

export const UIAuthLayoutWrapper = styled(Box)(({ theme }) => ({
  width: '100%',
  minHeight: '100vh',
  backgroundImage: `url(/images/login/bg.png)`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  scrollBehavior: 'smooth',
}));
