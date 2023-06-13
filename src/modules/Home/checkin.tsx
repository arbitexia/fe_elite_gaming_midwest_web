import { useRouter } from 'next/router';
import {
  UIFlexSpaceBox,
  UIDefaultTextField,
  UIContainer,
} from '@/components/UI';
import { Box } from '@mui/material';
import {
  StyledCheckInButton,
  StyledCheckInCard,
  StyledCheckInDescription,
  StyledCheckInTitle,
} from './ui';
import { useTranslation, useLanguageQuery } from 'next-export-i18n';

const CheckInContent = () => {
  const { t } = useTranslation();
  const [query] = useLanguageQuery();
  const router = useRouter();
  const handleVerify = () => {
    //TODO Send Phone number to be and fetch verification code
    router.push({
      pathname: '/auth',
      query: {
        ...(query.lang === 'es' && query),
        path: 'verify',
        type: 'login',
      },
    });
  };
  const handleSignUp = () => {
    router.push({
      pathname: '/auth',
      query: {
        ...(query.lang === 'es' && query),
        path: 'signup',
      },
    });
  };
  return (
    <UIContainer>
      <UIFlexSpaceBox
        sx={{
          width: '100%',
          height: '700px',
          p: '100px 165px',
        }}
      >
        <StyledCheckInCard sx={{ '*': { zIndex: 1 } }}>
          <Box>
            <StyledCheckInTitle>
              {t('index.check-your-point-balance')}
            </StyledCheckInTitle>
            <StyledCheckInDescription>
              {t('index.checkin-balance-desc')}
            </StyledCheckInDescription>
          </Box>
          <UIDefaultTextField
            sx={{ mt: '35px' }}
            placeholder={t('index.phone-number')}
          />
          <StyledCheckInButton onClick={handleVerify}>
            {t('index.view-points')}
          </StyledCheckInButton>
        </StyledCheckInCard>
        <StyledCheckInCard sx={{ '*': { zIndex: 1 } }}>
          <Box>
            <StyledCheckInTitle>{t('index.not-member-yet')}</StyledCheckInTitle>
            <StyledCheckInDescription>
              {t('index.not-member-yet-desc')}
            </StyledCheckInDescription>
          </Box>
          <StyledCheckInButton onClick={handleSignUp}>
            {t('index.signup-now')}
          </StyledCheckInButton>
        </StyledCheckInCard>
      </UIFlexSpaceBox>
    </UIContainer>
  );
};

export default CheckInContent;
