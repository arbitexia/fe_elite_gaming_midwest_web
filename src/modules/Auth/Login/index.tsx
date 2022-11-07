import React, { useEffect, useState } from 'react';
import { UIFlexCenterBox, UIFlexSpaceBox } from '@/components/UI';
import { Box } from '@mui/material';
import { useFormik } from 'formik';
import {
  UITextFieldWrapper,
  UIAuthButton,
  UILinkText,
} from '@/modules/Auth/ui';
import { AuthLogo, PhoneMask } from '@/components/Auth';
import { LoginSchema } from '@/utils/yupSchema';
import { useAppToast } from '@/providers';

function AuthLogin() {
  const showToast = useAppToast();
  const [errorMsg, setErrorMsg] = useState<string>('');
  const formik = useFormik({
    initialValues: {
      phoneNumber: '',
    },
    validationSchema: LoginSchema,
    onSubmit: async (values) => {},
  });
  useEffect(() => {
    if (errorMsg) {
      showToast({
        severity: 'error',
        message: errorMsg,
      });
    }
  }, [errorMsg]);

  useEffect(() => {
    if (formik.errors.phoneNumber) {
      setErrorMsg(formik?.errors.phoneNumber);
    }
  }, [formik]);

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
            <UITextFieldWrapper
              placeholder="Enter phone number"
              {...formik.getFieldProps('phoneNumber')}
              InputProps={{
                inputComponent: PhoneMask as any,
              }}
            />
          </Box>
          <UIAuthButton onClick={() => formik.handleSubmit()}>
            Log in
          </UIAuthButton>
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
