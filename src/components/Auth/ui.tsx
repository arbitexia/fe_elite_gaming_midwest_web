import { styled, Box } from '@mui/material';
export const UITextBox = styled(Box)(({ theme }) => ({
  color: theme.palette.common.white,
  fontWeight: 700,
  fontSize: 20,
  textAlign: 'center',
  maxWidth: 400,
  width: '100%',
  marginTop: '40px',
}));
