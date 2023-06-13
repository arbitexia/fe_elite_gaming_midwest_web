import { useRouter } from 'next/router';
import {
  UIFlexWrapBox,
  UIDefaultButton,
  UIFlexCenterBox,
  UIImage,
} from '@/components/UI';
import { Box, Typography } from '@mui/material';
import HeroCard from './heroCard';
import { heroData } from '@/constants';
import { StyledHeroBg, StyledHeroTabletBg } from './ui';
import { useTranslation, useLanguageQuery } from 'next-export-i18n';

const HeroContent = () => {
  const { t } = useTranslation();
  const [query] = useLanguageQuery();
  const router = useRouter();
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
    <Box
      sx={{
        width: '100%',
      }}
    >
      <Box sx={{ position: 'absolute', left: 0, top: 0, width: '100%' }}>
        <StyledHeroBg />
      </Box>
      <UIFlexCenterBox
        sx={{
          flexDirection: 'column',
          width: '100%',
        }}
      >
        <Typography
          sx={{
            mt: '120px',
            fontWeight: '600',
            fontSize: '64px',
            lineHeight: '80px',
            color: '#D0E4E3',
            textAlign: 'center',
            WebkitTextStroke: '5px rgba(137, 200, 198, 0.1)',
            maxWidth: '790px',
            zIndex: '3',
          }}
        >
          {t('index.hero-title1')} <br /> {t('index.hero-title2')}
        </Typography>
        <Typography
          sx={{
            mt: '30px',
            mb: '65px',
            fontWeight: '400',
            fontSize: '18px',
            lineHeight: '170%',
            textAlign: 'center',
            color: '#89C8C6',
            maxWidth: '537px',
            zIndex: '3',
          }}
        >
          {t('index.hero-desc')}
        </Typography>
        <UIDefaultButton
          sx={{ mb: '170px', zIndex: '3' }}
          onClick={handleSignUp}
        >
          {t('index.signup-now')}
        </UIDefaultButton>
      </UIFlexCenterBox>
      <Box sx={{ position: 'relative' }}>
        <StyledHeroTabletBg />
        <Box
          sx={{
            position: 'absolute',
            bottom: '30px',
            left: '50%',
            transform: 'translate(-50%, 0)',
            zIndex: '3',
          }}
        >
          <UIImage src={'images/tablet.png'} width={653} height={500} />
        </Box>
      </Box>
      <UIFlexWrapBox
        sx={{
          gap: '30px',
          justifyContent: 'center',
          alignItems: 'center',
          height: '800px',
        }}
      >
        {heroData.map((item, index) => {
          return <HeroCard key={index} data={item} />;
        })}
      </UIFlexWrapBox>
    </Box>
  );
};

export default HeroContent;
