import { UIFlexCenterBox, UIFlexColumnBox } from '@/components/UI';
import {
  StyledCardBox,
  StyledLocationBox,
  StyledPointText,
  StyledScoreText,
} from './ui';
import { PointType } from '@/types';
import { useTranslation } from 'next-export-i18n';

export type PointsCardProps = {
  index: number;
  deg: number;
  item: PointType;
  filter: boolean;
};

const PointsCard = ({ index, deg, item, filter }: PointsCardProps) => {
  const { t } = useTranslation();
  return (
    <StyledCardBox
      sx={{
        transform: `rotateY(${deg * index}deg) translateZ(40vw)`,
        filter: filter ? 'none' : 'blur(10px)',
      }}
    >
      <UIFlexCenterBox sx={{ position: 'relative', height: '100%' }}>
        <StyledLocationBox>
          {item.userLocation?.location?.name ?? ''}
        </StyledLocationBox>
        <UIFlexColumnBox
          sx={{
            height: '100%',
            width: '100%',
            top: 0,
          }}
        >
          <StyledScoreText>{item.point}</StyledScoreText>
          <StyledPointText>{t('point.points')}</StyledPointText>
        </UIFlexColumnBox>
      </UIFlexCenterBox>
    </StyledCardBox>
  );
};

export default PointsCard;
