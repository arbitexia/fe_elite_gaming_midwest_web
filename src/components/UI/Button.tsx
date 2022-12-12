import { styled, Button } from '@mui/material';

// type UINavButtonProp = {
//   btnType: string;
// };

export const UIDefaultButton = styled(Button)({
  width: '260px',
  height: '68px',
  background: 'linear-gradient(165.13deg, #37D099 -18.62%, #008A83 99.26%)',
  boxShadow: '0px 6.3px 8.19px rgba(0, 0, 0, 0.21)',
  borderRadius: '12px',
  fontWeight: '600',
  fontSize: '20px',
  lineHeight: '30px',
  textTransform: 'none',
  color: '#FFFFFF',
});

export const UIHoverButton = styled(Button)({
  background: 'rgba(137, 200, 198, 0.2)',
  color: '#83A9A8',
  border: '1px solid rgba(191, 215, 225, 0.05)',
  borderRadius: '20px',
  fontWeight: '500',
  fontSize: '16px',
  lineHeight: '24px',
  textTransform: 'none',
  '&:hover': {
    color: '#FFFFFF',
    background: 'linear-gradient(165.13deg, #37D099 -18.62%, #008A83 99.26%)',
  },
  '&:disabled': {
    color: '#83A9A8',
    background: 'rgba(137, 200, 198, 0.2)',
  },
});

// export const UINavButton = styled(Button)<UINavButtonProp>(({ btnType }) => ({
//   background:
//     btnType === 'Signup'
//       ? 'radial-gradient(300.75% 955.63% at 85.18% 5.81%, rgba(0, 255, 148, 0.16) 0%, rgba(255, 255, 255, 0.002) 100%), radial-gradient(97.65% 173.77% at -3.15% 77.15%, rgba(14, 71, 112, 0.2) 0%, rgba(24, 77, 89, 0.2) 23.15%, rgba(17, 54, 81, 0) 100%), #001817'
//       : btnType === 'Login'
//       ? 'rgba(191, 215, 225, 0.05)'
//       : 'transparent',
//   border:
//     btnType === 'Signup'
//       ? '1px solid rgba(191, 215, 225, 0.05)'
//       : btnType === 'Login'
//       ? '1px solid rgba(137, 200, 198, 0.2)'
//       : 'transparent',
//   borderRadius: '8px',
//   width: '100px',
//   height: '42px',
//   fontWeight: '500',
//   fontSize: '14px',
//   lineHeight: '21px',
//   color: '#FFFFFF',
// }));
