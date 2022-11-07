import { UIFlexCenterBox, UIFlexColumnBox } from '@/components/UI';
import {
  StyledCardBox,
  StyledLocationBox,
  StyledPointText,
  StyledScoreText,
} from './ui';
import { LocationType } from '@/types';

export type PointsCardProps = {
  index: number;
  deg: number;
  item: LocationType;
  filter: boolean;
};

const PointsCard = ({ index, deg, item, filter }: PointsCardProps) => {
  return (
    <StyledCardBox
      sx={{
        transform: `rotateY(${deg * index}deg) translateZ(40vw)`,
        filter: filter ? 'none' : 'blur(10px)',
      }}
    >
      <UIFlexCenterBox sx={{ position: 'relative', height: '100%' }}>
        <StyledLocationBox>{item.location}</StyledLocationBox>
        <UIFlexColumnBox
          sx={{
            height: '100%',
            width: '100%',
            top: 0,
          }}
        >
          <StyledScoreText>{item.point}</StyledScoreText>
          <StyledPointText>points</StyledPointText>
        </UIFlexColumnBox>
      </UIFlexCenterBox>
    </StyledCardBox>
  );
};

export default PointsCard;
