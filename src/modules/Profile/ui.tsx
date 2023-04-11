import { Typography, styled, Button, TextField } from '@mui/material';
import { UIDefaultTextField } from '@/components/UI';

export const StyledProfileLabel = styled(Typography)({
  height: '26px',
  fontWeight: '600',
  fontSize: '14px',
  lineHeight: '160%',
  color: '#6F918A',
  marginBottom: '46px',
});

export const StyledProfileValue = styled(Typography)({
  maxWidth: '260px',
  marginBottom: '20px',
  height: '52px',
  fontWeight: '500',
  fontSize: '16px',
  lineHeight: '160%',
  color: 'rgba(255, 255, 255, 0.9)',
});

export const StyledProfileButton = styled(Button)({
  position: 'absolute',
  right: '65px',
  top: '35px',
  fontWeight: '700',
  fontSize: '14px',
  lineHeight: '42px',
  letterSpacing: '0.1px',
  color: '#008A83',
  textTransform: 'none',
});

export const StyledProfileEditLabel = styled(Typography)({
  height: '52px',
  fontWeight: '600',
  fontSize: '14px',
  lineHeight: '48px',
  color: '#6F918A',
  marginBottom: '20px',
});

export const StyledProfileTextField = styled(UIDefaultTextField)({
  width: '260px',
  height: '48px',
  marginBottom: '24px',
  background: 'rgba(0, 0, 0, 0.25)',
  border: '1px solid rgba(82, 192, 199, 0.2)',
  borderRadius: '8px',
  '.MuiOutlinedInput-input': {
    fontWeight: '400',
    fontSize: '16px',
    lineHeight: '24px',
    color: '#83A9A8',
  },
  '.Mui-disabled': {
    WebkitTextFillColor: '#83A9A8 !important',
  },
});

export const StyledProfileTextArea = styled(TextField)({
  outline: 'none',
  resize: 'none',
  margin: 0,
  width: '260px',
  marginBottom: '6px',
  '& .MuiInputBase-root': {
    padding: '9px 14px',
    background: 'rgba(0, 0, 0, 0.25)',
    borderRadius: '8px',
  },
  '& .MuiOutlinedInput-root.Mui-focused': {
    '& > fieldset': {
      border: '1px solid rgba(82, 192, 199, 0.2)',
    },
  },
  fieldset: {
    border: '1px solid rgba(82, 192, 199, 0.2)',
  },
  textarea: {
    padding: 0,
    fontWeight: '400',
    fontSize: '16px',
    lineHeight: '24px',
    color: '#83A9A8',
  },
});
