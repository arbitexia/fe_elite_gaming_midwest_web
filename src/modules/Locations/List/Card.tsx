import { useRouter } from 'next/router';
import { UIHoverButton } from '@/components/UI';
import { Box, Typography } from '@mui/material';
import { LocationType } from '@/types';
import { StyledCardBox } from './ui';
import { useSelectedLanguage, useTranslation } from 'next-export-i18n';

export type LocationsCardProps = {
  item: LocationType;
};

export const LocationsCard = ({ item }: LocationsCardProps) => {
  const { t } = useTranslation();
  const { lang } = useSelectedLanguage();

  const router = useRouter();
  return (
    <StyledCardBox>
      <Box
        component="img"
        src={
          item.gallery && item.gallery.length > 0
            ? item.gallery[0].asset?.url
            : '/images/noImage.jpg'
        }
        width={220}
        height={235}
      />
      <Typography
        sx={{
          mt: '30px',
          fontWeight: '600',
          fontSize: '18px',
          lineHeight: '22px',
          color: '#FFFFFF',
        }}
      >
        {item.name}
      </Typography>
      <Typography
        sx={{
          mt: '15px',
          fontWeight: '600',
          fontSize: '12px',
          lineHeight: '16px',
          color: 'rgba(137, 200, 198, 0.8)',
        }}
      >
        {t('common.location')}:
      </Typography>
      <Typography
        sx={{
          fontWeight: '600',
          fontSize: '12px',
          lineHeight: '16px',
          color: 'rgba(255, 255, 255, 0.6)',
        }}
      >
        {`${item.address?.address1 ?? ''} ${item.address?.address2 ?? ''} ${
          item.address?.city ?? ''
        } ${item.address?.state ?? ''} ${item.address?.zipcode ?? ''}`}
      </Typography>
      <UIHoverButton
        onClick={() => {
          router.push({
            pathname: `/locations/${item.id}`,
            query: {
              ...(lang === 'es' && { lang }),
            },
          });
        }}
        sx={{
          marginTop: '30px',
          width: '220px',
          height: '42px',
        }}
      >
        {t('common.view-more')}
      </UIHoverButton>
    </StyledCardBox>
  );
};
