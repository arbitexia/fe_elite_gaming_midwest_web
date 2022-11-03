import { styled, Container } from '@mui/material';

export const UIContentWrapper = styled(Container)(({ theme }) => ({
  padding: theme.spacing(2, 6),
  gap: theme.spacing(3),
  width: '100%',
}));

export const UIAuthContentWrapper = styled(Container)(({ theme }) => ({
  padding: theme.spacing(0, 6),
  gap: theme.spacing(3),
  width: '100%',
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(6, 6),
  },
}));
