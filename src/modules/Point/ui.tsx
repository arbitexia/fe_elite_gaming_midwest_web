import { styled, Button, Box, Typography } from '@mui/material';
import { UIFlexCenterBox } from '@/components/UI';

export const StyledPointMainBox = styled(Box)({
  position: 'relative',
  width: '50vw',
  height: 'calc(50vw / 615 * 390)',
  maxWidth: '615px',
  maxHeight: '390px',
  margin: '0',
  color: 'white',
  perspective: '1000px',
  transformOrigin: 'center',
});

export const StyledPointAnimBox = styled(Box)({
  position: 'absolute',
  width: '100%',
  height: '100%',
  transformOrigin: 'center',
  transformStyle: 'preserve-3d',
});

export const StyledSendButton = styled(Button)({
  background: 'linear-gradient(86.57deg, #1D8E7A 25.92%, #0EA59C 98.39%);',
  boxShadow: '0px 6.3px 8.19px rgba(0, 0, 0, 0.21)',
  borderRadius: '8px',
  width: '160px',
  height: '44px',
  fontWeight: '600',
  fontSize: '16px',
  lineHeight: '24px',
  color: '#FFFFFF',
});

export const StyledArrowButton = styled(Button)({
  position: 'absolute',
  top: 'calc(50% - 34px)',
  width: '68px',
  height: '68px',
});

export const StyledCardBox = styled(Box)({
  background: 'url(images/PointBack.png)',
  backgroundSize: 'cover',
  position: 'absolute',
  width: '50vw',
  height: 'calc(50vw / 615 * 390)',
  maxWidth: '615px',
  maxHeight: '390px',
  boxShadow: '0 5px 20px rgba(0,0,0,.1)',
  borderRadius: '6px',
  transformOrigin: 'center',
  transition: 'transform 1s, filter .5s ease-in-out',
});

export const StyledLocationBox = styled(UIFlexCenterBox)({
  position: 'absolute',
  background: 'rgba(114, 239, 232, 0.5)',
  boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
  backdropFilter: 'blur(10px)',
  width: '196px',
  height: '50px',
  borderRadius: '30px 0px 30px 0px',
  fontWeight: '500',
  fontSize: '16px',
  lineHeight: '24px',
  color: '#184D59',
  top: '6px',
  left: '8px',
});

export const StyledScoreText = styled(Typography)({
  fontWeight: '700',
  fontSize: '106px',
  lineHeight: '110%',
  textAlign: 'center',
  background: 'linear-gradient(166.49deg, #FFE600 9.69%, #88eb78 84.46%)',
  backgroundClip: 'text',
  textFillColor: 'transparent',
  textShadow: '0px 4px 30px rgba(23, 52, 51, 0.15)',
  WebkitTextStroke: '5px rgba(139, 127, 16, 0.7)',
  borderImageSource:
    'radial-gradient(68.72% 68.72% at 50% 38.27%, #fce502 0%, #88eb78 100%)',
});

export const StyledPointText = styled(Typography)({
  fontWeight: '700',
  fontSize: '64px',
  lineHeight: '110%',
  textAlign: 'center',
  background: 'linear-gradient(166.49deg, #4eecb1 9.69%, #00F0FF 84.46%)',
  backgroundClip: 'text',
  textFillColor: 'transparent',
  textShadow: '0px 4px 30px rgba(23, 52, 51, 0.15)',
  WebkitTextStroke: '5px rgba(139, 127, 16, 0.7)',
  borderImageSource:
    'radial-gradient(68.72% 68.72% at 50% 38.27%, #4eecb1 0%, #01efff 100%)',
});
