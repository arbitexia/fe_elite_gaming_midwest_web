import { useEffect } from 'react';
import { DashboardLayout } from '@/layouts';
import { UIContainer } from '@/components/UI';
import { LocationDetailHeader } from '@/modules/Locations/Detail/Header';
import { LocationsDetail } from '@/modules/Locations/Detail';
import { useRouter } from 'next/router';
import { useReward } from '@/hooks';

const LocationsById = () => {
  const router = useRouter();
  const { id } = router.query;
  const { availableRewards, onFilterRewardsByLocationId } = useReward();
  useEffect(() => {
    onFilterRewardsByLocationId({
      filterBy: { locationId: parseInt(id as string) },
      cursor: { page: 0, size: 1000 },
    });
  }, [id]);

  return (
    <DashboardLayout
      title={availableRewards ? availableRewards.name : 'Rewards'}
    >
      {availableRewards && (
        <UIContainer sx={{ minHeight: 'calc(100vh - 86px)' }}>
          <LocationDetailHeader name={availableRewards.name} />
          <LocationsDetail rewardItem={availableRewards} />
        </UIContainer>
      )}
    </DashboardLayout>
  );
};

export default LocationsById;
