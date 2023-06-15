import React, { useState, useEffect } from 'react';
import { Divider } from '@mui/material';
import { UIContainer, UIWrapPanel } from '@/components/UI';
import {
  RewardsHeader,
  RewardsFilterBox,
  RewardsCard,
} from '@/modules/Rewards';
import { DashboardLayout } from '@/layouts';
import { useAuth, usePoint, useReward } from '@/hooks';
import { UserType } from '@/types';
import LoadingScreen from '@/components/App/LoadingScreen';

const Rewards = () => {
  const { loading, rewards, onFilterRewards } = useReward();
  const { points, onGetPoints } = usePoint();
  const { me } = useAuth({});
  const [filterPoint, setFilterPoint] = useState<number>(0);
  const [filterLocation, setFilterLocation] = useState<number>();

  useEffect(() => {
    fetchRewards();
  }, [filterLocation, filterPoint]);

  const fetchRewards = async () => {
    let from = 0;
    let to = 0;
    try {
      if (filterPoint > 0) {
        switch (filterPoint) {
          case 1:
            from = 0;
            to = 1000;
            break;
          case 2:
            from = 1000;
            to = 2000;
            break;
          case 3:
            from = 30000;
            to = 4000;
            break;
          case 4:
            from = 4000;
            to = 5000;
            break;
          default:
            from = 5000;
            to = 1;
            break;
        }
      }

      await onGetPoints({
        userId: Number((me as UserType.User)?.id) ?? 0,
      });
      await onFilterRewards({
        filterBy: { locationId: filterLocation, fromPoint: from, toPoint: to },
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <DashboardLayout title="Rewards">
      <UIContainer sx={{ minHeight: 'calc(100vh - 86px)' }}>
        <RewardsHeader
          setFilterLocation={setFilterLocation}
          setFilterPoint={setFilterPoint}
          isFilter={true}
        />
        <Divider
          sx={{
            mt: '26px',
            borderColor: 'rgba(137, 200, 198, 0.5)',
          }}
        />
        <RewardsFilterBox />
        <UIWrapPanel itemSpacing={40} paddingY={60}>
          {loading ? (
            <LoadingScreen />
          ) : (
            <>
              {rewards?.map((item) => {
                const userPoint =
                  points.find(
                    (p) => p?.userLocation?.locationId === item.locationId
                  )?.point ?? 0;
                return (
                  <RewardsCard
                    key={item.id}
                    userPoint={userPoint}
                    userCoupon={(me as UserType.User)?.coupon ?? 0}
                    item={item}
                  />
                );
              })}
            </>
          )}

          {/* {*/}
        </UIWrapPanel>
      </UIContainer>
    </DashboardLayout>
  );
};

export default Rewards;
