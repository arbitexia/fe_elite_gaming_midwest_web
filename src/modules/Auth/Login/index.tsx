import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { UIFlexCenterBox, UIFlexSpaceBox } from '@/components/UI';
import { Box } from '@mui/material';
import {
  StyledTextFieldWrapper,
  StyledAuthButton,
  StyledLinkText,
} from '@/modules/Auth/ui';
import { useFormik } from 'formik';
import { AuthLogo } from '@/modules/Auth';
import { useAppToast } from '@/providers';
import { TextMaskCustom } from '../TextMask';
import { useAuth } from '@/hooks';
import { useTranslation, useLanguageQuery } from 'next-export-i18n';

function AuthLogin() {
  const { t } = useTranslation();
  const [query] = useLanguageQuery();

  const router = useRouter();
  const appToast = useAppToast();
  const handleSignup = () => {
    router.push({
      pathname: '/auth',
      query: {
        ...(query.lang === 'es' && query),
        path: 'signup',
      },
    });
  };
  const { onLogin } = useAuth({
    handleAuthUserSuccess: () => {
      router.push({
        pathname: '/auth',
        query: {
          ...(query.lang === 'es' && query),
          path: 'verify',
          type: 'login',
        },
      });
    },
  });

  const formik = useFormik({
    initialValues: {
      phoneNumber: '',
    },
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: async (values) => {
      if (handleFormikChange('phoneNumber', values.phoneNumber)) return;
      onLogin(values.phoneNumber.replace(/\D/g, ''));
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
    if (error) appToast({ severity: 'error', message: error, isBlur });
    return error;
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
            {t('common.login')}
          </Box>
          <Box justifyContent={'center'} flexDirection="row" display={'flex'}>
            <StyledTextFieldWrapper
              name="phoneNumber"
              placeholder={t('common.phone-number')}
              value={formik.values.phoneNumber}
              onBlur={(e) => {
                handleFormikChange('phoneNumber', e.target.value, true);
              }}
              onChange={(e) => {
                formik.handleChange(e);
              }}
              InputProps={{
                inputComponent: TextMaskCustom as any,
              }}
            />
          </Box>
          <StyledAuthButton type="submit">{t('common.login')}</StyledAuthButton>
          <UIFlexSpaceBox sx={{ marginTop: 8, minWidth: 350, mx: 'auto' }}>
            <StyledLinkText sx={{ color: '#1bac8e' }} onClick={handleSignup}>
              + {t('login.create-new-account')}
            </StyledLinkText>
            <Link href="https://admin.elitegaming.rpatdev.com" passHref={true}>
              <StyledLinkText sx={{ color: '#B7B7B7' }}>
                {t('login.login-as-administrator')}
              </StyledLinkText>
            </Link>
          </UIFlexSpaceBox>
        </Box>
      </UIFlexCenterBox>
    </UIFlexSpaceBox>
  );
}

export default AuthLogin;
