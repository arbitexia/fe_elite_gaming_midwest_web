import { UIContainer, UIWrapPanel } from '@/components/UI';
import { LocationsHeader, LocationsCard } from '@/modules/Locations';
import { DashboardLayout } from '@/layouts';
//import { locationsData } from '@/_mock/Locations';

const Locations = () => {
  return (
    <DashboardLayout title="Locations">
      <UIContainer sx={{ minHeight: 'calc(100vh - 86px)' }}>
        <LocationsHeader />
        <UIWrapPanel itemSpacing={40} paddingY={60}>
          {locationsData.map((item) => {
            return <LocationsCard key={item.id} item={item} />;
          })}
        </UIWrapPanel>
      </UIContainer>
    </DashboardLayout>
  );
};

export default Locations;
