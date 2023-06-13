import { UIFlexSpaceBox, UIImage, UIContainer } from '@/components/UI';
import { Box, Typography, Button } from '@mui/material';
import { useTranslation } from 'next-export-i18n';

const LearnContent = () => {
  const { t } = useTranslation();
  return (
    <UIContainer>
      <UIFlexSpaceBox sx={{ width: '100%', height: '700px', p: '110px 165px' }}>
        <Box maxWidth="540px">
          <Typography
            sx={{
              fontWeight: '600',
              fontSize: '36px',
              lineHeight: '54px',
              color: '#FFFFFF',
            }}
          >
            {t('index.learn-title')}
          </Typography>
          <Typography
            sx={{
              mt: '40px',
              fontWeight: '400',
              fontSize: '18px',
              lineHeight: '30px',
              color: 'rgba(137, 200, 198, 0.8)',
            }}
          >
            {t('index.learn-desc')}
          </Typography>
          <Button
            sx={{
              mt: '50px',
              width: '255px',
              height: '68px',
              background: 'rgba(137, 200, 198, 0.2)',
              boxShadow: '0px 6.3px 8.19px rgba(0, 0, 0, 0.21)',
              borderRadius: '12px',
              fontWeight: '600',
              fontSize: '20px',
              lineHeight: '30px',
              color: '#89C8C6',

              WebkiWebkitTextStroke: '3px solid rgba(19, 90, 86, 0.56)',
            }}
          >
            {t('index.send-to-email')}
          </Button>
        </Box>
        <UIImage src={'images/learn.svg'} width={475} height={480} />
      </UIFlexSpaceBox>
    </UIContainer>
  );
};

export default LearnContent;
