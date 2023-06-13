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
import { useTranslation } from 'next-export-i18n';

function AuthSignup() {
  const { t } = useTranslation();
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

  const handleFormikChange = (name: string, value: string, isBlur = false) => {
    let error = '';
    if (name === 'phoneNumber') {
      const phoneRegExp = /^\([0-9]{3}\) [0-9]{3} [0-9]{4}$/i;
      if (!value) error = t('error.phone-number-required');
      else if (!value.match(phoneRegExp) || value.length < 10)
        error = t('error.phone-number-valid');
    }
    if (name === 'email') {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
      if (!value) {
        error = t('error.email-required');
      } else if (!regex.test(value)) {
        error = t('error.invalid-email');
      }
    }
    if (name === 'birthday') {
      const regex =
        /^(0[1-9]|1[012])[-/.](0[1-9]|[12][0-9]|3[01])[-/.](19|20)\d\d$/i;
      if (!value) {
        error = t('error.birthday-required');
      } else if (!regex.test(value)) {
        error = t('error.invalid-birthday');
      }
    }
    if (error) appToast({ severity: 'error', message: error, isBlur });
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
            {t('common.signup')}
          </Box>
          <Box
            justifyContent={'center'}
            flexDirection="row"
            display={'flex'}
            mb={2}
          >
            <StyledTextFieldWrapper
              name="phoneNumber"
              placeholder={t('common.phone-number')}
              value={formik.values.phoneNumber}
              onBlur={(e) => {
                handleFormikChange('phoneNumber', e.target.value, true);
              }}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
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
              placeholder={t('common.email')}
              id="email"
              name="email"
              value={formik.values.email}
              onBlur={(e) => {
                handleFormikChange('phoneNumber', e.target.value, true);
              }}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
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
                      placeholder={t('common.birthday')}
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
              {t('signup.checkbox-desc')}{' '}
              <StyledLinkText>{t('signup.terms-and-condition')}</StyledLinkText>
            </StyledTextBox>
          </UIFlexSpaceBox>
          <StyledAuthButton disabled={!checked} type="submit">
            {t('signup.submit')}
          </StyledAuthButton>
        </Box>
      </UIFlexCenterBox>
    </UIFlexSpaceBox>
  );
}

export default AuthSignup;
