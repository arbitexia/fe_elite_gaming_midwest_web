import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import {
  UIFlexSpaceBox,
  UISelectBox,
  UIImage,
  UIFlexWrapBox,
} from '@/components/UI';
import { StyledFilterBox } from './ui';
import { Typography, Button } from '@mui/material';
import { pointData } from '@/_mock/rewards';
import { useAuth, useLocation } from '@/hooks';
import { LocationType } from '@/types';

type DropboxType = {
  value: string;
  label: string;
};
type RewardHeaderProps = {
  setFilterLocation?: (locationId: number) => void;
  setFilterPoint?: (pointId: number) => void;
  isFilter?: boolean;
};

const RewardsHeader = ({
  setFilterLocation,
  setFilterPoint,
  isFilter = false,
}: RewardHeaderProps) => {
  const router = useRouter();
  const { id } = router.query;
  const { locations } = useLocation();
  const [locationData, setLocationData] = useState<DropboxType[]>([]);

  useEffect(() => {
    if (locations?.length > 0) {
      const filteredLocation = locations?.map((obj: LocationType) => {
        return { label: obj.name, value: obj.id.toString() };
      });
      setLocationData(filteredLocation);
    }
  }, [locations]);
  return (
    <UIFlexSpaceBox sx={{ mt: '30px' }}>
      {id ? (
        <Button
          sx={{
            width: '85px',
            height: '70px',
            background: 'rgba(0, 0, 0, 0.15)',
            border: '1px solid rgba(139, 149, 148, 0.2)',
            borderRadius: '12px',
          }}
          onClick={() => router.push('/rewards')}
        >
          <UIImage src="images/icons/prev.svg" width={15} height={34} />
        </Button>
      ) : (
        <Typography
          sx={{
            fontWeight: '600',
            fontSize: '36px',
            lineHeight: '54px',
            alignItems: 'center',
            color: '#89C8C6',
          }}
        >
          Rewards
        </Typography>
      )}
      {isFilter && (
        <UIFlexWrapBox sx={{ gap: '30px' }}>
          <StyledFilterBox>
            <Typography>Location</Typography>
            {locationData?.length > 0 && (
              <UISelectBox
                items={locationData}
                onSelectChange={(value) => {
                  setFilterLocation && setFilterLocation(+value);
                }}
                selectedDefaultValue={Number(locationData[0].value)}
              />
            )}
          </StyledFilterBox>
          <StyledFilterBox>
            <Typography>Points</Typography>
            <UISelectBox
              items={pointData}
              onSelectChange={(value) =>
                setFilterPoint && setFilterPoint(+value)
              }
            />
          </StyledFilterBox>
        </UIFlexWrapBox>
      )}
    </UIFlexSpaceBox>
  );
};
export default RewardsHeader;
