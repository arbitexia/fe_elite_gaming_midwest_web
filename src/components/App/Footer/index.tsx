import { Box, Typography } from '@mui/material';
import {
  UIContainer,
  UIFlexSpaceBox,
  UIFlexWrapBox,
  UIImage,
} from '@/components/UI';
import FooterLink from './Link';
import { StyledSocialButton } from './ui';
import { useTranslation } from 'next-export-i18n';

const AppFooter = () => {
  const { t } = useTranslation();
  return (
    <Box
      sx={{
        width: '100%',
        height: '360px',
        position: 'relative',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          left: 0,
          top: 0,
          height: '300px',
          width: '100%',
          background: '#041613',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          left: 0,
          top: 0,
          width: '100%',
          height: '100%',
          opacity: 0.3,
          background: 'url("/images/back-effect.gif")',
          backgroundSize: '100% 100%',
          backgroundRepeat: 'no-repeat',
          zIndex: 0,
        }}
      />
      <UIContainer sx={{ py: 0, zIndex: 1, position: 'relative' }}>
        <UIFlexSpaceBox
          sx={{
            width: '100%',
            height: '300px',
            px: '165px',
            gap: 0,
            alignItems: 'none',
          }}
        >
          <Box>
            <UIImage src="images/icons/logo.svg" width={55} height={55} />
            <Typography
              sx={{
                marginTop: '25px',
                fontWeight: '400',
                fontSize: '14px',
                lineHeight: '28px',
                color: 'rgba(137, 200, 198, 0.8)',
              }}
            >
              {t('footer.desc1')}
              <br />
              {t('footer.desc2')}
              <br />
              {t('footer.desc3')}
            </Typography>
          </Box>
          <UIFlexWrapBox sx={{ gap: '130px' }}>
            <Box>
              <Typography
                sx={{
                  fontWeight: '600',
                  fontSize: '16px',
                  lineHeight: '32px',
                  color: '#FFFFFF',
                }}
              >
                {t('footer.menu')}
              </Typography>
              <FooterLink label={t('footer.locations')} href="/profile" />
              <FooterLink label={t('footer.gaming')} href="/game" />
              <FooterLink label={t('footer.news')} href="/news" />
            </Box>
            <Box>
              <Typography
                sx={{
                  fontWeight: '600',
                  fontSize: '16px',
                  lineHeight: '32px',
                  color: '#FFFFFF',
                }}
              >
                {t('footer.contact')}
              </Typography>
              <Typography
                sx={{
                  fontWeight: '400',
                  fontSize: '14px',
                  lineHeight: '38px',
                  color: 'rgba(137, 200, 198, 0.5)',
                }}
              >
                elitegaming@elit <br /> Peris St.5, NYS, USA
              </Typography>
              <UIFlexWrapBox sx={{ gap: '20px', mt: '20px' }}>
                <StyledSocialButton>
                  <UIImage
                    src="images/icons/twitter.svg"
                    width={19}
                    height={15}
                  />
                </StyledSocialButton>
                <StyledSocialButton>
                  <UIImage
                    src="images/icons/linkedin.svg"
                    width={19}
                    height={15}
                  />
                </StyledSocialButton>
                <StyledSocialButton>
                  <UIImage
                    src="images/icons/reddit.svg"
                    width={19}
                    height={15}
                  />
                </StyledSocialButton>
              </UIFlexWrapBox>
            </Box>
          </UIFlexWrapBox>
        </UIFlexSpaceBox>
        <UIFlexWrapBox
          sx={{ alignItems: 'center', px: '165px', height: '60px' }}
        >
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: '14px',
              lineHeight: '28px',
              color: '#9E9E9E',
            }}
          >
            All Rights Reservd Elite Gaming 2022 | Privacy Policy | Terms of Use
          </Typography>
        </UIFlexWrapBox>
      </UIContainer>
    </Box>
  );
};

export default AppFooter;
