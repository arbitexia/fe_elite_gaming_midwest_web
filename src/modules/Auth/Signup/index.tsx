import React, { useEffect, useState } from 'react';
import { UIFlexSpaceBox } from '@/components/UI';
import { Box, SxProps } from '@mui/material';
import { useFormik } from 'formik';

import {
  UITextFieldWrapper,
  UIAuthButton,
  UILinkText,
  UITextBox,
  UICheckBox,
} from '@/modules/Auth/ui';

import { AuthLogo, PhoneMask } from '@/components/Auth';
import { SignupSchema } from '@/utils/yupSchema';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useAppToast } from '@/providers';
import { Dayjs } from 'dayjs';

const popperSx: SxProps = {
  '& .MuiPaper-root': {
    padding: 2,
    marginTop: 5,
    marginLeft: 6,
  },
  '& .MuiCalendarPicker-root': {},
  '& .PrivatePickersSlideTransition-root': {},
  '& .MuiPickersDay-dayWithMargin': {},
  '& .MuiTabs-root': {},
};

function AuthSignup() {
  const showToast = useAppToast();

  const [errorMsg, setErrorMsg] = useState<string>('');

  const formik = useFormik({
    initialValues: {
      phoneNumber: '',
      email: '',
      birthday: '',
      confirmAge: false,
    },
    validationSchema: SignupSchema,
    onSubmit: async (values) => {
      console.log(values);
    },
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
    } else if (formik.errors.email) {
      setErrorMsg(formik?.errors.email);
    } else if (formik.errors.birthday) {
      setErrorMsg(formik.errors.birthday);
    }
  }, [formik]);

  return (
    <UIFlexSpaceBox
      sx={{
        flexWrap: 'wrap',
        width: '100%',
        minHeight: '100vh',
      }}
      maxWidth="lg"
    >
      <AuthLogo />
      <Box sx={{ width: '100%', maxWidth: 360 }}>
        <Box
          component={'h1'}
          textAlign="center"
          sx={{ color: '#D0E4E3', fontSize: '64px' }}
        >
          Sign up
        </Box>
        <Box
          justifyContent={'center'}
          flexDirection="row"
          display={'flex'}
          mb={2}
        >
          <UITextFieldWrapper
            placeholder="Enter phone number"
            {...formik.getFieldProps('phoneNumber')}
            InputProps={{
              inputComponent: PhoneMask as any,
            }}
          />
        </Box>
        <Box
          justifyContent={'center'}
          flexDirection="row"
          display={'flex'}
          mb={2}
        >
          <UITextFieldWrapper
            placeholder="Email"
            {...formik.getFieldProps('email')}
            type="email"
          />
        </Box>

        <Box
          justifyContent={'center'}
          flexDirection="row"
          display={'flex'}
          mb={2}
        >
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <MobileDatePicker
              value={formik.values.birthday}
              onChange={(birth: Dayjs | null) => {
                formik.setFieldValue('birthday', birth);
              }}
              renderInput={(params) => (
                <UITextFieldWrapper {...params} placeholder="Birthday" />
              )}
            />
          </LocalizationProvider>
        </Box>

        <UIFlexSpaceBox mt={4} sx={{ alignItems: 'flex-start' }}>
          <UICheckBox
            checked={formik.values.confirmAge}
            onChange={() => {
              formik.setFieldValue('confirmAge', !formik.values.confirmAge);
            }}
            inputProps={{ 'aria-label': 'controlled' }}
          />
          <UITextBox>
            By submitting this form, I confirm that I am at least 21 years of
            age, accept the <UILinkText>Terms and Conditions.</UILinkText>
          </UITextBox>
        </UIFlexSpaceBox>

        <UIAuthButton
          onClick={() => formik.handleSubmit()}
          disabled={!formik.values.confirmAge}
        >
          Submit
        </UIAuthButton>
      </Box>
    </UIFlexSpaceBox>
  );
}

export default AuthSignup;
