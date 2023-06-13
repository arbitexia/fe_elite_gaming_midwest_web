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
import { useSelectedLanguage, useTranslation } from 'next-export-i18n';

function AuthVerify() {
  const { t } = useTranslation();
  const { lang } = useSelectedLanguage();
  const router = useRouter();
  const appToast = useAppToast();
  const { type } = router.query;
  const { onVerifyPhone } = useAuth({
    handleAuthVerifySuccess: () => {
      router.push({
        pathname: '/points',
        query: {
          ...(lang === 'es' && { lang }),
        },
      });
    },
  });

  const handleFormikChange = (value: string) => {
    let error = '';
    const phoneRegExp = /^[0-9]{4}$/i;
    if (!value) error = t('error.verification-required');
    else if (!value.match(phoneRegExp) || value.length < 4)
      error = t('error.verification-valid');
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
    router.push({
      pathname: '/auth',
      query: {
        ...(lang === 'es' && { lang }),
        path: 'signup',
      },
    });
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
            {type === 'login' ? t('common.login') : t('common.signup')}
          </Box>
          <Box justifyContent={'center'} flexDirection="row" display={'flex'}>
            <StyledTextFieldWrapper
              name="token"
              value={formik.values.token}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                // handleFormikChange(e.target.value);
                formik.handleChange(e);
              }}
              placeholder={t('verify.placeholder-verify-phone')}
            />
          </Box>
          <StyledAuthButton type="submit">
            {t('verify.verify-code')}
          </StyledAuthButton>
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
            {t('verify.resend-code')}
          </Typography>
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

export default AuthVerify;
