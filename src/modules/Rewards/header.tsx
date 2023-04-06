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
import { useLocation } from '@/hooks';
import { LocationType } from '@/types';

type DropboxType = {
  value: string;
  label: string;
};
type RewardHeaderProps = {
  setFilterLocation?: (locationId: number) => void;
  isFilter?: boolean;
};

const RewardsHeader = ({
  setFilterLocation,
  isFilter = false,
}: RewardHeaderProps) => {
  const router = useRouter();
  const { id } = router.query;
  const { locations } = useLocation();
  const [locationData, setLocationData] = useState<DropboxType[]>([
    {
      value: '0',
      label: 'any',
    },
  ]);

  useEffect(() => {
    if (locations?.length > 0) {
      const filteredLocation = locations?.map((obj: LocationType) => {
        return { label: obj.name, value: obj.id.toString() };
      });
      setLocationData([
        {
          value: '0',
          label: 'any',
        },
        ...filteredLocation,
      ]);
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
            <UISelectBox
              items={locationData}
              onSelectChange={(value) => {
                setFilterLocation && setFilterLocation(+value);
              }}
            />
          </StyledFilterBox>
          <StyledFilterBox>
            <Typography>Points</Typography>
            <UISelectBox
              items={pointData}
              onSelectChange={(value) => console.log(value)}
            />
          </StyledFilterBox>
        </UIFlexWrapBox>
      )}
    </UIFlexSpaceBox>
  );
};
export default RewardsHeader;
