import { useRouter } from 'next/router';
import { UIImage, UIHoverButton } from '@/components/UI';
import { Typography } from '@mui/material';
import { LocationType } from '@/types';
import { StyledCardBox } from './ui';

export type LocationsCardProps = {
  item: LocationType;
};

export const LocationsCard = ({ item }: LocationsCardProps) => {
  const router = useRouter();
  return (
    <StyledCardBox>
      <UIImage src={item.urls[0]} width={220} height={235} />
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
        Location:
      </Typography>
      <Typography
        sx={{
          fontWeight: '600',
          fontSize: '12px',
          lineHeight: '16px',
          color: 'rgba(255, 255, 255, 0.6)',
        }}
      >
        {item.location}
      </Typography>
      <UIHoverButton
        onClick={() => router.push(`/locations/${item.id}`)}
        sx={{
          marginTop: '30px',
          width: '220px',
          height: '42px',
        }}
      >
        View more
      </UIHoverButton>
    </StyledCardBox>
  );
};
