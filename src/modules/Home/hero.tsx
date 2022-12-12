import { useRouter } from 'next/router';
import {
  UIFlexWrapBox,
  UIDefaultButton,
  UIFlexCenterBox,
  UIImage,
} from '@/components/UI';
import { Box, Typography } from '@mui/material';
import HeroCard from './HeroCard';
import { heroData } from '@/_mock/Home';
import { StyledHeroBg, StyledHeroTabletBg } from './ui';

const HeroContent = () => {
  const router = useRouter();
  const handleSignUp = () => {
    router.push('/auth?path=signup');
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
          Your Trusted Gaming <br />& Amusements Partner
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
          Today, our focus remains steadfast: to provide world-class service to
          help your business succeed.
        </Typography>
        <UIDefaultButton
          sx={{ mb: '170px', zIndex: '3' }}
          onClick={handleSignUp}
        >
          Sing up now
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
