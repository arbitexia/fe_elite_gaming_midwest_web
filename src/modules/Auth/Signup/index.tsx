import React, { useState } from 'react';
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
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

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
  const formik = useFormik({
    initialValues: {
      phoneNumber: '',
      email: '',
      birthday: '',
      confirmAge: false,
    },
    validationSchema: SignupSchema,
    onSubmit: async (values) => {},
  });

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
        {formik.touched.phoneNumber && formik.errors.phoneNumber && (
          <Box component={'p'} sx={{ color: 'red', fontSize: '12px' }}>
            *{formik.errors.phoneNumber}
          </Box>
        )}
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
        {formik.touched.email && formik.errors.email && (
          <Box component={'p'} sx={{ color: 'red', fontSize: '12px' }}>
            *{formik.errors.email}
          </Box>
        )}
        <Box
          justifyContent={'center'}
          flexDirection="row"
          display={'flex'}
          mb={2}
        >
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              value={formik.values.birthday}
              onChange={(birth) => {
                formik.setFieldValue('birthday', birth);
              }}
              inputFormat="MM/DD/YYYY"
              renderInput={(params) => <UITextFieldWrapper {...params} />}
              InputProps={{
                sx: {
                  '& .MuiSvgIcon-root': { color: '#89C8C6' },
                },
              }}
              PopperProps={{
                sx: popperSx,
              }}
            />
          </LocalizationProvider>
        </Box>
        {formik.touched.birthday && formik.errors.birthday && (
          <Box component={'p'} sx={{ color: 'red', fontSize: '12px' }}>
            *{formik.errors.birthday}
          </Box>
        )}

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
        <UIAuthButton onClick={() => formik.handleSubmit()}>
          Submit
        </UIAuthButton>
      </Box>
    </UIFlexSpaceBox>
  );
}

export default AuthSignup;
