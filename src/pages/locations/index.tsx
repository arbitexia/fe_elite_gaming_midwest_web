import { useState, useEffect } from 'react';
import { UIContainer, UIWrapPanel } from '@/components/UI';
import { LocationsHeader, LocationsCard } from '@/modules/Locations';
import { DashboardLayout } from '@/layouts';
import { useLocation } from '@/hooks';
import LoadingScreen from '@/components/App/LoadingScreen';

const Locations = () => {
  const [searchValue, setSearchValue] = useState('');
  const { loading, locations, onGetLocations } = useLocation();

  useEffect(() => {
    onGetLocations({ filterBy: { search: searchValue } });
  }, [searchValue]);

  return (
    <DashboardLayout title="Locations">
      <UIContainer sx={{ minHeight: 'calc(100vh - 86px)' }}>
        <LocationsHeader
          searchValue={searchValue}
          onValueChange={(value) => setSearchValue(value)}
        />
        <UIWrapPanel itemSpacing={40} paddingY={60}>
          {loading ? (
            <LoadingScreen />
          ) : (
            locations.map((item) => {
              return <LocationsCard key={item.id} item={item} />;
            })
          )}
        </UIWrapPanel>
      </UIContainer>
    </DashboardLayout>
  );
};

export default Locations;
