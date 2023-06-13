import { RewardsCardProgress } from '../cardProgress';
import { RewardsCardPoint } from '../cardPoint';
import { RewardType } from '@/types';
import {
  StyledRewardsName,
  StyledRewardsLocation,
  StyledRewardsCardPoint,
  StyledRewardsSpecKey,
} from '../ui';
import { UIFlexWrapBox } from '@/components/UI';
import { Typography } from '@mui/material';
import { Redeem } from '@mui/icons-material';
import { useTranslation } from 'next-export-i18n';

export type RewardsInfoBoxProps = {
  userPoint: number;
  rewardItem: RewardType.Data;
};

export const RewardsInfoBox = ({
  userPoint,
  rewardItem,
}: RewardsInfoBoxProps) => {
  const { t } = useTranslation();
  const { location, product } = rewardItem;
  return (
    <>
      <StyledRewardsName>{product?.name}</StyledRewardsName>
      <StyledRewardsLocation>{location?.name}</StyledRewardsLocation>
      <UIFlexWrapBox sx={{ mt: '29px', gap: 4, alignItems: 'center' }}>
        <RewardsCardPoint itemPoint={rewardItem?.point} />
        {rewardItem?.coupon && (
          <UIFlexWrapBox
            sx={{
              alignItems: 'center',
              mt: '12px',
              color: 'rgba(137, 200, 198, 0.8)',
            }}
          >
            <Redeem style={{ fontSize: '20px' }} />
            <Typography sx={{ fontWeight: 600, mt: '4px' }}>
              {rewardItem?.coupon} {t('common.coupons')}
            </Typography>
          </UIFlexWrapBox>
        )}
      </UIFlexWrapBox>
      <RewardsCardProgress
        myPoint={userPoint}
        itemPoint={rewardItem?.point ?? 0}
      />
      <StyledRewardsCardPoint sx={{ fontSize: '16px' }}>
        {t('common.points-completion')}:{' '}
        <span>
          {userPoint}/{rewardItem?.point ?? 0}
        </span>
      </StyledRewardsCardPoint>
      <UIFlexWrapBox mt="20px">
        <StyledRewardsSpecKey>{product.short}</StyledRewardsSpecKey>
      </UIFlexWrapBox>
    </>
  );
};
