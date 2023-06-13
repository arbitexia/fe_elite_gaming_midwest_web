import { UIFlexWrapBox, UIImage } from '@/components/UI';
import { Divider, Typography } from '@mui/material';
import { useTranslation } from 'next-export-i18n';

export const ProfileHeader = () => {
  const { t } = useTranslation();
  return (
    <>
      <UIFlexWrapBox sx={{ mt: '35px', alignItems: 'center', gap: '12px' }}>
        <UIImage src="images/icons/user.svg" width={17} height={19} />
        <Typography
          sx={{
            fontWeight: '600',
            fontSize: '36px',
            lineHeight: '54px',
            alignItems: 'center',
            color: '#89C8C6',
          }}
        >
          {t('common.my-profile')}
        </Typography>
      </UIFlexWrapBox>
      <Divider
        sx={{
          mt: '20px',
          borderColor: 'rgba(137, 200, 198, 0.5)',
        }}
      />
    </>
  );
};
