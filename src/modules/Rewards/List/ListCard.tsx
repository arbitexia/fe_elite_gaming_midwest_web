import { useRouter } from 'next/router';
import { UIFlexWrapBox, UIHoverButton } from '@/components/UI';
import { Box, Typography } from '@mui/material';
import { RewardType } from '@/types';
import { RewardsCardProgress } from '../cardProgress';
import { RewardsCardPoint } from '../cardPoint';
import { StyledRewardsCardCoupon, StyledRewardsCardPoint } from '../ui';
import { Redeem } from '@mui/icons-material';

export type RewardsCardProps = {
  userCoupon: number;
  userPoint: number;
  item: RewardType.Data;
};

export const RewardsCard = ({
  userPoint,
  userCoupon,
  item,
}: RewardsCardProps) => {
  const router = useRouter();
  const { product, location } = item;
  return (
    <UIFlexWrapBox
      sx={{
        width: '260px',
        height: '470px',
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
      <RewardsCardProgress myPoint={userPoint} itemPoint={item?.point ?? 0} />
      <RewardsCardPoint itemPoint={item?.point ?? 0} />
      <StyledRewardsCardPoint>
        Points Completion:{' '}
        <span>
          {userPoint}/{item?.point ?? 0}
        </span>
      </StyledRewardsCardPoint>
      {item?.coupon && (
        <UIFlexWrapBox sx={{ alignItems: 'center', mt: '12px' }}>
          <Redeem
            style={{ fontSize: '16px', color: 'rgba(137, 200, 198, 0.8)' }}
          />
          <StyledRewardsCardCoupon>
            {item?.coupon} Coupons
          </StyledRewardsCardCoupon>
        </UIFlexWrapBox>
      )}
      <UIHoverButton
        disabled={
          userPoint >= (item?.point ?? 0) || userCoupon >= (item?.coupon ?? 0)
            ? false
            : true
        }
        sx={{ mt: '8px', width: '220px', height: '42px' }}
        onClick={() => router.push(`/rewards/${item.id}`)}
      >
        {userPoint >= (item?.point ?? 0) || userCoupon >= (item?.coupon ?? 0)
          ? 'Exchange Offer'
          : 'Replenish'}
      </UIHoverButton>
    </UIFlexWrapBox>
  );
};
