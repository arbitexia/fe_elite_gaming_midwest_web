import { useState } from 'react';
import { useRouter } from 'next/router';
import { UIFlexCenterBox, UIFlexSpaceBox } from '@/components/UI';
import { Box } from '@mui/material';
import {
  StyledTextFieldWrapper,
  StyledAuthButton,
  StyledLinkText,
  StyledTextBox,
  StyledCheckBox,
} from '@/modules/Auth/ui';
import { AuthLogo } from '@/modules/Auth';
import { useFormik } from 'formik';
import { useAppToast } from '@/providers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { MobileDatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { Moment } from 'moment';
import { TextMaskCustom } from '../TextMask';
import { useAuth } from '@/hooks';

function AuthSignup() {
  const [checked, setChecked] = useState(false);
  const router = useRouter();
  const appToast = useAppToast();
  const { onRegister } = useAuth({
    handleAuthRegisterSuccess: () => {
      router.push('/auth?path=verify&type=signup');
    },
  });

  const formik = useFormik({
    initialValues: {
      phoneNumber: '',
      email: '',
      birthday: '',
    },
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: (values) => {
      if (handleFormikChange('phoneNumber', values.phoneNumber)) return;
      if (handleFormikChange('email', values.email)) return;
      if (handleFormikChange('birthday', values.birthday)) return;
      onRegister(
        values.phoneNumber.replace(/\D/g, ''),
        values.email,
        values.birthday
      );
    },
  });

  const handleFormikChange = (name: string, value: string) => {
    let error = '';
    if (name === 'phoneNumber') {
      const phoneRegExp = /^\([0-9]{3}\) [0-9]{3} [0-9]{4}$/i;
      if (!value) error = 'Phonenumber is required';
      else if (!value.match(phoneRegExp) || value.length < 10)
        error = 'Phonenumber is not valid';
    }
    if (name === 'email') {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
      if (!value) {
        error = 'Email is required';
      } else if (!regex.test(value)) {
        error = 'Invalid Email';
      }
    }
    if (name === 'birthday') {
      const regex =
        /^(0[1-9]|1[012])[-/.](0[1-9]|[12][0-9]|3[01])[-/.](19|20)\d\d$/i;
      if (!value) {
        error = 'Birthday is required';
      } else if (!regex.test(value)) {
        error = 'Invalid Birthday';
      }
    }
    if (error) appToast({ severity: 'error', message: error });
    return error;
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };
  return (
    <UIFlexSpaceBox
      sx={{ flexWrap: 'wrap', width: '100%', minHeight: '100vh', gap: 0 }}
    >
      <AuthLogo />
      <UIFlexCenterBox sx={{ width: '50%' }}>
        <Box
          sx={{ width: '360px' }}
          component="form"
          onSubmit={formik.handleSubmit}
        >
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
            <StyledTextFieldWrapper
              name="phoneNumber"
              placeholder="Phone Number"
              value={formik.values.phoneNumber}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                handleFormikChange('phoneNumber', e.target.value);
                formik.handleChange(e);
              }}
              InputProps={{
                inputComponent: TextMaskCustom as any,
              }}
            />
          </Box>
          <Box
            justifyContent={'center'}
            flexDirection="row"
            display={'flex'}
            mb={2}
          >
            <StyledTextFieldWrapper
              placeholder="Email"
              id="email"
              name="email"
              value={formik.values.email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                handleFormikChange('email', e.target.value);
                formik.handleChange(e);
              }}
            />
          </Box>
          <Box
            justifyContent={'center'}
            flexDirection="row"
            display={'flex'}
            mb={2}
          >
            <LocalizationProvider dateAdapter={AdapterMoment}>
              <MobileDatePicker
                inputFormat="MM/DD/YYYY"
                value={formik.values.birthday}
                onChange={(value: Moment | null) => {
                  handleFormikChange(
                    'birthday',
                    value ? value.format('MM/DD/YYYY') : ''
                  );
                  formik.setFieldValue(
                    'birthday',
                    value ? value.format('MM/DD/YYYY') : ''
                  );
                }}
                renderInput={(params) => {
                  return (
                    <StyledTextFieldWrapper
                      {...params}
                      placeholder="Birthday"
                    />
                  );
                }}
              />
            </LocalizationProvider>
          </Box>

          <UIFlexSpaceBox mt={4}>
            <StyledCheckBox
              checked={checked}
              onChange={handleChange}
              sx={{
                padding: 0,
                '.MuiSvgIcon-root': { fontSize: 30, color: '#008A83' },
              }}
            />
            <StyledTextBox>
              By submitting this form, I confirm that I am at least 21 years of
              age, accept the{' '}
              <StyledLinkText>Terms and Conditions.</StyledLinkText>
            </StyledTextBox>
          </UIFlexSpaceBox>
          <StyledAuthButton disabled={!checked} type="submit">
            Submit
          </StyledAuthButton>
        </Box>
      </UIFlexCenterBox>
    </UIFlexSpaceBox>
  );
}

export default AuthSignup;
