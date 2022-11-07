import { UIDefaultTextField } from '@/components/UI';
import { styled, Box, Button, Typography, TextField } from '@mui/material';

export const StyledCheckInCard = styled(Box)({
  width: '540px',
  height: '500px',
  position: 'relative',
  overflow: 'hidden',
  padding: '75px 95px 65px 65px',
  background: 'rgba(16, 70, 61, 0.5)',
  borderRadius: '40px',
  zIndex: 0,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  '&:hover': {
    background:
      'radial-gradient(85% 105% at 30% -10%, #386056 0%, #06251F 100%)',
    ':before': {
      background:
        'radial-gradient(125% 105% at 10% -10%, #386056 0%, #06251F 100%)',
    },
    ':after': {
      background:
        'radial-gradient(125% 105% at 10% 0%, #386056 0%, #06251F 100%)',
    },
  },
  ':before': {
    content: '""',
    position: 'absolute',
    left: '-215px',
    bottom: '-150px',
    width: '430px',
    height: '430px',
    borderRadius: '50%',
    border: '1px solid rgba(100, 71, 165, 0.3)',
    zIndex: -1,
  },
  ':after': {
    content: '""',
    position: 'absolute',
    right: '-100px',
    top: '-90px',
    width: '240px',
    height: '240px',

    borderRadius: '50%',
    border: '1px solid rgba(100, 71, 165, 0.3)',
    zIndex: -1,
  },
});

export const StyledCheckInTitle = styled(Typography)({
  fontWeight: '600',
  fontSize: '44px',
  lineHeight: '54px',
  color: '#FFFFFF',
  maxWidth: '360px',
});

export const StyledCheckInDescription = styled(Typography)({
  marginTop: '30px',
  fontWeight: '400',
  fontSize: '14px',
  lineHeight: '28px',
  color: '#FFFFFF',
  maxWidth: '310px',
});

export const StyledCheckInButton = styled(Button)({
  marginTop: '33px',
  width: '140px',
  height: '44px',
  background:
    'radial-gradient(166.33% 97.17% at 85.18% 5.81%, rgba(0, 255, 148, 0.16) 0%, rgba(255, 255, 255, 0.002) 100%) , radial-gradient(97.73% 173.91% at -3.15% 77.15%, rgba(14, 71, 112, 0.2) 0%, rgba(24, 77, 89, 0.2) 23.15%, rgba(17, 54, 81, 0) 100%), #06514D',
  borderRadius: '8px',
  fontWeight: '600',
  fontSize: '14px',
  lineHeight: '20px',
  color: '#FFFFFF',
  textTransform: 'none',
});

export const StyledContactTextField = styled(UIDefaultTextField)({
  width: '445px',
  height: '44px',
  background: 'rgba(137, 200, 198, 0.1)',
  border: '1px solid rgba(137, 200, 198, 0.1)',
  borderRadius: '8px',
  '.MuiOutlinedInput-input': {
    fontWeight: '400',
    fontSize: '14px',
    lineHeight: '20px',
    color: 'rgba(255, 255, 255, 0.6)',
  },
});

export const StyledContactTextArea = styled(TextField)({
  outline: 'none',
  resize: 'none',
  margin: 0,
  width: '445px',
  '& .MuiInputBase-root': {
    padding: '9px 14px',
    background: 'rgba(137, 200, 198, 0.1)',
    borderRadius: '8px',
  },
  '& .MuiOutlinedInput-root.Mui-focused': {
    '& > fieldset': {
      border: '1px solid rgba(137, 200, 198, 0.1)',
    },
  },
  fieldset: {
    border: '1px solid rgba(137, 200, 198, 0.1)',
  },
  textarea: {
    padding: 0,
    fontWeight: '400',
    fontSize: '14px',
    lineHeight: '20px',
    color: 'rgba(255, 255, 255, 0.6)',
  },
});

export const StyledContactButton = styled(Button)({
  width: '160px',
  height: '44px',
  background: 'linear-gradient(165.13deg, #37D099 -18.62%, #008A83 99.26%)',
  borderRadius: '5px',
  fontWeight: '600',
  fontSize: '15px',
  lineHeight: '20px',
  color: '#FFFFFF',
});

export const StyledHeroBg = styled(Box)({
  flexDirection: 'column',
  position: 'relative',
  width: '100%',
  height: '870px',
  background: 'rgba(0,0,0,0.2)',
  ':before': {
    content: '""',
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    backgroundImage: 'url("/images/back.png")',
    backgroundSize: '100% 100%',
    opacity: '0.1',
    zIndex: '1',
  },
  ':after': {
    content: '""',
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    backgroundImage: 'url("/images/back-effect.gif")',
    backgroundSize: '100% 100%',
    opacity: '0.1',
    zIndex: '1',
  },
});

export const StyledHeroTabletBg = styled(Box)({
  height: '475px',
  background:
    'radial-gradient(166.33% 97.17% at 85.18% 5.81%, rgba(0, 255, 148, 0.16) 0%, rgba(255, 255, 255, 0.002) 100%), radial-gradient(97.73% 173.91% at -3.15% 77.15%, rgba(14, 71, 112, 0.2) 0%, rgba(24, 77, 89, 0.2) 23.15%, rgba(17, 54, 81, 0) 100%), #001817',
  opacity: '0.6',
  zIndex: '0',
  ':after': {
    content: '""',
    borderBottomLeftRadius: '50% 100%',
    borderBottomRightRadius: '50% 100%',
    background: 'black',
    position: 'absolute',
    left: '0',
    top: '0',
    width: '100%',
    height: '150px',
    zIndex: '0',
  },
  ':before': {
    content: '""',
    borderTopLeftRadius: '50% 100%',
    borderTopRightRadius: '50% 100%',
    background: 'black',
    position: 'absolute',
    left: '0',
    bottom: '0',
    width: '100%',
    height: '150px',
    zIndex: '0',
  },
});
