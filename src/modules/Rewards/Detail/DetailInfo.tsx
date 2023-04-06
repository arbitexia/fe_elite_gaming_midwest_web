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
import { Box } from '@mui/material';

export type RewardsInfoBoxProps = {
  myPoint: number;
  rewardItem: RewardType.Data;
};

export const RewardsInfoBox = ({
  myPoint,
  rewardItem,
}: RewardsInfoBoxProps) => {
  const { location, product } = rewardItem;
  return (
    <>
      <StyledRewardsName>{product?.name}</StyledRewardsName>
      <StyledRewardsLocation>{location?.name}</StyledRewardsLocation>
      <Box mt="29px">
        <RewardsCardPoint itemPoint={product.point} />
      </Box>

      <RewardsCardProgress myPoint={myPoint} itemPoint={product.point} />
      <StyledRewardsCardPoint sx={{ fontSize: '16px' }}>
        Points Completion:{' '}
        <span>
          {myPoint}/{product.point}
        </span>
      </StyledRewardsCardPoint>
      <UIFlexWrapBox mt="20px">
        <StyledRewardsSpecKey>{product.short}</StyledRewardsSpecKey>
      </UIFlexWrapBox>
    </>
  );
};
