import { styled, Box } from '@mui/material';
import { UIDefaultTextField } from '@/components/UI';

export const StyledCardBox = styled(Box)({
  width: '260px',
  height: '460px',
  background: 'rgba(255, 255, 255, 0.05)',
  '&:hover': {
    background: 'rgba(255, 255, 255, 0.2)',
  },
  border: '2px solid rgba(137, 200, 198, 0.1)',
  backdropFilter: 'blur(20px)',
  borderRadius: '30px',
  padding: '20px',
});

export const StyledSearchTextField = styled(UIDefaultTextField)({
  width: '250px',
  height: '42px',
  background: 'rgba(137, 200, 198, 0.15)',
  border: '1px solid rgba(193, 191, 225, 0.05)',
  borderRadius: '8px',
  '.MuiOutlinedInput-input': {
    fontWeight: '500',
    fontSize: '14px',
    lineHeight: '21px',
    color: '#B7B7B7',
  },
});
