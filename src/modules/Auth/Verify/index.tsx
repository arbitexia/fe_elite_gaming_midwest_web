import { useRouter } from 'next/router';
import { UIFlexCenterBox, UIFlexSpaceBox } from '@/components/UI';
import { Box, Typography } from '@mui/material';
import {
  StyledTextFieldWrapper,
  StyledAuthButton,
  StyledLinkText,
} from '@/modules/Auth/ui';

import { AuthLogo } from '@/modules/Auth';

function AuthVerify() {
  const router = useRouter();
  const { type } = router.query;
  const handleVerify = () => {
    router.push('/profile');
  };
  const handleSignup = () => {
    router.push('/auth?path=signup');
  };
  const handleAdmin = () => {
    //TODO Redirect to Admin auth url
  };
  return (
    <UIFlexSpaceBox
      sx={{ flexWrap: 'wrap', width: '100%', minHeight: '100vh', gap: 0 }}
    >
      <AuthLogo />
      <UIFlexCenterBox sx={{ width: '50%' }}>
        <Box>
          <Box
            component={'h1'}
            textAlign="center"
            sx={{ color: '#D0E4E3', fontSize: '64px' }}
          >
            {type === 'login' ? 'Log in' : 'Sign up'}
          </Box>
          <Box justifyContent={'center'} flexDirection="row" display={'flex'}>
            <StyledTextFieldWrapper placeholder="Enter the code we sent to your phone number" />
          </Box>
          <StyledAuthButton onClick={handleVerify}>
            Verify Code
          </StyledAuthButton>
          <Typography
            sx={{
              marginTop: '15px',
              fontWeight: '600',
              fontSize: '14px',
              lineHeight: '21px',
              textAlign: 'center',
              color: '#008A83',
            }}
          >
            Reset Code
          </Typography>
          <UIFlexSpaceBox sx={{ marginTop: 8, width: 350, mx: 'auto' }}>
            <StyledLinkText sx={{ color: '#1bac8e' }} onClick={handleSignup}>
              + Create New Account
            </StyledLinkText>
            <StyledLinkText sx={{ color: '#B7B7B7' }} onClick={handleAdmin}>
              Login as Administrator
            </StyledLinkText>
          </UIFlexSpaceBox>
        </Box>
      </UIFlexCenterBox>
    </UIFlexSpaceBox>
  );
}

export default AuthVerify;
