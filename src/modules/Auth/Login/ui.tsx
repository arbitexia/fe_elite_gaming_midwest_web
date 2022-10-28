import { Box, Button, Link, TextField, styled } from '@mui/material';

export const TextBox = styled(Box)(({ theme }) => ({
  color: '#fff',
  fontWeight: 700,
  fontSize: 20,
  textAlign: 'center',
  maxWidth: 400,
  width: '100%',
  marginTop: '40px',
}));

export const TextFieldWrapper = styled(TextField)(({ theme }) => ({
  input: {
    color: '#89C8C6',
  },
  background: 'rgba(137, 200, 198, 0.1)',
  border: '1px solid rgba(114, 239, 232, 0.2)',
  borderRadius: '8px',
  width: 350,
}));

export const LoginButton = styled(Button)(({ theme }) => ({
  background: 'linear-gradient(165.13deg, #37D099 -18.62%, #008A83 99.26%)',
  border: '1px solid rgba(137, 200, 198, 0.2)',
  borderRadius: '8px',
  width: 350,
  height: 44,
  color: 'white',
  marginTop: '30px',
}));

export const LinkText = styled(Link)(({ theme }) => ({
  fontSize: '13px',
  fontWeight: '600',
}));
