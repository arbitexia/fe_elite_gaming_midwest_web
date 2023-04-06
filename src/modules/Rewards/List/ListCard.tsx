import { useRouter } from 'next/router';
import { UIFlexWrapBox, UIHoverButton } from '@/components/UI';
import { Box, Typography } from '@mui/material';
import { RewardType } from '@/types';
import { RewardsCardProgress } from '../cardProgress';
import { RewardsCardPoint } from '../cardPoint';
import { StyledRewardsCardPoint } from '../ui';

export type RewardsCardProps = {
  point: number;
  item: RewardType.Data;
};

export const RewardsCard = ({ point, item }: RewardsCardProps) => {
  const router = useRouter();
  const { product, location } = item;
  return (
    <UIFlexWrapBox
      sx={{
        width: '260px',
        height: '460px',
        background: 'rgba(255, 255, 255, 0.05)',
        '&:hover': {
          background: 'rgba(255, 255, 255, 0.2)',
        },
        border: '2px solid rgba(137, 200, 198, 0.1)',
        backdropFilter: 'blur(20px)',
        borderRadius: '30px',
        padding: '20px 20px 25px 20px',
        gap: 0,
      }}
    >
      <Box sx={{ position: 'relative' }}>
        <Box
          component="img"
          sx={{
            width: '220px',
            height: '235px',
            objectFit: 'cover',
          }}
          src={
            product?.gallery?.[0]?.asset?.url
              ? `${product?.gallery?.[0]?.asset?.url}`
              : 'images/noImage.jpg'
          }
          alt="image"
        />
        <Typography
          sx={{
            position: 'absolute',
            bottom: '38px',
            left: '15px',
            fontWeight: '600',
            fontSize: '22px',
            lineHeight: '33px',
            color: '#FFFFFF',
          }}
        >
          {product?.name}
        </Typography>
        <Typography
          sx={{
            position: 'absolute',
            left: '15px',
            bottom: '20px',
            fontWeight: '500',
            fontSize: '14px',
            lineHeight: '21px',
            color: 'rgba(255, 255, 255, 0.57)',
          }}
        >
          {location?.name}
        </Typography>
      </Box>
      <RewardsCardProgress myPoint={point} itemPoint={product?.point} />
      <RewardsCardPoint itemPoint={product?.point} />
      <StyledRewardsCardPoint>
        Points Completion:{' '}
        <span>
          {point}/{product?.point}
        </span>
      </StyledRewardsCardPoint>
      <UIHoverButton
        disabled={point < product.point ? true : false}
        sx={{ mt: '30px', width: '220px', height: '42px' }}
        onClick={() => router.push(`/rewards/${item.id}`)}
      >
        {point < product.point ? 'Replenish' : 'Exchange Offer'}
      </UIHoverButton>
    </UIFlexWrapBox>
  );
};
