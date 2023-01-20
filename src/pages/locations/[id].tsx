import { DashboardLayout } from '@/layouts';
import { UIContainer } from '@/components/UI';
import { LocationDetailHeader } from '@/modules/Locations/Detail/Header';
// import { Divider } from '@mui/material';
import { LocationsDetail } from '@/modules/Locations/Detail';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
//import { locationsData } from '@/_mock/Locations';
import { LocationType } from '@/types';
import { useLocation } from '@/hooks';

const LocationsById = () => {
  const router = useRouter();
  const { id } = router.query;
  const { onGetLocationById } = useLocation();
  const [locationItem, setLocationItem] = useState<
    LocationType | undefined | null
  >(null);
  useEffect(() => {
    setLocationItem(onGetLocationById(parseInt(id as string)));
  }, [id]);

  return (
    <DashboardLayout title={locationItem ? locationItem.name : 'Rewards'}>
      {locationItem && (
        <UIContainer sx={{ minHeight: 'calc(100vh - 86px)' }}>
          <LocationDetailHeader name={locationItem.name} />
          <LocationsDetail locationItem={locationItem} />
        </UIContainer>
      )}
    </DashboardLayout>
  );
};

export default LocationsById;
