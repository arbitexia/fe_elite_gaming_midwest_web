import { useEffect } from 'react';
import { DashboardLayout } from '@/layouts';
import { UIContainer, UIFlexCenterBox, UIWrapPanel } from '@/components/UI';
import { LocationDetailHeader } from '@/modules/Locations/Detail/Header';
import { LocationsDetail } from '@/modules/Locations/Detail';
import { useRouter } from 'next/router';
import { useReward } from '@/hooks';
import { useTranslation } from 'next-export-i18n';
import LoadingScreen from '@/components/App/LoadingScreen';

const LocationsById = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const { id } = router.query;
  const { loading, availableRewards, onFilterRewardsByLocationId } =
    useReward();
  useEffect(() => {
    onFilterRewardsByLocationId({
      filterBy: { locationId: parseInt(id as string) },
      cursor: { page: 0, size: 1000 },
    });
  }, [id]);

  return (
    <DashboardLayout
      title={availableRewards ? availableRewards.name : t('common.rewards')}
    >
      {loading ? (
        <UIWrapPanel itemSpacing={40} paddingY={60}>
          <LoadingScreen />
        </UIWrapPanel>
      ) : (
        availableRewards && (
          <UIContainer sx={{ minHeight: 'calc(100vh - 86px)' }}>
            <LocationDetailHeader name={availableRewards.name} />
            <LocationsDetail rewardItem={availableRewards} />
          </UIContainer>
        )
      )}
    </DashboardLayout>
  );
};

export default LocationsById;
