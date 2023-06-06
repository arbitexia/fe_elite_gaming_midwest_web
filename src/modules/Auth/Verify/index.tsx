import { useRouter } from 'next/router';
import Link from 'next/link';
import { UIFlexCenterBox, UIFlexSpaceBox } from '@/components/UI';
import { Box, Typography } from '@mui/material';
import {
  StyledTextFieldWrapper,
  StyledAuthButton,
  StyledLinkText,
} from '@/modules/Auth/ui';

import { AuthLogo } from '@/modules/Auth';
import { useAuth } from '@/hooks';
import { useFormik } from 'formik';
import { useAppToast } from '@/providers';

function AuthVerify() {
  const router = useRouter();
  const appToast = useAppToast();
  const { type } = router.query;
  const { onVerifyPhone } = useAuth({
    handleAuthVerifySuccess: () => {
      router.push('/points');
    },
  });

  const handleFormikChange = (value: string) => {
    let error = '';
    const phoneRegExp = /^[0-9]{4}$/i;
    if (!value) error = 'Verification Code is required';
    else if (!value.match(phoneRegExp) || value.length < 4)
      error = 'Verification Code is not valid';
    if (error) appToast({ severity: 'error', message: error });
    return error;
  };

  const formik = useFormik({
    initialValues: {
      token: '',
    },
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: (values) => {
      if (handleFormikChange(values.token)) return;
      onVerifyPhone(values.token);
    },
  });

  const handleSignup = () => {
    router.push('/auth?path=signup');
  };

  return (
    <UIFlexSpaceBox
      sx={{ flexWrap: 'wrap', width: '100%', minHeight: '100vh', gap: 0 }}
    >
      <AuthLogo />
      <UIFlexCenterBox sx={{ width: '50%' }}>
        <Box component="form" onSubmit={formik.handleSubmit}>
          <Box
            component={'h1'}
            textAlign="center"
            sx={{ color: '#D0E4E3', fontSize: '64px' }}
          >
            {type === 'login' ? 'Log in' : 'Sign up'}
          </Box>
          <Box justifyContent={'center'} flexDirection="row" display={'flex'}>
            <StyledTextFieldWrapper
              name="token"
              value={formik.values.token}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                // handleFormikChange(e.target.value);
                formik.handleChange(e);
              }}
              placeholder="Enter the code we sent to your phone number"
            />
          </Box>
          <StyledAuthButton type="submit">Verify Code</StyledAuthButton>
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
            Resend Code
          </Typography>
          <UIFlexSpaceBox sx={{ marginTop: 8, width: 350, mx: 'auto' }}>
            <StyledLinkText sx={{ color: '#1bac8e' }} onClick={handleSignup}>
              + Create New Account
            </StyledLinkText>
            <Link href="https://admin.elitegaming.rpatdev.com" passHref={true}>
              <StyledLinkText sx={{ color: '#B7B7B7' }}>
                Login as Administrator
              </StyledLinkText>
            </Link>
          </UIFlexSpaceBox>
        </Box>
      </UIFlexCenterBox>
    </UIFlexSpaceBox>
  );
}

export default AuthVerify;
