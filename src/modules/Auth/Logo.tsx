import { UIFlexCenterBox, UIImage } from '@/components//UI';
import { useRouter } from 'next/router';
import { Box } from '@mui/material';
import { StyledLogoText } from './ui';
import { useTranslation, useLanguageQuery } from 'next-export-i18n';

const AuthLogo = () => {
  const { t } = useTranslation();
  const [query] = useLanguageQuery();
  const router = useRouter();

  const handleHome = () => {
    router.push({
      pathname: '/',
      query: {
        ...(query.lang === 'es' && { lang: query.lang }),
      },
    });
  };
  return (
    <UIFlexCenterBox flexDirection="column" width="50%">
      <Box onClick={handleHome} sx={{ cursor: 'pointer' }}>
        <UIImage src="images/icons/logo.svg" width={256} height={245} />
      </Box>
      <StyledLogoText>{t('common.logo-desc')}</StyledLogoText>
    </UIFlexCenterBox>
  );
};

export default AuthLogo;
