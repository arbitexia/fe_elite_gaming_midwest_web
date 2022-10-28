import {
  UIFlexCenterBox,
  UIFlexColumnBox,
  UIFlexSpaceBox,
  UIImage,
} from '@/components/UI';
import { Box } from '@mui/material';
import {
  TextBox,
  TextFieldWrapper,
  LoginButton,
  LinkText,
} from './index.styles';

function AuthLogin() {
  return (
    <UIFlexSpaceBox sx={{ alignItems: 'center', width: '100%' }} maxWidth="lg">
      <UIFlexColumnBox>
        <UIImage src="images/icons/logo.svg" width={256} height={245} />
        <TextBox>
          Maximizing Your Revenue by Providing the Most Detailed Reporting
        </TextBox>
      </UIFlexColumnBox>
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
            <TextFieldWrapper placeholder="Enter phone number" />
          </Box>
          <LoginButton>Log in</LoginButton>
          <UIFlexSpaceBox sx={{ marginTop: '100px', width: 350, mx: 'auto' }}>
            <LinkText sx={{ color: '#1bac8e' }}>+ Create New Account</LinkText>
            <LinkText sx={{ color: '#B7B7B7' }}>
              Login as Administrator
            </LinkText>
          </UIFlexSpaceBox>
        </Box>
      </UIFlexCenterBox>
    </UIFlexSpaceBox>
  );
}

export default AuthLogin;
