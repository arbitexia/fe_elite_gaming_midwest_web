import { UIFlexCenterBox, UIFlexSpaceBox } from '@/components/UI';
import { Box } from '@mui/material';
import {
  UITextFieldWrapper,
  UIAuthButton,
  UILinkText,
} from '@/modules/Auth/ui';
import { AuthLogo } from '@/components/Auth';

function AuthLogin() {
  return (
    <UIFlexSpaceBox
      sx={{ flexWrap: 'wrap', width: '100%', minHeight: '100vh' }}
      maxWidth="lg"
    >
      <AuthLogo />
      <UIFlexCenterBox>
        <Box>
          <Box
            component={'h1'}
            textAlign="center"
            sx={{ color: '#D0E4E3', fontSize: '64px' }}
          >
            Log in
          </Box>
          <Box justifyContent={'center'} flexDirection="row" display={'flex'}>
            <UITextFieldWrapper placeholder="Enter phone number" />
          </Box>
          <UIAuthButton>Log in</UIAuthButton>
          <UIFlexSpaceBox sx={{ marginTop: 8, width: 350, mx: 'auto' }}>
            <UILinkText sx={{ color: '#1bac8e' }} href="/auth?path=signup">
              + Create New Account
            </UILinkText>
            <UILinkText sx={{ color: '#B7B7B7' }}>
              Login as Administrator
            </UILinkText>
          </UIFlexSpaceBox>
        </Box>
      </UIFlexCenterBox>
    </UIFlexSpaceBox>
  );
}

export default AuthLogin;
