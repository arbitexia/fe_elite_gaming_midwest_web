import { useRouter } from 'next/router';
import { UIFlexCenterBox, UIFlexSpaceBox } from '@/components/UI';
import { Box } from '@mui/material';
import {
  StyledTextFieldWrapper,
  StyledAuthButton,
  StyledLinkText,
} from '@/modules/Auth/ui';

import { AuthLogo } from '@/modules/Auth';

function AuthLogin() {
  const router = useRouter();
  const handleLogin = () => {
    //TODO Send phone number to be and fetch verification code
    router.push('/auth?path=verify&type=login');
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
            Log in
          </Box>
          <Box justifyContent={'center'} flexDirection="row" display={'flex'}>
            <StyledTextFieldWrapper placeholder="Enter phone number" />
          </Box>
          <StyledAuthButton onClick={handleLogin}>Log in</StyledAuthButton>
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

export default AuthLogin;
