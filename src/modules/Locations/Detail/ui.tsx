import { styled, Box } from '@mui/material';
import { UIFlexWrapBox } from '@/components/UI';

export const StyledLocationCardBox = styled(Box)({
  width: '100%',
  background: 'rgba(255, 255, 255, 0.05)',
  border: '2px solid rgba(137, 200, 198, 0.1)',
  backdropFilter: 'blur(20px)',
  borderRadius: '20px',
  padding: '50px',
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
});

export const StyledRewardCardBox = styled(UIFlexWrapBox)({
  width: '100%',
  height: '135px',
  background: 'rgba(255, 255, 255, 0.05)',
  border: '2px solid rgba(137, 200, 198, 0.1)',
  backdropFilter: 'blur(20px)',
  borderRadius: '12px',
  padding: '20px',
  gap: '20px',
  alignItems: 'center',
  flexWrap: 'nowrap',
});

export const StyledRewardImageBox = styled(Box)({
  position: 'relative',
  borderRadius: '20px',
  overflow: 'hidden',
  height: '95px',
  '&:after': {
    position: 'absolute',
    content: '""',
    height: '100%',
    width: '100%',
    top: 0,
    left: 0,
    background:
      'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(62, 190, 90, 0.5) 100%)',
  },
});
