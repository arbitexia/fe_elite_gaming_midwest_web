import { useState } from 'react';
import PointsCard from './PointsCard';
import { UIImage } from '@/components/UI';
import {
  StyledArrowButton,
  StyledPointMainBox,
  StyledPointAnimBox,
  StyledSendButton,
} from './ui';
import { PointType } from '@/types';

interface PointsContentProps {
  points: PointType[];
}

const PointsContent = ({ points }: PointsContentProps) => {
  const [currDeg, setCurrDeg] = useState(0);
  const [second, setSecond] = useState(1);
  const rotateAngle = 360 / points.length;
  const handleNext = () => {
    if (currDeg - rotateAngle <= -360) {
      setSecond(0);
      setCurrDeg(rotateAngle);
      setTimeout(() => {
        setSecond(1);
        setCurrDeg((prev) => prev - rotateAngle);
      }, 100);
    } else {
      setTimeout(() => {
        setSecond(1);
        setCurrDeg((prev) => prev - rotateAngle);
      }, 100);
    }
  };
  const handlePrev = () => {
    if (currDeg + rotateAngle >= 360) {
      setSecond(0);
      setCurrDeg(-rotateAngle);
      setTimeout(() => {
        setSecond(1);
        setCurrDeg((prev) => prev + rotateAngle);
      }, 100);
    } else {
      setTimeout(() => {
        setSecond(1);
        setCurrDeg((prev) => prev + rotateAngle);
      }, 100);
    }
  };
  return (
    <>
      <StyledPointMainBox>
        <StyledPointAnimBox
          sx={{
            transform: `translateZ(-35vw) rotateY(${currDeg}deg)`,
            transition: `transform ${second}s`,
          }}
        >
          {points.map((item, index) => {
            return (
              <PointsCard
                key={item.id}
                index={index}
                deg={rotateAngle}
                item={item}
                filter={
                  (points.length - currDeg / rotateAngle) % points.length ===
                  index
                }
              />
            );
          })}
        </StyledPointAnimBox>
        <StyledArrowButton
          sx={{
            left: 'calc(140% - 34px)',
          }}
          onClick={handleNext}
        >
          <UIImage src="images/icons/next.svg" width={30} height={52} />
        </StyledArrowButton>
        <StyledArrowButton
          sx={{
            left: 'calc(-40% - 34px)',
          }}
          onClick={handlePrev}
        >
          <UIImage src="images/icons/prev.svg" width={30} height={52} />
        </StyledArrowButton>
      </StyledPointMainBox>
      <StyledSendButton>Send Email</StyledSendButton>
    </>
  );
};

export default PointsContent;
