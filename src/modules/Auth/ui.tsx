import { Box, Button, Link, TextField, Checkbox, styled } from '@mui/material';

export const UITextBox = styled(Box)(({ theme }) => ({
  color: '#949BA1',
  fontWeight: 400,
  fontSize: 13,
}));

export const UITextFieldWrapper = styled(TextField)(({ theme }) => ({
  input: {
    color: '#89C8C6',
  },
  background: 'rgba(137, 200, 198, 0.1)',
  border: '1px solid rgba(114, 239, 232, 0.2)',
  borderColor: 'rgba(114, 239, 232, 0.2)',
  borderRadius: '8px',
  width: '100%',
  '& .MuiOutlinedInput-root': {
    '& > fieldset': {
      border: 'none',
    },
  },
  '& .MuiOutlinedInput-root:hover': {
    '& > fieldset': {
      border: 'none',
    },
  },
}));

export const UIAuthButton = styled(Button)(({ theme }) => ({
  background: 'linear-gradient(165.13deg, #37D099 -18.62%, #008A83 99.26%)',
  border: '1px solid rgba(137, 200, 198, 0.2)',
  borderRadius: '8px',
  width: '100%',
  height: 44,
  color: 'white',
  marginTop: '30px',
}));

export const UILinkText = styled(Link)(({ theme }) => ({
  fontSize: '13px',
  fontWeight: '600',
  color: '#008A83',
}));

export const UICheckBox = styled(Checkbox)(({ theme }) => ({
  color: 'rgba(137, 200, 198, 0.2)',
  '& .MuiSvgIcon-root': { fontSize: 20, borderRadius: 20 },
  '&.Mui-checked': {
    color: '#89C8C6',
  },
  padding: 0,
}));
